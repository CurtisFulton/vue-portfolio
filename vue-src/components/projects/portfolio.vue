<template>
	<main-layout>
		<article>
			<h1 class="display-2 center-text">Portfolio Website</h1>
			<hr>

			<section class="main-content">
				<h2 class="headline brown--text text--lighten-2">Technologies Used</h2>
				<p>
					VueJS, VuetifyJS, Webpack 2
				</p>

				<h2 class="headline brown--text text--lighten-2">Project Summary</h2>
				<p>
					This website was made to store and display all past, present and future projects. The website itself didn't need to be complicated
					in any way, so I decided to use this as a way to learn one of the major front-end frameworks, VueJS.
				</p>
				<p>
					Considering that just a couple months before starting this project I had never seen HTML/CSS, this was quite a large learning experience.
				</p>

				<h2 class="headline brown--text text--lighten-2">Challenges Faced</h2>
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


				<h2 class="headline brown--text text--lighten-2">Future Improvements</h2>
				<p>
					Working with VueJS was a great change because it felt closer to programming I am used to. I'm quite happy with how this project turned out, but it's still far from perfect.
					The biggest problem was that I was learning Vue, and Webpack while I went. I was focused on getting things to work rather than trying to do them in the best way possible. 
				</p>
				<p>
					In future Vue projects I'd try to focus more on separating components a bit better, in a similar way to how component frameworks such as <a href="https://vuetifyjs.com/vuetify/quick-start">Vuetify</a> does. 
				</p>
			</section>
		</article>
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
@import '../../sass/_variables';

.btn {
	color: inherit;
}

.main-content {
	margin: 1em 4em;

	@media (max-width: $sm-break) {
		margin: 1em 1.5em;
	}
}
</style>