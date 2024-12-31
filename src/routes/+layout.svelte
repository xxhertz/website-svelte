<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		background: #000;
		overflow: hidden;
		user-select: none;
		cursor:
			url(cursor.png) 16 16,
			auto !important;
	}
</style>
