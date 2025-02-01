<script lang="ts">
	import { explode } from "$lib"

	let { children } = $props()
</script>

<div out:explode class="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-[100px] absolute shadow-[inset_0_0_50px_#fff] border border-white">
	{@render children?.()}
</div>
