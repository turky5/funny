<script>
  import "../app.css";
</script>
<main class="container mx-auto p-4">
	<slot />
</main>
<footer class="container mx-auto p-4">
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<span class="block text-sm text-gray-500 text-center dark:text-gray-400">© 2022 <a href="https://alodhayb.netlify.app/" class="hover:underline">Alodhayb™</a>. All Rights Reserved.
	</span>
</footer>
<style>
	main {
		direction: rtl;
	}
</style>