// place files you want to import through the `$lib` alias in this folder.

import { cubicInOut, linear } from 'svelte/easing'
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