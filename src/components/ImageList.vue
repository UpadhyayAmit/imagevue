<template>
  <div>
    <div v-if="isLoggedIn">
      <div class="image-container">
        <img v-for="image in allImages" v-bind:src="image.link" v-bind:key="image" />
      </div>
    </div>
    <h2 v-else>Log in to get started</h2>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "ImageList",
  methods: mapActions(['fetchImages', 'isLoggedIn']),
  computed: mapGetters(['allImages']),
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px
}
</style>