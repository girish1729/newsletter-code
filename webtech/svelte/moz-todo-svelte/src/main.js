import Conditional from './Conditional.svelte';
import Clock from './Clock.svelte';

const app = new Clock({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
