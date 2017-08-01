<template>
	<main-layout>
		<v-container fill-width fluid class="pa-0">
			<v-project-header>North Force</v-project-header>
			<v-container fill-height fluid class="pl-3">
				<v-layout row wrap>
					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Project Summary</h2>
						<div class="ml-3">
							<p>
								North Force Landscaping was my first actual website that I had to build. The company itself is a small landscaping
								business located in Brisbanes northern suburbs and they wanted to start to get an online presence. 
							</p>
							<p>
								The clients wanted a simple to navigate website, while also being able to show large amounts of content (Photos) displaying their
								work. I had only been doing web development for less than a month by this point, and had only done 1 small website before it (The StrawPoll Clone)
								so this was quite new to me. 
							</p>
							<p>
								I'm quite happy with how the website came out overall, especially considering it was my first real attempt at something like this. 
							</p>
						</div>
					</v-project-body>

					<v-project-technologies class="mt-4 mb-5">
						<v-technology-card>
							<h1 class="headline">Sass</h1>
							<p>
								I decided to use this experience to try out a pre-processor, in this case Sass. I wanted to see what kinds of things were possible with it
								and learn some of the syntax. 
							</p>
						</v-technology-card>
						<v-technology-card>
							<h1 class="headline">Flexbox Grid</h1>
							<p>
								To help with the layout a bit, I found Flexbox Grid. It is a simple, lightweight framework for responsive web layouts based on flex. The syntax is 
								simple and it does not come with the extra baggage a larger framework like bootstrap comes with.
							</p>
						</v-technology-card>
					</v-project-technologies>

					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Challenges Faced</h2>
						<div class="ml-3">
							<p>
								One of the hardest parts about this website was coming up with a good design. Originally I started with a very dark colour scheme, trying to 
								use dark greens and greys to give an 'earthy' feel to the website. In the end though this fell flat and made the website feel quite sloppy.
								After about a week or so I moved to a much lighter design, using mostly whites and orange/brown.
							</p>
							<p>
								The change in colour scheme was actually what made me decide to use Sass, and leverage the variables in it. This seemed like a good idea
								at the time, but learning the best way to structure Sass files while trying to complete a website for the first time proved difficult.
								In the end I wasn't very happy with how my Sass files turned out, and it made it quite hard to use the variables still.
							</p>
						</div>
					</v-project-body>

					<v-project-body class="mt-3">
						<h2 class="headline brown--text text--lighten-2">Future Improvements</h2>
						<div class="ml-3">
							<p>
								I intend to continue to work on the website as I go as there are still some incomplete things I want to impliment. For example, once too many photos are included in the gallery, I hope to make each section collapsible and only show 2 rows at maximum. 
							</p>
							<p>
								Currently there is only 1 testimony so I simply hard coded it in, but in the future I hope to make the testimonies on a carousel so people can navigate between testimonies. 
							</p>
							<p>
								Some other important things I need to do are optimisations, both for loading speed and search engine. At the time of writing this if you search 'North Force Landscaping' the website is usually around the 3-5th result, with HIpages and facebook beating it. It's also not showing up for any other organic searches, so all the traffic to the website is through adWords.
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