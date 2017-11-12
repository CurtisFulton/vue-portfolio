<template>
	<article>
		<img :src="imgSrc" >
		<section class="card-content">
			<h1 class="card-title">{{ title }}</h1>
			<slot></slot>
		</section>
	</article>
</template>

<script>

export default {
  name: 'NavBar',
  data() {
    return {

    }
  },
  props: ['imgSrc', 'title']
};
</script>

<style scoped>

article {
	display: flex;
	flex-direction: column;
	width: 85%;

	margin: 0;

	box-shadow: 1px 1px 10px #888888;

	margin-top: 2em;
}

article > img {
	height: 10em;
	width: 100%;
}

.card-content {
	padding: 1em;
	padding-top: 0;
}

.card-title {
	margin-top: 0.5em;
}

@media only screen and (min-width: 500px){
	article {
		width: 49%;
	}
}

@media only screen and (min-width: 1200px){
	article {
		width: 32%;
	}
}

</style>
