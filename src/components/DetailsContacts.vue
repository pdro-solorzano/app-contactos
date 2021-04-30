<template>
  <form @submit.prevent="updateContact(contact)">
    <div class="form-group row px-3">
      <label for="InputNombreCompleto">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="InputNombreCompleto"
        v-model="contact.nombreCompleto"
      />
    </div>
    <div class="form-group row px-3">
      <label for="InputEmail">Email</label>
      <input
        type="email"
        class="form-control"
        id="InputEmail"
        v-model="contact.email"
      />
    </div>
    <div class="form-group row px-3">
      <label for="InputTelefono">Telephone</label>
      <input
        type="tel"
        class="form-control"
        id="InputTelefono"
        v-model="contact.telefono"
      />
    </div>
    <div class="form-group form-check text-left">
      <input
        type="checkbox"
        class="form-check-input"
        id="CheckboxImage"
        v-model="contact.tieneImagen"
        @click="checkingImage()"
      />
      <label class="form-check-label" for="CheckboxImage">Set Image</label>
    </div>
    <div v-if="contact.tieneImagen" class="form-group row px-3">
      <label for="InputURLImage">URL Image</label>
      <input
        type="url"
        class="form-control"
        id="InputURLImage"
        v-model="contact.urlImagen"
      />
    </div>
    <button type="submit" class="btn btn-success btn-block col-12">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "details-contact",
  data() {
    return {
      response: null,
    };
  },
  props: {
    contact: Object,
  },
  methods: {
    async updateContact(contact) {
      let data = await fetch(
        `http://localhost:3000/api/contacts/contacts/${contact._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token'),
          },
          body: JSON.stringify(contact),
        });

        if(data.status === 200) {
            window.location.href = '/Contacts'
        } else {
            window.location.href = '/Error'
        }
    },
    checkingImage() {
        if(this.contact.tieneImagen !== false) {
            this.contact.urlImagen = '';
            console.log('Url Imagen: ' , this.contact.urlImagen)
        } else {
            console.log('Url Imagen: ' , this.contact.urlImagen)
        }
    }
  },
};
</script>

<style>
</style>