<script lang="ts">
	import { blink, deblink, type ProjectData } from "$lib"

	let { project = $bindable(), currentlyViewing = $bindable() }: { project: ProjectData; currentlyViewing?: ProjectData } = $props()

	let mouseOver = $state(false)
</script>

<button
	onmouseover={() => (mouseOver = true)}
	onfocus={() => (mouseOver = true)}
	onmouseleave={() => (mouseOver = false)}
	onfocusout={() => (mouseOver = false)}
	out:blink|global={{ dont_animate: !mouseOver }}
	in:deblink|global={{ delay: 700, duration: 500 }}
	onclick={() => (currentlyViewing = project)}
	class="px-4 border-b border-[#fb88ff] text-white text-center h-12 hover:bg-[#22222240] bg-[#1113] hover:border-b-[#fedfff] transition-colors duration-500 backdrop-blur-[1px]"
>
	{project.name}
</button>

<style>
	button {
		text-shadow: 0 0 5px #fb88ff;
	}
</style>
