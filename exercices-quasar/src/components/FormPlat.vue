<template>
  <q-card className="form-card">
    <q-card-section>
      <div className="text-h6 heading">{{ action }} Plat</div>
    </q-card-section>

    <q-card-section>

      <div className="row q-mb-md">
        <q-input
          :rules="[
            val => !!val || '* Obligatoire',
            val => val.length < 21 || 'Maximum 20 caractères',
           ]"
          filled
          v-model="plat.nom"
          label="Nom (Burger)"
          class="col"
          ref="nom" />
      </div>

      <div className="row q-mb-md">
        <q-input
          :rules="[
            val => val.length < 136 || 'Maximum 135 caractères',
          ]"
          filled
          v-model="plat.description"
          label="Description"
          type="textarea"
          className="col"
          ref="description" />
      </div>

      <div className="row q-mb-md">
        <q-input
          filled
          v-model="plat.image"
          label="URL de l'image"
          className="col"/>
        <q-img
          :src="plat.image ? plat.image : 'statics/image-placeholder.png'"
          class="q-ml-sm"
          contain/>
      </div>

      <div className="q-mb-md">
        <div className="row">
          <p className="q-mb-none">Note:</p>
        </div>
        <div className="row">
          <q-rating
            v-model="plat.note"
            size="2em"
            color="orange"/>
        </div>
      </div>

    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        label="Annuler"
        color="grey"
        v-close-popup/>
      <q-btn
        @click="submitForm"
        label="Sauver"
        color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormPlat',
  props: ['action', 'platAModifier'],
  data () {
    return {
      plat: {
        name: '',
        description: '',
        note: 1,
        image: ''
      }
    }
  },
  methods: {
    // Mappage des actions
    ...mapActions('plats', ['ajouterPlat', 'modifierPlat']),
    submitForm () {
      this.$refs.nom.validate()
      this.$refs.description.validate()

      if (!this.$refs.nom.hasError && !this.$refs.description.hasError) {
        this.$emit('close')
        this.sauverPlat()
      }
    },
    sauverPlat () {
      if (this.action === 'ajouter') {
        this.ajouterPlat(this.plat)
      } else {
        this.modifierPlat(this.plat)
      }
    }
  },
  mounted () {
    if (this.action === 'modifier') {
      this.plat = Object.assign({}, this.platAModifier)
    }
  }
}
</script>

<style>
.form-card {
  min-width: 400px;
}

.form-card .heading {
  text-transform: capitalize;
}

.form-card .q-card-section {
  width: 100%;
}

.thumbnail {
  max-width: 50px;
  max-height: 50px;
}

.form-card .q-img {
  height: 56px;
  width: 56px;
  border-radius: 10px;
}

.form-card .q-img__image {
  background-size: cover !important;
}

.form-card .q-rating__icon {
  opacity: 0.2;
}

.form-card .q-rating__icon--active {
  opacity: 1;
}
</style>
