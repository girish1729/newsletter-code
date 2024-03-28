import Conditional from './Conditional.svelte';

const app = new Conditional({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
