<script lang="ts">
	import { deblink, explode } from "../lib"

	let { children } = $props()
</script>

<div out:explode|global in:deblink|global={{ delay: 700, duration: 500 }} class="absolute p-24 left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
	{@render children?.()}
</div>
