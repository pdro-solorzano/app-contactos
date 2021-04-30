<template>
  <div>
    <header-component/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import {mapActions} from 'vuex'

export default {
  components: {
    HeaderComponent
  },
  methods: {
    ...mapActions(['readToken'])
  },
  created() {
    this.readToken();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
