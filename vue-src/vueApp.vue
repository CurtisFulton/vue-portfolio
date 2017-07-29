<template>
  <router-view></router-view>
</template>

<script>

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/));

export default {
  name: "vueApp",
  data: function() {
    return {}
  },
  components: {
    
  }
}

</script>
