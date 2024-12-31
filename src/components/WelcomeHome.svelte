<script lang="ts">
	import { onMount } from "svelte"
	import { sleep } from "../lib"

	// 1. build the text "welcome home..." from left to right
	// 2. delete it from outward to center
	// 3. change to "click to continue..."
	// 4. continually blink until the user interacts
	// 5. play audio from interaction (required as per browser safety limitations)
	let currentText = $state<string>("")

	const firstText = Array.from("welcome home...")

	const textSteps = firstText
		.map((_, idx: number) => firstText.slice(0, idx + 1).join("")) // step 1
		.concat([firstText.join(""), firstText.join(""), firstText.join("")]) // delay by adding 3 entries of the full text
		.concat(firstText.map((_, idx: number) => firstText.slice(idx - firstText.length, firstText.length - idx).join(""))) // step 2
		.filter((v) => v !== "")

	onMount(async () => {
		for (const text of textSteps) {
			currentText = text
			await sleep((3 / textSteps.length) * 1000) // 3s for the whole sequence
		}

		currentText = "click to continue..."
	})
</script>

<span
	class="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 text-white font-['Courier_New'] text-nowrap {currentText === 'click to continue...'
		? 'animate-[appear_1s_infinite_alternate]'
		: ''}"
>
	{currentText}
</span>

<style>
	span {
		text-shadow:
			0 0 5px #000,
			0 0 5px #000,
			0 0 5px #000;
	}
</style>
