<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CliGest
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item
          v-for="lien in liens"
          :key="lien.id"
          :to="lien.route"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="lien.icone" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ lien.libelle }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="lien in liens"
          :key="lien.id"
          :to="lien.route"
          :icon="lien.icone"
          :label="lien.libelle"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      // Indique si le menu latéral est ouvert ou non.
      leftDrawerOpen: false,
      // Tableau des liens de l'application
      liens: [
        {
          id: 1,
          libelle: 'Accueil',
          icone: 'home',
          route: '/'
        },
        {
          id: 2,
          libelle: 'Clients',
          icone: 'list',
          route: '/client'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 768px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer {
    display: none;
  }
}
</style>
