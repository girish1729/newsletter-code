<script>
	let fruits = [
		{  name: 'Apple' },
		{  name: 'Orange' },
		{  name: 'Grapes' },
		{  name: 'Pineapple' },
		{  name: 'Rose apple' },
		{  name: 'Passion fruit' }
	];
</script>

<h1>The fruits I like</h1>

<ul>
	{#each fruits as { name }, i}
		<li>
			{i}: {name}
		</li>
	{/each}
</ul>
