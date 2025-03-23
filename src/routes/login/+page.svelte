<script lang="ts">
	let isRegister = false;

	function toggleForm() {
		isRegister = !isRegister;
	}
</script>

<section class="flex w-full items-center justify-center bg-gray-100 py-10 sm:py-16">
	<!-- Large screen design (md and up) -->
	<div class="hidden md:flex relative h-[70vh] w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl">
		<!-- Green Welcome/Join panel -->
		<div class={`absolute inset-0 z-10 flex w-1/2 items-center justify-center bg-green-600 p-12 text-white transition-transform duration-700 ease-in-out ${isRegister ? 'translate-x-full' : 'translate-x-0'}`}>
			<div class="text-center space-y-4">
				<h2 class="text-4xl font-bold">{!isRegister ? "Welcome Back!" : "Join Our Research Project"}</h2>
				<p class="text-lg">
					{!isRegister 
						? "Already have an account? Log in to continue." 
						: "Create an account to explore our latest innovations."}
				</p>
			</div>
		</div>

		<div class="relative z-20 flex flex-1">
			<!-- Login Form -->
			<div class={`w-1/2 flex flex-col justify-center space-y-6 bg-white p-12 transition-transform duration-700 ease-in-out ${isRegister ? 'translate-x-0 opacity-0 pointer-events-none' : 'translate-x-full opacity-100'}`}>
				<h3 class="text-3xl font-bold text-green-700">Login to Your Account</h3>
				<form class="space-y-4">
					<div>
						<label class="block text-sm font-medium text-gray-700">Email</label>
						<input type="email" placeholder="Your Email" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Password</label>
						<input type="password" placeholder="Your Password" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
					</div>
					<button type="submit" class="w-full rounded-md bg-green-600 py-3 text-white font-semibold transition hover:bg-green-700">Log In</button>
				</form>
				<p class="text-center text-sm">Don't have an account?
					<button type="button" on:click={toggleForm} class="text-green-600 hover:underline">Register here</button>
				</p>
			</div>

			<!-- Register Form -->
			<div class={`absolute inset-0 w-1/2 flex flex-col justify-center space-y-6 bg-white p-12 transition-transform duration-700 ease-in-out ${isRegister ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
				<h3 class="text-3xl font-bold text-green-700">Create Your Account</h3>
				<form class="space-y-4">
					<div>
						<label class="block text-sm font-medium text-gray-700">Full Name</label>
						<input type="text" placeholder="Your Full Name" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Prototype ID</label>
						<input type="text" placeholder="Your Prototype ID" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700">Email</label>
						<input type="email" placeholder="Your Email" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label class="block text-sm font-medium text-gray-700">Password</label>
							<input type="password" placeholder="Create Password" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
						</div>
						<div>
							<label class="block text-sm font-medium text-gray-700">Confirm Password</label>
							<input type="password" placeholder="Confirm Password" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
						</div>
					</div>
					<button type="submit" class="w-full rounded-md bg-green-600 py-3 text-white font-semibold transition hover:bg-green-700">Register</button>
				</form>
				<p class="text-center text-sm">Already have an account?
					<button type="button" on:click={toggleForm} class="text-green-600 hover:underline">Login here</button>
				</p>
			</div>
		</div>
	</div>

	<!-- Mobile design (sm and below) -->
	<div class="block md:hidden w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
		<h3 class="text-2xl font-bold text-green-700 text-center">
			{isRegister ? "Create Your Account" : "Login to Your Account"}
		</h3>

		<form class="space-y-4 mt-6">
			{#if isRegister}
				<div>
					<label class="block text-sm font-medium text-gray-700">Full Name</label>
					<input type="text" placeholder="Your Full Name" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700">Prototype ID</label>
					<input type="text" placeholder="Your Prototype ID" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
				</div>
			{/if}

			<div>
				<label class="block text-sm font-medium text-gray-700">Email</label>
				<input type="email" placeholder="Your Email" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Password</label>
				<input type="password" placeholder="Your Password" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
			</div>

			{#if isRegister}
				<div>
					<label class="block text-sm font-medium text-gray-700">Confirm Password</label>
					<input type="password" placeholder="Confirm Password" class="w-full rounded-md border p-3 focus:border-green-500 focus:ring-green-500" />
				</div>
			{/if}

			<button type="submit" class="w-full rounded-md bg-green-600 py-3 text-white font-semibold transition hover:bg-green-700">
				{isRegister ? "Register" : "Log In"}
			</button>
		</form>

		<p class="text-center text-sm mt-4">
			{isRegister 
				? "Already have an account?" 
				: "Don't have an account?"}
			<button type="button" on:click={toggleForm} class="text-green-600 hover:underline">
				{isRegister ? "Login here" : "Register here"}
			</button>
		</p>
	</div>
</section>
