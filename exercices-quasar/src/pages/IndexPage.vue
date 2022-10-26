<template>
  <router-link :to="{ path: 'ex1' }">Exercice 1</router-link>
  <router-link :to="{ path: 'ex2' }">Exercice 2</router-link>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
