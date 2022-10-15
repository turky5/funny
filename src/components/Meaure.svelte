<script>
	export let title = "";
	export let value = 4;
	export let min = 10;
	export let max = 100;
	export let step = 1;
</script>

<div class="flex flex-col justify-center items-stretch gap-2">
	<div class="flex justify-between items-center">
		<label for="steps-range" class="block mb-2 text-xl font-medium">{title}</label>
		<div class="text-gray-700 dark:text-gray-300">{value}</div>
	</div>
	<input id="steps-range" type="range" min={min} max={max} step={step} bind:value={value} class="w-full h-1 bg-black dark:bg-white rounded-lg appearance-none cursor-pointer">
</div>

<style>
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 14px;
		height: 20px;
		border-radius: 20px;
		background: rgb(251 146 60 / 1);
		cursor: pointer;
		border: 2px solid black;
	}
</style>