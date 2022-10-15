<script>
	import '../app.css';
	import ThemeSwitch from '../lib/ThemeSwitch/ThemeSwitch.svelte';

	let navIsOpend = false;
	const togNav = () => (navIsOpend = !navIsOpend);

	const routes = [
		{ id: 1, text: 'إحصائيات', href: '/dashboard' },
		{ id: 2, text: 'المنيو', href: '/dashboard' },
		{ id: 6, text: 'تسجيل الخروج', href: '/' }
	];

	let darkMode = true;

	function handleSwitchDarkMode() {
			darkMode = !darkMode;

			darkMode
					? document.documentElement.classList.add('dark')
					: document.documentElement.classList.remove('dark');
	}
</script>

<!-- <header>
	<nav
		class="container mx-auto p-4 flex flex-col justify-center items-stretch fixed top-0 left-0 right-0 border dark:border-gray-600 border-t-0 border-r-0 border-l-0 bg-white text-black dark:bg-black dark:text-white bg-opacity-90 dark:bg-opacity-90"
	>
		<div class="flex justify-between items-stretch">
			<div class="flex gap-6 items-center">
				<div class="hidden md:flex">
					<button on:click={handleSwitchDarkMode}>
						<img alt="appearance" src="/{darkMode ? 'sun' : 'moon'}.png"  class="w-6"/>
					</button>
				</div>
				<div class="gap-4 hidden md:flex">
					{#each routes as route}
						<a
							href={route.href}
							class="text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-50 text-xl"
							>{route.text}</a
						>
					{/each}
				</div>
				<div class="flex gap-6 items-center">
					<button class="" on:click={togNav}>
						{#if !navIsOpend}
							<div class="w-5 flex flex-col justify-center items-stretch gap-2 md:hidden">
								<span class="border border-black dark:border-white rounded-full" />
								<span class="border border-black dark:border-white rounded-full" />
							</div>
						{:else}
							<div
								class="w-5 h-5 flex flex-col justify-center items-stretch gap-2 md:hidden relative"
							>
								<span
									class="border w-5 rotate-45 border-black dark:border-white rounded-full absolute top-1/2 left-0"
								/>
								<span
									class="border w-5 -rotate-45 border-black dark:border-white rounded-full absolute top-1/2 left-0"
								/>
							</div>
						{/if}
					</button>
					<div class="md:hidden">
						<button on:click={handleSwitchDarkMode}>
							<img alt="appearance" src="/{darkMode ? 'sun' : 'moon'}.png"  class="w-6"/>
						</button>
					</div>
				</div>
			</div>
			<div class="logo font-bold flex items-center gap-2">
				<div class="">NAME</div>
				<div class="w-8 h-8 bg-black dark:bg-white rounded-full flex justify-center items-center">
					<div style="width: 23px; height: 23px;" class="bg-orange-500 rounded-full" />
				</div>
			</div>
		</div>
		<div
			on:keypress={togNav}
			class="gap-4 flex flex-col justify-center items-stretch text-center sm:hidden"
		>
			{#if navIsOpend}
				{#each routes as route}
					<a
						href={route.href}
						class="text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-50 text-xl"
						>{route.text}</a
					>
				{/each}
			{/if}
		</div>
	</nav>
</header> -->

<main class="container mx-auto p-6">
	<slot />
</main>

<footer class="container mx-auto px-6">
	<hr class="border-gray-400 my-4" />
	<span class="block text-sm text-gray-500 text-center"
		>© 2022 <a href="https://alodhayb.netlify.app/" class="hover:underline">Alodhayb™</a> All
		Rights Reserved
	</span>
</footer>

<style>
	main {
		direction: rtl;
	}
</style>
