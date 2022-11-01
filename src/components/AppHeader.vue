<template>
  <div class="ui secondary pointing menu">
    <a class="item active">
      Image Storage
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a class="item">Galleries</a>
        <a class="item">Upload</a>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn'])

}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
