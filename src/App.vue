<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./assets/vite.svg" class="logo vite" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://next.vuetifyjs.com/" target="_blank">
      <img src="./assets/vuetify.svg" class="logo vuetify" alt="Vuetify logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Vuetify" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo.vite:hover {
  filter: drop-shadow(0 0 1em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}
.logo.vuetify:hover {
  filter: drop-shadow(0 0 1em #1697f6aa);
}
</style>
