<script lang="ts">
	import type { ProjectData } from "$lib"



	const { project }: { project: ProjectData } = $props()
</script>

<div class="relative p-12 bg-black/50 backdrop-blur-[1px] w-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border-b">
	<div class="grid grid-cols-2 pb-4">
		<h1 class="text-white text-left">{project.name}</h1>
		<button class="text-white text-right">back</button>
	</div>
	
	<span class="text-white justify-normal">{project.description}</span>
</div>

<style>
	h1, button {
		text-shadow:
			0 0 5px #fb88ff,
			0 0 5px #fb88ff;
	}
</style>