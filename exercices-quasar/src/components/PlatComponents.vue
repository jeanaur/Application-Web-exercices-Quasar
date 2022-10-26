<template>
  <q-page padding>
    <div class="card shadow-1">
      <img :src="plat.img" width="198" height="180">
      <div class="card-content">
        <h1 class="text-primary">{{ plat.name }}</h1>
        <p>{{ plat.description }}</p>
        <p>
          <small>
            <b>Note:</b>
          </small>
          <b class="text-primary">
            {{ plat.note }}/5
          </b>
        </p>
        <q-btn @click="$emit('supprimerPlat', plat.id)"
               class="full-width q-ma-md"
               color="secondary"
               icon="delete"
               label="Supprimer"></q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>

export default {
  name: 'PlatComponents',
  data () {
    return {
      plat: {
        type: Object,
        required: true
      }
    }
  }
}
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
