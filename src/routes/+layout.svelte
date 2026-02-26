<script>
	import '../styles/global.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Cold Rice LLC</title>
	<meta name="description" content="Cold Rice is a web development studio founded by Mitchell Barton. Based in Salt Lake City, UT, Cold Rice builds bespoke websites for cultural and commercial clients." />
	<meta property="og:title" content="Cold Rice LLC" />
	<meta property="og:site_name" content="Cold Rice LLC" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="/cold-rice-og.jpg" />
</svelte:head>

<div id="app">
	<main>
		{@render children()}
	</main>

	<footer class="py-12 px-16 text-center font-secondary text-base-minus">
		© Cold Rice LLC {new Date().getFullYear()}
	</footer>
</div>
