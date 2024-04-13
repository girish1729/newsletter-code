<script>
	import Scatter from './Scatter.svelte';
	import scatterdata from './scatterdata.js';
</script>

<div class="chart">
	<h2>Anscombe's quartet</h2>

	<Scatter points={scatterdata.a} />
	<Scatter points={scatterdata.b} />
	<Scatter points={scatterdata.c} />
	<Scatter points={scatterdata.d} />
</div>

<style>
	.chart {
		width: 100%;
		max-width: 640px;
		height: calc(100% - 4em);
		min-height: 280px;
		max-height: 480px;
		margin: 0 auto;
	}
</style>
