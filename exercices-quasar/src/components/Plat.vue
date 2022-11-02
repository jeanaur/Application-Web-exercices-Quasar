<template>
  <q-card
    class="card">
    <q-img
      :src="plat.image ? plat.image: 'statics/image-placeholder.png'"
      basic
      contain
    >
      <div class="absolute-bottom text-h6">
        {{ plat.nom }}
      </div>
    </q-img>

    <q-card-section>
      <q-rating
        :value="plat.note"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-section>
      <span v-if="plat.description">{{ plat.description }}</span>
      <i v-else>Aucune description fournie.</i>
    </q-card-section>

    <q-card-actions
      class="absolute-bottom"
      align="right">
      <q-btn
        @click="afficherFormPlat = true"
        icon="edit"
        color="blue"
        flat>Modifier</q-btn>
      <q-btn
        @click="dialogSupprimer()"
        icon="delete"
        color="red"
        flat>Supprimer</q-btn>
    </q-card-actions>

    <q-dialog
      v-model="afficherFormPlat">
      <form-plat
        action="modifier"
        :platAModifier="plat"
        @close="afficherFormPlat = false" />
    </q-dialog>
  </q-card>
</template>

<script>
// importation des fonctions utilitaires
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Plat',
  props: ['plat'],
  data () {
    return {
      afficherFormPlat: false
    }
  },
  methods: {
    // Mappage des actions
    ...mapActions('plats', ['supprimerPlat']),
    // Ouvre une boite de dialog pour confirmer la suppression
    dialogSupprimer () {
      this.$q.dialog({
        title: 'Supprimer plat',
        message: 'Voulez-vous vraiment supprimer ce plat ?',
        persistent: true,
        ok: {
          label: 'Supprimer',
          push: true
        },
        cancel: {
          label: 'Annuler',
          push: true,
          color: 'grey'
        }
      }).onOk(() => {
        this.supprimerPlat(this.plat.id)
      })
    }
  },

  components: {
    'form-plat': require('components/FormPlat.vue').default
  }
}
</script>

<style>
.card {
  min-height: 400px;
  max-width: 250px;
  width: 250px;
  transition: background 0.3s;
}
.card-clickable {
  cursor: pointer;
}
.card-clickable:hover {
  background: #bdbdbd!important;
}
.card .q-img {
  max-height: 180px;
}
.card .q-img__image {
  background-size: cover !important;
}
.card .q-rating__icon {
  opacity: 0.2;
}
.card .q-rating__icon--active {
  opacity: 1;
}
</style>
