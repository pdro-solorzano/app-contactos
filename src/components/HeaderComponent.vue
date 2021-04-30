<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <router-link class="navbar-brand" to="/">App Contactos</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul v-if="!token" class="navbar-nav ml-auto">
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link class="nav-link" to="/Register">Register</router-link>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
        </ul>
        <ul v-else class="navbar-nav ml-auto">
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link class="nav-link" to="/Contacts">Contacts</router-link>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <a class="nav-link" href="/" @click="logout()">Logout</a>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "header-component",
  computed: {
    ...mapState(['token'])
  },
  methods: {
    ...mapActions(['logout'])
  }
};
</script>