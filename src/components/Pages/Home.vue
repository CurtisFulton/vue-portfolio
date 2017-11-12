<template>
	<main class="background-gradient">
		<canvas id="background-animation"></canvas>
		<section id="main-content">
			<h1>Curtis Fulton</h1>
			<h2>Web Developer</h2>
			<nav>
				<router-link class="btn" to="/About">About</router-link>
				<router-link class="btn" to="/Portfolio">Portfolio</router-link>
				<router-link class="btn" to="/Blog">Blog</router-link>
			</nav>
		</section>
	</main>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {

    }
  }
};
</script>


<style scoped>

nav {
	margin-top: 1em;
}

#background-animation {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	z-index: -1;
}

#main-content {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

</style>
