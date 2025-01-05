<script lang="ts">
	import Backdrop from "../components/Backdrop.svelte"
	import BirthdayClock from "../components/BirthdayClock.svelte"
	import Button from "../components/Button.svelte"
	import Pause from "../components/Pause.svelte"
	import Socials from "../components/Socials.svelte"
	import Volume from "../components/Volume.svelte"
	import Welcome from "../components/Welcome.svelte"
	import WelcomeHome from "../components/WelcomeHome.svelte"
	import { disappear } from "../lib"

	let canContinue = $state(false)
	let interacted = $state(false)
	let viewProjects = $state(false)

	let backgroundMusic = $state<HTMLAudioElement>()
	let musicState = $state({
		volume: 0.1,
		paused: false,
	})

	$effect(() => {
		async function resume() {
			document.body.onclick = null
			document.body.onkeydown = null
			interacted = true

			await backgroundMusic?.play()
		}

		if (backgroundMusic && canContinue) {
			document.body.onkeydown = resume
			document.body.onclick = resume
		}
	})
</script>

<svelte:window onfocus={() => (document.title = "fini's home")} onblur={() => (document.title = "\u200E")} />

<audio bind:this={backgroundMusic} bind:paused={musicState.paused} bind:volume={musicState.volume} src="/audio.mp3"></audio>
<Backdrop>
	{#if !interacted}
		<Welcome>
			<span out:disappear class="text-7xl text-white font-sans h-24 leading-snug">fini</span>

			<WelcomeHome bind:canContinue />
		</Welcome>
	{:else}
		{#if !viewProjects}
			<Socials>
				<Button onclick={() => window.open("https://github.com/xxhertz")}>github</Button>
				<Button onclick={() => window.open("https://youtube.com/c/hzjumps")}>youtube</Button>
				<Button onclick={() => window.open("https://discord.gg/pNrZeWcbap")}>discord</Button>
				<Button onclick={() => window.open("https://twitch.tv/hzjumps")}>twitch</Button>
				<Button animate={true} onclick={() => (viewProjects = true)}>projects</Button>
			</Socials>
		{:else}
			<Socials>
				<Button onclick={() => window.open("https://github.com/CMD-X/CMD-X/")}>cmd-x</Button>
				<Button onclick={() => window.open("https://github.com/xxhertz/imagek_bot")}>imagek</Button>
				<Button onclick={() => window.open("https://github.com/xxhertz/website-svelte")}>this site</Button>
				<Button animate={true} onclick={() => (viewProjects = false)}>go back</Button>
			</Socials>
		{/if}
		<BirthdayClock />
		<Volume bind:musicState />
		<Pause ref={backgroundMusic} bind:musicState />
	{/if}
</Backdrop>
