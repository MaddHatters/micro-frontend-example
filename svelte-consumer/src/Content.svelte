
<script>
	import {getProductById, currency } from 'home_remote/products';
</script>

{#await getProductById(1)}
	<p>Loading Data...</p>
{:then product}

	<div class="grid grid-cols-2 gap-5">
		<div>
			<img src={product.image} alt={product.name} />
		</div>
		<div class="flex">
			<h1 class="font-bold text-3xl flex-grow">{product.name}</h1>
			<div class="font-bold text-3xl flex-end">
				{currency.format(product.price)}
			</div>
		</div>

        <div class="mt-10">{product.description}</div>
        <div class="mt-10">{product.longDescription}</div>
	</div>

{/await}