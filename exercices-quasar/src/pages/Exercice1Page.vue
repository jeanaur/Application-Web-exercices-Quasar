<template>
  <router-link :to="{ path: '/' }">Home page</router-link>
  <router-link :to="{ path: 'ex2' }">Exercice2</router-link>
  <q-page padding>
    <div className="form q-mb-lg">
      <div className="row q-mb-md">
        <label>Nom:</label>
        <input :class="{error : (name.length > 15 || name.length == 0)}" ref="nom" type="text" v-model="name">
        <label className="error" v-show="name.length > 15 || name.length == 0" >Maximum 15 caractères
        </label>
      </div>
      <div className="row q-mb-md">
        <label>Age:</label>
        <input :class="{error : (age > 100 || age < 1)}" type="number" v-model="age">
        <label className="error" v-show="age > 100 || age < 1" >Veuillez entrer un âge compris entre 1 et 100</label>
      </div>
      <div className="row">
        <button @click="valeurAleatoire" >Générer une personne</button>
      </div>
    </div>
    <div v-if="name.length <= 15 && name.length > 0 && age > 0 && age <= 100" className="description q-mb-lg">
      <p>Mon nom est <b>{{name}}</b> et j'ai <b>{{age}}</b> ans.</p>
      <p>Dans 10 ans, j'aurai <b>{{age + 10}}</b> ans.</p>
      <p>Mon nom se compose de <b>{{name.length}}</b> caractères.</p>
      <p>Mon nom en majuscules est <b>{{name.toUpperCase()}}</b>.</p>
    </div>
    <div v-else className="no-details">
      <p>Veuillez entrer un nom et un âge valide !</p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Exercice1Page',
  data () {
    return {
      name: '',
      age: 0,
      tableValue: [
        { name: 'Albert', age: 24 },
        { name: 'Gilbert', age: 100 },
        { name: 'Antoine', age: 67 },
        { name: 'Fanny', age: 17 },
        { name: 'Bertrand', age: 99 },
        { name: 'Kevin', age: 23 },
        { name: 'Valérie', age: 48 }
      ]
    }
  },
  mounted () {
    this.focusInput()
    this.valeurAleatoire()
  },
  methods: {
    focusInput () {
      this.$refs.nom.focus()
    },
    valeurAleatoire () {
      const random = Math.floor(Math.random() * this.tableValue.length - 1)
      this.name = this.tableValue[random].name
      this.age = this.tableValue[random].age
    }
  }
})

</script>

<style>
.form {
  background: #eee;
  padding: 10px;
}

label {
  min-width: 70px;
}

label.error {
  font-size: 13px;
  color: red;
  margin-left: 5px;
  margin-top: 3px;
}

input {
  border: 1px solid #ccc;
}

input.error {
  border: 1px solid red;
  background: pink;
}

.description {
  background: antiquewhite;
  padding: 20px 20px 7px;
}

.no-details {
  background: lightcoral;
  padding: 20px 20px 7px;
}
</style>
