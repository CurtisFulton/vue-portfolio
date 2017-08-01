<template>
	<main-layout>
		<v-container fill-width fluid class="pa-0">
			<v-project-header>Poll Website</v-project-header>
			<v-container fill-height fluid class="pl-0">
				<v-layout row wrap>
					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Project Summary</h2>
						<div class="ml-3">
							<p>
								This was my first project in web development. The goal of this was to get a basic understanding of all the core concepts, and so I decided to keep the frameworks to a minimum. A big part of the website was the backend and getting the polling to work properly so I focused on that. Unfortunately I never go to really start on the UI side of things due to having the do the <router-link to="/portfolio/north-force">North Force Landscaping website</router-link>. I have decided to leave it as it, to keep a record what my first attempt at a website was like.
							</p>
							<p>
								More info to come...
							</p>
						</div>
					</v-project-body>

					<v-project-technologies class="mt-4 mb-5">
						<v-technology-card>
							<h1 class="headline">HTML</h1>
							<p>
							</p>
						</v-technology-card>
						<v-technology-card>
							<h1 class="headline">CSS</h1>
							<p>
							</p>
						</v-technology-card>
					</v-project-technologies>
				</v-layout>
			</v-container>
		</v-container>
	</main-layout>
</template>

<script>

import mainLayout from '../../layouts/main-layout.vue'; 

export default {
	name: "v-contact",
	data: function() {
		return {

		}
	},
	components: {
		mainLayout
	}
}

</script>

<style lang="scss" scoped>

</style>