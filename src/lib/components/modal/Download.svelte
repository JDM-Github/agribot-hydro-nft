<script lang="ts">
    let showChoiceModal = true;
    const downloadLink = "https://example.com/download";

    function useWebVersion() {
        showChoiceModal = false;
        localStorage.setItem("useWebVersion", "true");
    }

    function downloadDesktopApp() {
        window.location.href = downloadLink;
    }

    if (typeof window !== "undefined" && localStorage.getItem("useWebVersion") === "true") {
    }
</script>

{#if showChoiceModal}
    <div class="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 animate-fadeIn">
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-700 animate-scaleIn">
            <h2 class="text-3xl font-extrabold text-center mb-6">
                💻 Do you want to download the Desktop version?
            </h2>
            <div class="flex flex-col gap-4">
                <button 
                    on:click={downloadDesktopApp} 
                    class="w-full bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    ✅ Yes, Download Now
                </button>
                <button 
                    on:click={useWebVersion} 
                    class="w-full bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    ❌ No, Thanks
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes scaleIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    .animate-fadeIn {
        animation: fadeIn 0.5s ease-out;
    }
    .animate-scaleIn {
        animation: scaleIn 0.3s ease-out;
    }
</style>
