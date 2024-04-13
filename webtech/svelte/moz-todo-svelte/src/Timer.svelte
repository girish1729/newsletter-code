<!-- https://eugenkiss.github.io/7guis/tasks#timer -->
<script>
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	let elapsed = 0;
	let duration = 5000;

	let last_time = window.performance.now();
	let frame;

	(function update() {
		frame = requestAnimationFrame(update);

		const time = window.performance.now();
		elapsed += Math.min(time - last_time, duration -
elapsed);

		last_time = time;
	})();

	onDestroy(() => {
		cancelAnimationFrame(frame);
	});

	let visible = true;
</script>

	<center>
<label>
	Elapsed time:
	<progress value={elapsed / duration} />
</label>

<div>{(elapsed / 1000).toFixed(1)}s</div>

<label>
	Tweak Duration setting:
	<input type="range" bind:value={duration} min="1" max="20000" />
</label>

<button on:click={() => (elapsed = 0)}>reset</button>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:fade>Fades in and out</p>
{/if}
	</center>

