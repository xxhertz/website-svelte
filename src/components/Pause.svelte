<script lang="ts">
	import { disappear } from "$lib"

	let { ref, musicState = $bindable() }: { ref: HTMLAudioElement; musicState: { volume: number; paused: boolean } } = $props()
</script>

<button
	in:disappear|global={{ goal: 0.5 }}
	onclick={() => (ref.paused ? ref.play() : ref.pause())}
	class="bg-transparent border-none absolute bottom-1 font-['Press_Start_2P'] text-white opacity-50 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 text-xs"
>
	{#if musicState.paused}
		PAUSED
	{:else}
		PLAYING
	{/if}
</button>
