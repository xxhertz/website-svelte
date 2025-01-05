<script lang="ts">
	let { ref }: { ref: HTMLAudioElement } = $props()
	let paused = $state(false)
</script>

<button
	onclick={() => {
		if (ref.paused) ref.play()
		else ref.pause()
		paused = ref.paused
	}}
	class="bg-transparent border-none absolute bottom-1 font-['Press_Start_2P'] text-white opacity-50 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6"
>
	{#if paused}
		PAUSED
	{:else}
		PLAYING
	{/if}
</button>
