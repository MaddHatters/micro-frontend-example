
<script>
  import CreateHeader from 'home_remote/CreateHeader';

  window.addEventListener("load", (event) => {
	let header = document.getElementById('header')
	let body = document.getElementsByTagName("body")[0]
	CreateHeader(header);
  });

</script>

<div class="text-3xl mx-auto max-w-6xl">
	<header id="header"></header>
	Svelte Consumer
</div>