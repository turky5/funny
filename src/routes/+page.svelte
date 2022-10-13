<script>
	let initMoney = 100000;
	let devedenRatio = 0.1;
	let monthlyAdd = 2000;
	let years = 5;

	let total = 0;

	const calcRevenew = () => {
		total = initMoney;
		for (let i = 0; i < years; i++) {
			total = total + total * devedenRatio + (monthlyAdd * 12);
		}
	}

	// $: for (let i = 0; i < years; i++) {
	// 		total = total + total * devedenRatio + monthlyAdd;
	// 	}

</script>

<div class="flex flex-col justify-center items-stretch gap-8 rounded-lg p-4 max-w-lg mx-auto">
	<div class="text-3xl text-black text-center">حاسبة الاستثمار</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center">
			<label for="steps-range" class="block mb-2 text-xl font-medium text-gray-900 ">مبلغ الاستثمار المبدئي</label>
			<div class="text-black">{initMoney} ريال </div>
		</div>
		<input id="steps-range" type="range" min="50000" max="5000000" step="50000" bind:value={initMoney} class="w-full h-1 bg-black rounded-full appearance-none cursor-pointer ">
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center">
			<label for="steps-range" class="block mb-2 text-xl font-medium text-gray-900 ">نسبة الأرباح السنوية</label>
			<div class="text-black">%{Math.round(devedenRatio * 100)}</div>
		</div>
		<input id="steps-range" type="range" min="0.01" max="0.5" step="0.01" bind:value={devedenRatio} class="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer ">
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center">
			<label for="steps-range" class="block mb-2 text-xl font-medium text-gray-900 ">المبلغ الشهري المضاف</label>
			<div class="text-black">{monthlyAdd} ريال </div>
		</div>
		<input id="steps-range" type="range" min="100" max="20000" step="100" bind:value={monthlyAdd} class="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer ">
	</div>

	<div class="flex flex-col justify-center items-stretch gap-2">
		<div class="flex justify-between items-center">
			<label for="steps-range" class="block mb-2 text-xl font-medium text-gray-900 ">عدد السنوات</label>
			<div class="text-black">{years} {years >= 3 && years <= 10 ? 'سنوات':'سنة'}</div>
		</div>
		<input id="steps-range" type="range" min="3" max="30" step="1" bind:value={years} class="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer ">
	</div>

	<button class="bg-orange-400 p-2 text-xl rounded-lg" on:click={calcRevenew}>احسب</button>

	<div class="text-4xl text-center my-6">{Math.round(total)} ريال </div>
	<div class="text-center text-xl">{Math.round((total * devedenRatio) / 12)} التوزيعات الشهرية </div>
</div>

<style>
	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 12px;
		height: 20px;
		border-radius: 20px;
		background: rgb(251 146 60 / 1);
		cursor: pointer;
		border: 2px solid black;
	}
</style>