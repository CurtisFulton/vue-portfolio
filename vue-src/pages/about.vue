<template>
	<v-main-layout>
		<v-container fluid class="pa-0 about-container">
			<v-layout row class="mb-3"> 
				<v-flex offset-xs1 xs10>
					<h2 class="display-2 brown--text text--lighten-2 mt-3">About Me</h2>
					<div class="ml-3">
						<p>
							I've been programming since I was in primary school. I begun with C++ in grade 6,
							and dipped my toes in LUA and VB in the following years. It wasn't until just after highschool
							where I discovered Unity and C# that I really began programming seriously.
						</p>
						<p>
							I always enjoyed programming, but it wasn't until I started programming small games in Unity that I
							really got the passion I now have. Since then, I've tried to learn about everything and anything I can find.
							I treated each new Unity project as a learning experience for a particular topic, learning what does and
							doesnt work. 
						</p>
						<p>
							I am currently studying at QUT doing the Games and Interactive Entertainment/Bachelor of Mathematics course full time. 
							Recently I felt I had enough experience to work in the industry, but found that the majority of development jobs are in 
							web. About mid way through 2017 I started to learn web development, and I decided that I would showcase my work on a personal website.
							Each project on this website is aimed to target a different skill, or piece of knowledge I thought would be useful to know when getting a job.
						</p>
					</div>

				</v-flex>
			</v-layout>
			<v-layout row class="mb-3 mt-3"> 
				<v-flex offset-xs1 xs10>
					<h2 class="display-2 brown--text text--lighten-2">My Skills</h2>
					<div class="mt-3">
						<h3 class="title mb-4">C#/Unity</h3>
						<p class="ml-3">
							I am primarily a C# programmer, and more specifically I am a Unity developer. I am very familiar with almost all of the unity engine
							and am confident in any task I need to do in it. 
						</p>
					</div>
					<div>
						<h3 class="title mb-4">Web Development</h3>
						<p class="ml-3">
							I'm currently still new to web development, but due to my solid understanding of programming principals I have been able to learn fast.
							To learn to be a web developer I decided to do separate small projects, ranging from front end frameworks (VueJS), to backend development.
						</p>
					</div>
					<div>
						<h3 class="title mb-4">General Programming</h3>
						<p class="ml-3">
							Due to my passion for learning, I've learnt quite a few different programming languages, such as:
						</p>
						<p class="ml-5">
							C#, C++, C, Python, Lua, Javascript, Visual Basic, Java, SQL and Matlab
						</p>
					</div>
				</v-flex>
			</v-layout>
			<v-layout row class="mb-3 mt-3"> 
				<v-flex offset-xs1 xs10>
					<h2 class="display-2 brown--text text--lighten-2">My Hobbies</h2>
					<p class="ml-3">
						Doing casual development in my own time, and learning new programming languages/paradigms/concepts/etc is something I quite enjoy doing. Beyond that, 
						gaming takes up a huge portion of my time.
					</p>
				</v-flex>
			</v-layout>		
		</v-container>	
	</v-main-layout>
</template>

<script>

import vMainLayout from '../layouts/main-layout.vue'; 

export default {
	name: "v-about",
	data: function() {
		return {

		}
	},
	components: {
		vMainLayout
	}
}

</script>

<style lang="scss" scoped>

.about-container {
	padding: 0.5em;
	padding-bottom: 2em;
}

</style>
