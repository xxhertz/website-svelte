// place files you want to import through the `$lib` alias in this folder.

import { cubicInOut, linear } from 'svelte/easing'

export type ProjectData = {
	name: string
	description: string
	links: {
		generic: string
	}
}

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

export function explode(node: HTMLElement) {
	const existingTransform = getComputedStyle(node).transform.replace('none', '')

	return {
		delay: 500,
		duration: 100,
		easing: cubicInOut,
		css: (t: number, u: number) => `transform: ${existingTransform} scale(${1 + u * 5}, ${t}); opacity: ${t}`
	}
}

export function disappear(node: HTMLElement, params?: { duration_override?: number, goal?: number }) {
	return {
		delay: 0,
		duration: params?.duration_override || 500,
		easing: cubicInOut,
		css: (t: number) => `opacity: ${params?.goal ? params?.goal * t : t}`
	}
}

export function blink(node: HTMLElement, params?: { dont_animate?: boolean }) {
	return {
		delay: 0,
		duration: 500,
		easing: linear,
		css: (t: number) => {
			const blinkState = Math.sin(t * 40) // seems like a good balance
			return params?.dont_animate ? "" : `opacity: ${blinkState}; animate: unset`
		}
	}
}

export function deblink(node: HTMLElement, params: { delay: number, duration: number }) {
	const existingTransform = getComputedStyle(node).transform.replace('none', '')
	return {
		delay: params.delay,
		duration: params.duration,
		easing: cubicInOut,
		css: (t: number, u: number) => `transform: ${existingTransform} scale(1, ${t}); opacity: ${t}`
	}
}

export const projects = {
	"CMD-X": {
		name: "CMD-X",
		description: "I co-founded CMD-X which was one of the largest ROBLOX admin scripts, written in Lua. CMD-X clocked over 1.2 million unique users over the course of 3 months after development stopped. It is no longer being maintained.",
		links: { generic: "https://github.com/CMD-X/CMD-X" }
	},

	"iMagek": {
		name: "iMagek",
		description: "I perform a variety of image operations from time to time using Paint .NET, so I made a Discord bot to do them for me. Written in JavaScript, with JSDoc type definitions.",
		links: { generic: "https://github.com/xxhertz/imagek_bot" }
	},

	"website": {
		name: "this website",
		description: "This website you're viewing is a recreation of what was originally made in 2019 with vanilla JavaScript HTML and CSS, no frameworks and no libraries. This version was made using SvelteKit in 2025.",
		links: { generic: "https://github.com/xxhertz/website-svelte" }
	},

	"easyscheduler": {
		name: "easyScheduler",
		description: "An extremely simple rate limiter, written in TypeScript. I was working with Riot Games API to create a Discord bot to calculate a specific player's average MMR, despite whether they were ranked or not. This required hundreds of API calls, and Riot has not one, but two different rate limits. You can make 20 calls per second, but only 100 per 2 minutes. This drove me to search for a library which supported this, and all of them were either too feature rich or didn't fulfill my needs, so I made my own.",
		links: { generic: "https://github.com/xxhertz/easyscheduler" }
	},

	"rgldl": {
		name: "rgldl",
		description: "RGL Downloader (shortened to rgldl) is a tool created for a community, it downloads all required maps simultaneously. RGLDL is my first Zig project, and I solely did it to learn the basics of the language.",
		links: { generic: "https://github.com/xxhertz/rgldl" }
	},

	"cacheclear": {
		name: "cacheClear",
		description: "Games these days oftentimes have random performance issues and clearing shadercache helps with fixing some of those issues. I wrote this to clear out commonly known (NVIDIA, DirectX, Steam) shadercache locations. Made in TypeScript for Deno.",
		links: { generic: "https://github.com/xxhertz/cacheclear" }
	},

	"league-sound-browser": {
		name: "League Emote Browser",
		description: "I wasn't sure what to develop for a while. I asked on Twitter & user DxLaser suggested I make a website where you can hear all of the sound effects for the emotes in League of Legends, since you can't hear them in-game without owning them and equipping them and launching the game. So I downloaded a bunch of tools the community had made, wrote some of the worst code I've ever written (in TypeScript), and managed to extract the audio files with ties to the emote ID. I made a website for it, using TailwindCSS and Svelte & SvelteKit for the first time with SSG (hosted on GitHub Pages, so this was required) and writing my own hacky Virtualized List for optimizations. It does not work on mobile whatsoever and it is far from perfect.",
		links: { generic: "https://github.com/xxhertz/league-sound-browser" }
	},

	"league-settings-freezer": {
		name: "League Settings Freezer",
		description: "A lot of League of Legends players, especially those in higher ranks or those who play on multiple servers, have multiple accounts. League stores your settings on the cloud, so whenever you change accounts, you have to fix your settings and make all of your adjustments every time you switch. This program freezes your settings whenever you're not in-game and unfreezes them when you are, allowing you to change your settings and have them be reflected on all accounts.",
		links: { generic: "https://github.com/xxhertz/league-sound-browser" }
	}
} as const satisfies Record<string, ProjectData>