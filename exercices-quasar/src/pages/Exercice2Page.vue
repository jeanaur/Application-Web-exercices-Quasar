<template>
  <router-link :to="{ path: '/' }">Home page</router-link>
  <router-link :to="{ path: 'ex1' }">Exercice 1</router-link>
  <q-page padding>
    <div class="q-pa-md row items-stretch">
      <plat v-for="plat in plats"
            :key="plat.id"
            :platEnCours="plat"
            supprimer="v-on:supprimerPlat"
      ></plat>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Exercice2Page',
  components: {
    plat: require('components/PlatComponents').default
  },
  data () {
    return {
      plats: [
        {
          id: 1,
          img: 'https://i.imgur.com/0umadnY.jpg',
          name: 'Burger',
          description: 'Un hamburger est un sandwich composé d\'une ou plusieurs\n' +
            '            tranches de viande hachée, généralement du bœuf, placées\n' +
            '            dans un petit pain ou une brioche.',
          note: '4'
        },
        {
          id: 2,
          img: 'https://i.imgur.com/b9zDbyb.jpg',
          name: 'Pizza',
          description: 'La pizza est un plat savoureux d\'origine italienne, consistant\n' +
            '            en une base généralement ronde et aplatie de\n' +
            '            pâte levée à base de blé.',
          note: '5'
        },
        {
          id: 3,
          img: 'https://i.imgur.com/RbKjUjB.jpg',
          name: 'Petits Choux',
          description: 'Le chou de Bruxelles est une variété de chou, plante herbacée\n' +
            '            de la famille des Brassicaceae. C’est vraiement pas bon...',
          note: '2'
        },
        {
          id: 4,
          img: 'https://imgur.com/gallery/4B1rC4u',
          name: 'Croque  Monsieur',
          description: 'Est un sandwich chaud passé à la poêle ou au four, constitué par deux tranches de pain de mie\n' +
            ' entre lesquelles sont placées une tranche de fromage et une tranche de jambon.',
          note: '5'
        }
      ]
    }
  },
  methods: {
    supprimerPlat (identifiant) {
      this.plats = this.plats.filter(function (platEnCours) {
        return platEnCours.identifiant !== identifiant
      })
    }
  }
})
</script>
<style scoped>
.card {
  flex-basis: 210px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.card img {
  max-width: 100%;
}

.card-content {
  padding: 0 10px;
}

h1 {
  font-size: 23px;
}

p {
  font-size: 14px;
}
</style>
