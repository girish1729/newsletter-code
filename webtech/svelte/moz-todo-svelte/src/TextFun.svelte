<script>
	import { fade } from 'svelte/transition';
	import { marked } from 'marked';
	let visible = true;
	let text = `Some words are *italic*, some are **bold**`;
	let name = '';
</script>

	<h2> Text area in svelte </h2>
<textarea bind:value={text} />

	<h2> Text input in svelte </h2>
<input bind:value={name} placeholder="enter your name" />
<p>Hello {name || 'stranger'}!</p>

{@html marked(text)}

	<h2> Fade in demo </h2>
<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:fade>Fades in and out</p>
{/if}

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>


