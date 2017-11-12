<template>
	<div class="background-gradient">
		<v-nav-bar></v-nav-bar>
		<main class="content-wrapper">
			<v-card imgSrc="/static/logo.png" title="Project 1">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</v-card>
			<v-card imgSrc="/static/logo.png" title="Project 2">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</v-card>
			<v-card imgSrc="/static/logo.png" title="Project 3">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</v-card>
			<v-card imgSrc="/static/logo.png" title="Project 4">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.</p>
			</v-card>
		</main>
	</div>
</template>

<script>

export default {
  name: 'Portfolio',
  data() {	
  	return {

  	}
  },
};
</script>


<style scoped>

main {
	min-height: calc(100% - 4em);
	height: auto;

	display: flex;
	flex-direction: row;
	overflow-y: auto;
	justify-content: space-between;
	align-content: flex-start;
	flex-wrap: wrap;

	padding-left: 5%;
	padding-right: 5%;
}

@media only screen and (max-width: 500px){
	main {
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		padding-left: 0em;
		padding-right: 0em;
	}
}

</style>
