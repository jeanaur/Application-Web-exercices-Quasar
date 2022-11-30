<template>
  <q-page padding>
    <h3>Liste des clients</h3>
      <q-list
        v-if="clients.length"
        class="rounded-borders"
        bordered
        separator
      >
        <!-- Ajout du composant Client.vue via une propriété -->
        <Client
          v-for="client of clients"
          :key="client.id"
          :client="client"
        />
      </q-list>
      <p v-else>Aucun clients !</p>
  </q-page>
</template>

<script>
import Client from 'components/Client.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ClientPage',
  components: { Client },
  computed: {
    ...mapGetters('clients', ['clients'])
  },
  methods: {
    ...mapActions('clients', ['getClientsApi'])
  },
  mounted () {
    this.getClientsApi()
  }
}
</script>
<style scoped>
</style>
