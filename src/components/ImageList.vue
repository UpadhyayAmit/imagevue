<template>
  <div>
    <img v-for="image in allImages" v-bind:src="image.link" v-bind:key="image" />
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "ImageList",
  methods: mapActions(['fetchImages']),
  computed: mapGetters(['allImages']),
  created() {
    this.fetchImages();
  }
}
</script>