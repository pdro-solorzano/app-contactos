<template>
  test
    <form @submit.prevent="login(user)">
      <div class="form-group row px-3">
        <label for="InputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          v-model="user.email"
        />
      </div>
      <div class="form-group row px-3">
        <label for="InputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="InputPassword"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="btn btn-success btn-block col-12">Submit</button>
      
      <hr>
      <p>{{user}}</p>
    </form>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: "form-user",
    components: {},
    data() {
      return {
        user: {
          email: "pdro@hotmail.com",
          password: "ngdddddd"
        }
      }
    },
    methods: {
      ...mapActions(['login'])
    }
};
</script>
