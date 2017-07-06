<template>
	<nav class="fill-height side-nav-fixed">
		<div class="row nav-items">
			<ul class="col s12 row">
				<li class="col s12 nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
				<li class="col s12 nav-item"><router-link to="/about" class="nav-link">About</router-link ></li>
				<li class="col s12 nav-item"><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
				<li class="col s12 nav-item"><router-link to="/contact" class="nav-link">Get In Touch</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<script>

	export default {
		name: "v-home-ui",
		data: function() {
			return {

			}
		}
	}

</script>

<style lang="scss" scoped>
	$navColor: rgba(#ffffff, 0.5);

	.side-nav-fixed {
		display: flex;
		color: black;
		justify-content: center;
		align-items: center;
		background-color: $navColor;
	}

	.nav-items {
		width: 100%;

		ul {
			padding: 0;
		}
	}

	.nav-item {
		text-align: center;
		width: 100%;
		min-height: 4em;
		padding: 0;
	}

	.nav-link {
		color: black;
		background-color: inherit;

		box-shadow: none;

		width: 100%;
		height: 100%;
		margin: auto;

		font-size: 1.4em;

		&:hover {
			background-color: rgba(black, 0.2);
		}
	}
</style>