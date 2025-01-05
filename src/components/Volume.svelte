<script lang="ts">
	import { disappear } from "../lib"

	let { musicState = $bindable() }: { musicState: { volume: number; paused: boolean } } = $props()
</script>

<input
	in:disappear|global={{ goal: 0.5 }}
	onmousemove={(v) => (musicState.volume = Number(v.currentTarget.value) / 100)}
	onchange={(v) => (musicState.volume = Number(v.currentTarget.value) / 100)}
	type="range"
	step="0.01"
	min="0"
	max="100"
	defaultValue="10"
	class="opacity-50 absolute bottom-12 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-1 bg-white"
/>

<style>
	input::-webkit-slider-thumb,
	input::-moz-range-thumb {
		box-shadow: 0 0 5px #fff;
		border-radius: 50%;
	}
</style>
