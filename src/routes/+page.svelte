<script lang="ts">
	import Backdrop from "../components/Backdrop.svelte"
	import BirthdayClock from "../components/BirthdayClock.svelte"
	import Button from "../components/Button.svelte"
	import DarkReaderWarning from "../components/DarkReaderWarning.svelte"
	import Pause from "../components/Pause.svelte"
	import Socials from "../components/Socials.svelte"
	import Volume from "../components/Volume.svelte"
	import Welcome from "../components/Welcome.svelte"
	import WelcomeHome from "../components/WelcomeHome.svelte"
	import { disappear, projects } from "$lib"
	import Projects from "../components/Projects.svelte"
	import ViewProject from "../components/ViewProject.svelte"
	import ProjectButton from "../components/ProjectButton.svelte"

	let canContinue = $state(false)
	let interacted = $state(false)
	let projectState = $state({
		currentlyViewing: undefined,
		viewProjects: false,
	})

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

			// 5% odds
			if (Math.random() > 0.95 && backgroundMusic) backgroundMusic.src = "mrkillmyself.mp3"
			await backgroundMusic?.play()
		}

		if (backgroundMusic && canContinue) {
			document.body.onkeydown = resume
			document.body.onclick = resume
		}
	})
</script>

<svelte:window onfocus={() => (document.title = "fini's home")} onblur={() => (document.title = "\u200E")} />
<!-- <svelte:body oncontextmenu={(e) => e.preventDefault()} onkeyup={(e) => e.preventDefault()} onkeydown={(e) => e.preventDefault()} /> -->

<audio bind:this={backgroundMusic} bind:paused={musicState.paused} bind:volume={musicState.volume} src="autumnrust.mp3"></audio>
<Backdrop>
	<DarkReaderWarning />
	{#if !interacted}
		<Welcome>
			<span out:disappear class="text-7xl text-white font-sans h-24 leading-snug">fini</span>

			<WelcomeHome bind:canContinue />
		</Welcome>
	{:else}
		{#if !projectState.viewProjects}
			<Socials>
				<Button onclick={() => window.open("https://github.com/xxhertz")}>github</Button>
				<Button onclick={() => window.open("https://youtube.com/c/hzjumps")}>youtube</Button>
				<Button onclick={() => window.open("https://discord.gg/pNrZeWcbap")}>discord</Button>
				<Button onclick={() => window.open("https://twitch.tv/hzjumps")}>twitch</Button>
				<Button animate={true} onclick={() => (projectState.viewProjects = true)}>projects</Button>
			</Socials>
		{:else if !projectState.currentlyViewing}
			<Projects bind:viewProjects={projectState.viewProjects}>
				{#each Object.entries(projects) as [id, project]}
					<ProjectButton {project} bind:currentlyViewing={projectState.currentlyViewing} />
				{/each}
			</Projects>
		{:else}
			<ViewProject bind:currentlyViewing={projectState.currentlyViewing} />
		{/if}
		<BirthdayClock />
		<Volume bind:musicState />
		<Pause ref={backgroundMusic} bind:musicState />
	{/if}
</Backdrop>
