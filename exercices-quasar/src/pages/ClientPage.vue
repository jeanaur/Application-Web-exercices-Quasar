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
      <clients
        v-for="client of clients"
        :key="client.id.value"
        :client="client"
        />
    </q-list>
    <p v-else>Aucun clients !</p>
  </q-page>
</template>

<script>
import Client from 'components/Client'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ClientPage',
  // eslint-disable-next-line vue/no-unused-components
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
