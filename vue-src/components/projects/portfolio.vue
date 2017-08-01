<template>
	<main-layout>
		<v-container fill-width fluid class="pa-0">
			<v-layout row wrap class="title-container">
				<v-flex sm1 md1>
					<v-btn to="/portfolio" exact flat class=""><v-icon large class="valign">keyboard_arrow_left</v-icon></v-btn>
				</v-flex>
				<v-flex sm11 md10 class="center-text">
					<h1 class="display-2">Portfolio Website</h1>
				</v-flex>
			</v-layout>
			<v-container fill-height fluid class="pl-0">
				<v-layout row wrap>
					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Project Summary</h2>
						<div class="ml-3">
							<p>
								This website was made to store and display all past, present and future projects. The website itself didn't need to be complicated
								in any way, so I decided to use this as a way to learn one of the major front-end frameworks, VueJS.
							</p>
							<p>
								Considering that just a couple months before starting this project I had never seen HTML/CSS, this was quite a large learning experience.
							</p>
						</div>
					</v-project-body>

					<v-project-technologies class="mt-4 mb-5">
						<v-technology-card>
							<h1 class="headline">VueJS</h1>
							<p>
								VueJS was used as the front end framework for this project. Vue Allows
								for better separation of HTML, CSS, and Javascript, allowing for better
								code reuse.
							</p>
						</v-technology-card>
						<v-technology-card>
							<h1 class="headline">VuetifyJS</h1>
							<p>
								In conjunction with Vue, VuetifyJS was used as a component framework. Vuetify is based on googles material design, and provides a lot of the UI look for the website. 
							</p>
						</v-technology-card>
						<v-technology-card>
							<h1 class="headline">Webpack</h1>
							<p>
								Webpack goes hand in hand with frameworks like VueJS as a way to compile all 
								the different assets together. It can be used for many things, but in this case
								it was mostly used in its most basic form. 
							</p>
						</v-technology-card>
					</v-project-technologies>

					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Challenges Faced</h2>
						<div class="ml-3">
							<p>
								Webpack proved to be the hardest part for me to learn for me. Even now I still
								feel that I need more experience with it before I'm comfortable with it.
								I originally started by using the <a href="https://github.com/vuejs-templates/webpack">provided template</a> from github, which comes with a nodeJS server and hot reloading.
							</p>
							<p>
								This didn't work well for me because I don't like not knowing how something works. Using
								the template made the whole process fill like a black box where stuff goes in and the final product comes out, but all the stuff in the middle was black magic. Instead I decided to start from a blank project and learn how webpack works from the group up. I'm glad I did this because I have a much better understanding of what I would have, but there are still some things that I had troubles with.
							</p>
							<p>
								I found a big problem with learning it was the lack of documentation for some of the plugins. Finding a solution to my problems proved more difficult than it should have been because sometimes features of the plugin wasn't in the documentation. Instead of seeing it in the README, I'd find out about how something works in the answers of issues. 
							</p>
						</div>
					</v-project-body>

					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Future Improvements</h2>
						<div class="ml-3">
							<p>
								Working with VueJS was a great change because it felt closer to programming I am used to. I'm quite happy with how this project turned out, but it's still far from perfect.
								The biggest problem was that I was learning Vue, and Webpack while I went. I was focused on getting things to work rather than trying to do them in the best way possible. 
							</p>
							<p>
								In future Vue projects I'd try to focus more on separating components a bit better, in a similar way to how component frameworks such as <a href="https://vuetifyjs.com/vuetify/quick-start">Vuetify</a> does. 
							</p>
						</div>

					</v-project-body>
				</v-layout>
			</v-container>
		</v-container>
	</main-layout>
</template>

<script>

import mainLayout from '../../layouts/main-layout.vue'; 
import vTechnologyCard from '../../components/v-technology-card.vue'; 

//Icons
import htmlIcon from 'vue-awesome/icons/html5'

export default {
	name: "v-contact",
	data: function() {
		return {

		}
	},
	components: {
		mainLayout,
		vTechnologyCard
	}
}

</script>

<style lang="scss" scoped>

.title-container {
	width: 100%;
	border-bottom: 1px solid;
}

.btn {
	color: inherit;
}

</style>