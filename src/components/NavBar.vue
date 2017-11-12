<template>
	<header>
		<!-- Toggle controls for hamburger menu -->
		<label id="hamburger" for="menu-toggle">&#9776;</label>
		<input type="checkbox" id="menu-toggle">

		<!-- Nav Items -->
		<nav>
			<router-link class="btn" to="/">Home</router-link>
			<router-link class="btn" to="/About">About Me</router-link>
			<router-link class="btn" to="/Portfolio">Portfolio</router-link>
			<router-link class="btn" to="/Blog">Blog</router-link>
		</nav>
	</header>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
	line-height: 2.5em;
	background: rgba(255, 255, 255, 0.0);
	height: 4em;
	box-shadow: 1px 2px 1px #888888;
}

nav {
	display: flex;
	align-items: center;
	justify-content: center;

}

#hamburger {
	margin: 0 25px 0 0;
	font-size: 2em;
	line-height: 2em;
	display: none;
}

#menu-toggle {
	display: none;
}

@media only screen and (max-width: 500px){

	#hamburger {
		display: flex;
		justify-content: flex-end;

		cursor: pointer;
	}

	nav {
		display: none;
		width: 100%;
		height: calc(100% - 4em);

		flex-flow: column;

		position: fixed;
		top: 4em;

		background-color: rgba(240, 240, 240, 0.975);
	}

	nav a {
		width: 100%;
		z-index: 1;
		align-self: center;

		border: 1px solid #EAEAEB;
		
		height: 3em;
		line-height: 3em;
	}

	#menu-toggle:checked + nav {
		display: flex;
	}
}

</style>
