<script lang="ts">
	import type { Snippet } from "svelte"
	import type { MouseEventHandler } from "svelte/elements"
	import { blink } from "../lib"
	let { animate = false, children, onclick }: { animate?: boolean; children: Snippet; onclick: MouseEventHandler<HTMLButtonElement> } = $props()
</script>

<button
	class="hover:bg-[#22222240] bg-[#1113] hover:border-b-[#fedfff] text-white border-b-[1px] border-solid border-[#fb88ff] p-[30px] font-[Verdana] no-underline transition-colors duration-500 w-52"
	{onclick}
	out:blink={{ dont_animate: !animate }}
>
	{@render children?.()}
</button>

<style>
	button {
		text-shadow:
			0 0 5px #fb88ff,
			0 0 5px #fb88ff;
	}
</style>
