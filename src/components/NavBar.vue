<template>
	<ul>
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/About">About Me</router-link></li>
		<li><router-link to="/Portfolio">Portfolio</router-link></li>
		<li><router-link to="/Blog">Blog</router-link></li>
	</ul>
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

</style>
