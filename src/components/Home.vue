<template>
  <div class="container">
    <Carousel />
    <Playlist />
  </div>
</template>

<script>
import Carousel from './Carousel'
import Playlist from './Playlist'


export default {
  name: 'Home',
  components: {
      Carousel,
      Playlist
  }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-flow: column nowrap;
}
</style>