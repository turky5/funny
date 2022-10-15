<script>
	import Meaure from './../components/Meaure.svelte';

	let initMoney = 100000;
	let devedenRatio = 0.1;
	let monthlyAdd = 2000;
	let years = 5;

	let total = 0;
	let monthly = 0;

	const calcRevenew = () => {
		total = initMoney;
		for (let i = 0; i < years; i++) {
			total = total + total * devedenRatio + (monthlyAdd * 12);
		}
		monthly = Math.round((total * devedenRatio) / 12);
	}

	let darkMode = false;

	function handleSwitchDarkMode() {
			darkMode = !darkMode;

			darkMode
					? document.documentElement.classList.add('dark')
					: document.documentElement.classList.remove('dark');
	}
</script>

<div class="flex flex-col justify-center items-stretch gap-6 rounded-lg p-4 max-w-lg mx-auto">
	<div class="flex justify-between items-center text-3xl">
		<div class="">
			<button on:click={handleSwitchDarkMode}>
				<img alt="appearance" src="/{darkMode ? 'sun' : 'moon'}.png"  class="w-6"/>
			</button>
		</div>
		<div class="flex-1">
			حاسبة الاستثمار
		</div>
		<div class="border border-black dark:border-white w-6 h-6 flex justify-center items-center rounded-full text-xl">
			!
		</div>
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center mb-2">
			<label for="steps-range" class="block text-xl font-medium">مبلغ الاستثمار المبدئي</label>
			<div class="text-gray-700 dark:text-gray-300">{initMoney} ريال </div>
		</div>
		<input id="steps-range" type="range" min="50000" max="5000000" step="50000" bind:value={initMoney} class="w-full h-1 bg-black dark:bg-white rounded-full appearance-none cursor-pointer ">
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center mb-2">
			<label for="steps-range" class="block text-xl font-medium">نسبة الأرباح السنوية</label>
			<div class="text-gray-700 dark:text-gray-300">%{Math.round(devedenRatio * 100)}</div>
		</div>
		<input id="steps-range" type="range" min="0.01" max="0.5" step="0.01" bind:value={devedenRatio} class="w-full h-1 bg-black dark:bg-white rounded-full appearance-none cursor-pointer ">
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center mb-2">
			<label for="steps-range" class="block text-xl font-medium">المبلغ الشهري المضاف</label>
			<div class="text-gray-700 dark:text-gray-300">{monthlyAdd} ريال </div>
		</div>
		<input id="steps-range" type="range" min="100" max="20000" step="100" bind:value={monthlyAdd} class="w-full h-1 bg-black dark:bg-white rounded-lg appearance-none cursor-pointer ">
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center mb-2">
			<label for="steps-range" class="block text-xl font-medium">عدد السنوات</label>
			<div class="text-gray-700 dark:text-gray-300">{years} {years >= 3 && years <= 10 ? 'سنوات':'سنة'}</div>
		</div>
		<input id="steps-range" type="range" min="3" max="30" step="1" bind:value={years} class="w-full h-1 bg-black dark:bg-white rounded-lg appearance-none cursor-pointer ">
	</div>

	<!-- <Meaure title="عدد السنوات" bind:value={years} min={3} max={30} step={1} /> -->

	<button class="bg-orange-400 p-2 text-xl rounded-lg" on:click={calcRevenew}>احسب</button>

	<div class="text-3xl text-center"> المبلغ الكلي {Math.round(total)} ريال </div>
	<div class="text-center text-xl"> التوزيعات الشهرية {monthly} ريال </div>
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