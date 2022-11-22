<template>
  <q-page padding>
    <h3>Liste des clients</h3>
    <q-list
      class="rounded-borders"
      bordered
      separator
    >
      <!-- Un élément de liste, un client -->
      <q-item clickable v-ripple>
        <!-- Photo du client -->
        <q-item-section avatar>
          <q-avatar>
            <img :src="clients.picture.thumbnail">
          </q-avatar>
        </q-item-section>

        <!-- Nom, prénom et email du client -->
        <q-item-section>
          <q-item-label lines="1">
            {{ clients.name.last }} {{ clients.name.first }}
          </q-item-label>
          <q-item-label caption lines="2">
            {{ clients.email }}
          </q-item-label>
        </q-item-section>

        <!-- Icône email -->
        <q-item-section side>
          <q-icon name="email" color="primary"/>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Client',
  props: {
    clients: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
