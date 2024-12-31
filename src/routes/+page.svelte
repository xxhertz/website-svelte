<script lang="ts">
	import Backdrop from "../components/Backdrop.svelte"
	import Welcome from "../components/Welcome.svelte"
	import WelcomeHome from "../components/WelcomeHome.svelte"

	let canContinue = $state(false)
	let interacted = $state(false)

	let backgroundMusic = $state<HTMLAudioElement>()
	let musicState = $state({
		volume: 0.2,
		paused: false,
	})

	$effect(() => {
		async function resume() {
			await backgroundMusic?.play()
			document.body.onclick = null
			document.body.onkeydown = null

			interacted = true
		}

		if (backgroundMusic && canContinue) {
			document.body.onkeydown = resume
			document.body.onclick = resume
		}
	})
</script>

<audio bind:this={backgroundMusic} bind:paused={musicState.paused} bind:volume={musicState.volume} src="/audio.mp3"></audio>
<Backdrop>
	{#if !interacted}
		<Welcome>
			<span class="text-7xl text-white font-sans h-24 leading-snug {interacted ? 'transition-opacity duration-500 ease-in-out opacity-0' : ''}">fini</span
			>

			<WelcomeHome bind:canContinue {interacted} />
		</Welcome>
	{/if}
</Backdrop>
