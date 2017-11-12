<template>
	<nav>
		<!-- Toggle controls for hamburger menu -->
		<label for="menu-toggle">&#9776;</label>
		<input type="checkbox" id="menu-toggle">

		<!-- Nav Items -->
		<section id="nav-items">
			<router-link class="btn" to="/">Home</router-link>
			<router-link class="btn" to="/About">About Me</router-link>
			<router-link class="btn" to="/Portfolio">Portfolio</router-link>
			<router-link class="btn" to="/Blog">Blog</router-link>
		</section>
	</nav>
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

nav {
	background: rgba(255, 255, 255, 0.0);
	text-align: center;
	height: 4em;
	line-height: 2.5em;
	box-shadow: 1px 2px 1px #888888;
}


label {
	margin: 0 25px 0 0;
	font-size: 2em;
	line-height: 2em;
	display: none;
}

#menu-toggle {
	display: none;
}

@media only screen and (max-width: 500px){
	label {
		display: block;
		cursor: pointer;

		width: 26px;
		float: right;

		margin-bottom: 0.1em; 
	}

	#nav-items {
		position: relative;
		display: none;
		flex-direction: column;
		z-index: 2;
		text-align: center;
		width: 100%;

		background: #FFFFFF;
		box-shadow: 0px 0px 1px #888888;
	}

	#nav-items a {
		border-bottom: 1px solid #EAEAEB;
	}

	#menu-toggle:checked + #nav-items {
		display: flex;
	}
}

</style>
