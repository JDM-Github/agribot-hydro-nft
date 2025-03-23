<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let modelPath = '/models/AGRIBOT.glb';
	let modelBlobUrl: string | null = null;
	let modelViewerRef: any;
	let worker: Worker | null = null;
	let loadingError = false;
	let isLoading = true;

	onMount(() => {
		worker = new Worker(new URL('$lib/workers/loadModel.ts', import.meta.url), {
			type: 'module'
		});

		worker.onmessage = (event) => {
			const { modelBlobUrls, error } = event.data;
			if (error) {
				alert(error);
				loadingError = true;
			} else {
				isLoading = false;
				modelBlobUrl = modelBlobUrls;
				console.log(modelBlobUrls);
			}
		};

		worker.postMessage({ modelPath, action: 'loadModel' });
	});

	onDestroy(() => {
		if (worker) {
			worker.terminate();
		}
	});

	const applyMaterialProperties = () => {
		if (!modelViewerRef?.model) return;
		modelViewerRef.model.materials.forEach((material: any) => {
			if (material.pbrMetallicRoughness) {
				material.pbrMetallicRoughness.setMetallicFactor(1);
				material.pbrMetallicRoughness.setRoughnessFactor(0);
			}
		});
	};
</script>

{#if isLoading}
	<p>Loading model...</p>
{:else}
	<model-viewer
		bind:this={modelViewerRef}
		src={modelBlobUrl}
		loading="eager"
		camera-controls
		disable-zoom
		tone-mapping="neutral"
		shadow-intensity="1"
		exposure="0.6"
		shadow-softness="1"
		environment-image="neutral"
		style="width: 100%; height: 500px;"
		on:load={applyMaterialProperties}
	></model-viewer>
{/if}

{#if loadingError}
	<p>Error loading model</p>
{/if}
