<template>
<div v-if="data.status === 200" class="mt-3 container">
    <h1 class="mb-5">Contactos</h1>
    <div class="row">
        <div v-for="contact in data.data" :key="contact._id" class="col-sm-6 col-md-4 mt-4">
            <contact-card :contact="contact"/>
        </div>
    </div>
</div>
<div v-else class="mt-3">
    <h1 class="mb-3">Error {{data.status}}!</h1>
    <h3>{{data.error}}</h3>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ContactCard from '../components/ContactCard';

export default {
    data() {
        return {
            contacts: [],
            carga: true
        }
    },
    components: {
        ContactCard
    },
    computed: {
        ...mapState(['data'])
    },
    methods: {
        ...mapActions(['getContacts'])
    },
    created() {
        this.getContacts();
    }
}
</script>

<style>

</style>