<template>
  <q-page class="q-pa-lg">
    <div class="row q-gutter-lg">

      <plat
        v-for="plat in plats"
        :key="plat.id"
        :plat="plat" />

      <bouton-ajouter
        @click="afficherFormPlat = true" />

      <q-dialog
        v-model="afficherFormPlat">
        <form-plat
          @close="afficherFormPlat = false "
          action="ajouter" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ExercicePage3',
  data () {
    return {
      afficherFormPlat: false
    }
  },
  computed: {
    ...mapGetters('plats', ['plats'])
  },
  components: {
    plat: require('components/Plat.vue').default,
    'bouton-ajouter': require('components/BoutonAjouter.vue').default,
    'form-plat': require('components/FormPlat.vue').default
  }
}
</script>
