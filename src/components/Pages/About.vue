<template>
	<div class="background-gradient">
		<v-nav-bar></v-nav-bar>
		<main>
			<h1 class="center-text">About Me</h1>

			<h2>How I started</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<h2>Something else about me</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<h2>And one more</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</main>
	</div>
</template>

<script>

export default {
  name: 'AboutMe',
  data() {
    return {

    }
  },
};
</script>

<style scoped>

main {
	display: flex;
	flex-direction: column;
	align-items: stretch;

	width: 80%;
	height: calc(100% - 4em);

	margin-left: auto;
	margin-right: auto;
	text-align: left;

	overflow-y: auto;
	background-color: rgba(255, 255, 255, 0.5);
}

main > * {
	margin-right: 30px;
	margin-left: 30px;
}


@media only screen and (max-width: 500px) {
	main {
		width: 100%;
	}
}

</style>
