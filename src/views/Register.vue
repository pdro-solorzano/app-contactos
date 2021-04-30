<template>
  <div>
    <h1 class="my-3">Register New User</h1>
    <hr>
    <div class="container my-2">
      <form-user />
    </div>
  </div>
</template>

<script>
import FormUser from "../components/FormUser";

export default {
  components: {
    FormUser
  },
};
</script>
