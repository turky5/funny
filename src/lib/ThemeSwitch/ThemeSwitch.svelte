<script>
	let darkMode = true;

	function handleSwitchDarkMode() {
			darkMode = !darkMode;

			darkMode
					? document.documentElement.classList.add('dark')
					: document.documentElement.classList.remove('dark');
	}
</script>

<div class="">
	<input checked={!darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
	<label for="theme-toggle" />
</div>

<style lang="postcss">
	#theme-toggle {
			@apply invisible;
	}

	#theme-toggle + label {
			@apply inline-block cursor-pointer h-8 w-8  rounded-full duration-300 content-[''];
	}

	#theme-toggle:not(:checked) + label {
			@apply bg-orange-100;
	}

	#theme-toggle:checked + label {
			@apply bg-transparent;
			box-shadow: inset -8px -8px 1px 1px #000;
	}
</style>