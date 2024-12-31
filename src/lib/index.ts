// place files you want to import through the `$lib` alias in this folder.

import { elasticInOut } from 'svelte/easing'
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

export function explode(node: HTMLElement) {
	const existingTransform = getComputedStyle(node).transform.replace('none', '')

	return {
		delay: 500,
		duration: 100,
		easing: elasticInOut,
		css: (t: number, u: number) => `transform: ${existingTransform} scale(${1 + u * 5}, ${t}); opacity: ${t}`
	}
}

export function dexplode(node: HTMLElement) {
	const existingTransform = getComputedStyle(node).transform.replace('none', '')

	return {
		delay: 0,
		duration: 100,
		easing: elasticInOut,
		css: (t: number, u: number) => `transform: ${existingTransform} scale(1, ${t}); opacity: ${t}`
	}
}