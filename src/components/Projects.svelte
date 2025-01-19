<script lang="ts">
	import { blink, deblink, explode } from "$lib"

	let { children, viewProjects = $bindable() } = $props()
	let mouseOver = $state(false)
</script>

<div
	out:explode|global
	in:deblink|global={{ delay: 700, duration: 500 }}
	class="absolute p-8 h-96 left-1/2 top-1/2 grid grid-cols-4 -translate-x-1/2 -translate-y-1/2 gap-4"
>
	{@render children?.()}

	<button
		class="text-white text-center col-span-4"
		onmouseover={() => (mouseOver = true)}
		onfocus={() => (mouseOver = true)}
		onmouseleave={() => (mouseOver = false)}
		onfocusout={() => (mouseOver = false)}
		out:blink|global={{ dont_animate: !mouseOver }}
		in:deblink|global={{ delay: 700, duration: 500 }}
		onclick={() => (viewProjects = false)}>back</button
	>
</div>

<style>
	button {
		text-shadow:
			0 0 5px #fb88ff,
			0 0 5px #fb88ff;
	}
</style>
