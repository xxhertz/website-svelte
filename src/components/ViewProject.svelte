<script lang="ts">
	import { blink, deblink, explode, type ProjectData } from "$lib"

	let { currentlyViewing = $bindable() }: { currentlyViewing: ProjectData } = $props()
</script>

<div
	out:explode|global
	in:deblink|global={{ delay: 700, duration: 500 }}
	class="relative p-12 bg-black/50 backdrop-blur-[1px] min-w-96 max-w-[50%] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border-b"
>
	<div class="grid grid-cols-2 pb-4">
		<h1 class="text-white text-left">{currentlyViewing.name}</h1>
		<!-- this component will only render when currentlyViewing is NOT undefined, so we can just tell typescript to ignore this instead of making the property optional -->
		<button out:blink|global class="text-white text-right" onclick={() => (currentlyViewing = undefined as unknown as ProjectData)}>back</button>
	</div>

	<span class="text-white justify-normal">{currentlyViewing.description}</span>
	<br />
	<br />
	<a class="text-white" target="_blank" href={currentlyViewing.links.generic}>link</a>
</div>

<style>
	a,
	h1,
	button {
		text-shadow:
			0 0 5px #fb88ff,
			0 0 5px #fb88ff;
	}
</style>
