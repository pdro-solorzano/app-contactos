<template>
  <div class="card">

    <img v-if="!contact.tieneImagen" src="../assets/logo.png" class="card-img-top"/>
    <img v-else :src="contact.urlImagen" class="card-img-top"/>

    <div class="card-body">
      <h4 class="card-title">{{contact.nombreCompleto}}</h4>
      <p class="card-text">
        <span class="negritas">Telefono:</span> {{contact.telefono}}
        <br>
        <span class="negritas">Email:</span> {{contact.email}}
      </p>
      <router-link :to="`/Contacts/${contact._id}`" class="btn btn-outline-success btn-block">Editar</router-link>
      <a href="/Contacts" class="btn btn-outline-danger btn-block">Eliminar</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-card",
  props: {
      contact: Object
  },
  methods: {}
};
</script>

<style>
.card-img-top {
  width: 100% !important; 
  /* height: 250px !important; */
}
.card-title {
  font-weight: 600 !important;
}
.negritas {
  font-weight: 600;
}
</style>