<script lang="ts">
	let { children } = $props()
</script>

<div class="fixed top-0 left-0 h-full w-full cursor-[url('/cursor.png')_16_16,_auto] bg-[url('/background.png')] animate-[appear_1s_forwards_1]">
	{@render children?.()}
</div>
