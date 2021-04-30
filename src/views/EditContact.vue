<template>
  <div class="container">
    <h1>Detalle Contacto</h1>
    <h2>El ID del contacto es: {{ $route.params.id }}</h2>
    <hr />
    <details-contact :contact="contact" />
    <hr />
    <p>{{ contact }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DetailsContact from "../components/DetailsContacts";
export default {
  data() {
    return {
      contact: {},
    };
  },
  components: {
    DetailsContact,
  },
  methods: {
    getInfoContact(id) {
      this.contact = this.data.data.find((element) => element._id == id);
    },
  },
  computed: {
    ...mapState(["data"]),
  },
  created() {
    this.getInfoContact(this.$route.params.id);
  },
};
</script>

<style>
</style>