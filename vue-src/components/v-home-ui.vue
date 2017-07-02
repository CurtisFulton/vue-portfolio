<template>
	<div class="valign-wrapper col s12">
		<div class="row">
			<div class="valgin">
				<div class="row center">
					<div class="col s12 m12">
						<h2><strong>Curtis Fulton</strong></h2>
						<h4>Web Developer</h4>
					</div>
				</div>

				<nav class="row center">
					<div class="col s12 center no-padding">
						<ul>
							<li><a  href="/">Home</a></li>
							<li><a href="#">About Me</a></li>
							<li><a href="#">Portfolio</a></li>
							<li><a href="#">Get In Touch</a></li>
						</ul>
					</div>
			  	</nav>
			</div>
		</div>
	</div>
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
	nav {
		background-color: rgba(#D5D5D5, 0.75);
		box-shadow: none;
	}

	ul {
		display: inline-block;

		& a {
			font-size: 1.2em;
			color: #333333;
		}
	}
</style>