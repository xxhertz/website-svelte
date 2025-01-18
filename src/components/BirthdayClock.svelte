<script lang="ts">
	import { onMount } from "svelte"
	import { disappear } from "$lib"

	// spent like 2 days looking through js Date class documentation and couldn't find a proper timezone-oriented solution (seriously though.. why was this so difficult)
	// i want the timer to represent EST regardless of the viewers timezone
	// i don't think this works but i don't want to bother testing right now
	// FIXME

	const SECOND = 1 * 1000
	const MINUTE = 60 * SECOND
	const HOUR = 60 * MINUTE
	const DAY = 24 * HOUR
	const MONTH = 30 * DAY

	let months: number
	let days: number
	let hours: number
	let minutes: number
	let seconds: number
	let year: number = $state(new Date().getUTCFullYear())

	let duration = $state("")
	const pad = (n: number) => n.toString().padStart(2, "0")
	onMount(() => {
		const interval = setInterval(
			// IIFE which returns itself because i need this to run once and then every second
			(function invoke() {
				const now = new Date()
				year = now.getUTCFullYear()
				let birthday = new Date(Date.UTC(year, 9, 31, 4)) // 4 instead of 5 because of daylight saving
				if (now >= birthday) {
					year++
					birthday = new Date(Date.UTC(year, 9, 31, 4))
				}

				const timeUntilBirthday = birthday.valueOf() - now.valueOf()

				months = Math.floor(timeUntilBirthday / MONTH)
				days = Math.floor((timeUntilBirthday % MONTH) / DAY)
				hours = Math.floor((timeUntilBirthday % DAY) / HOUR)
				minutes = Math.floor((timeUntilBirthday % HOUR) / MINUTE)
				seconds = Math.floor((timeUntilBirthday % MINUTE) / SECOND)
				duration = `${pad(months)}:${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`

				return invoke
			})(),
			1000,
		)

		return () => clearInterval(interval)
	})
</script>

<span
	in:disappear={{ duration_override: 1000, goal: 0.7 }}
	class="absolute left-1/2 bottom-24 opacity-70 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-['Open_Sans']"
>
	{year - 2003} in {duration}
</span>
