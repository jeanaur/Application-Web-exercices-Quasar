// eslint-disable-next-line import/default
import Vue from 'vue'
import { uid } from 'quasar'
const state = {
  plats: [
    {
      id: 1,
      image: 'https://i.imgur.com/0umadnY.jpg',
      nom: 'Burger',
      description: "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: 'https://i.imgur.com/b9zDbyb.jpg',
      nom: 'Pizza',
      description: "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: 'https://i.imgur.com/RbKjUjB.jpg',
      nom: 'Petits choux',
      description: 'Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...',
      note: 1
    },
    {
      id: 4,
      image: 'https://i.imgur.com/xAuhNVg.jpg',
      nom: 'BBQ Ribs',
      description: 'Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.',
      note: 5
    }
  ]
}

const mutations = {
  supprimerPlat (state, id) {
    const index = state.plats.findIndex(plat => plat.id === id)
    Vue.delete(state.plats, index)
  },
  ajouterPlat (state, plat) {
    state.plats.push(plat)
  },
  modifierPlat (state, plat) {
    const index = state.plats.findIndex(statePlat => statePlat.id === plat.id)
    Vue.set(state.plats, index, plat)
  }
}

const actions = {
  supprimerPlat ({ commit }, id) {
    commit('supprimerPlat', id)
  },
  ajouterPlat ({ commit }, plat) {
    const newId = uid()
    plat.id = newId
    commit('ajouterPlat', plat)
  },
  modifierPlat ({ commit }, plat) {
    commit('modifierPlat', plat)
  }
}

const getters = {
  plats: (state) => {
    return state.plats
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
