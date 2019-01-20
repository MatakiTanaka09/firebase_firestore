<template>
<div>
    <h1 class="my-4">{{ borrowTitle }}</h1>
    <b-card v-for="book in bookData" :key="book.id" class="my-2 w-100">
        <router-link :to="{ name: 'BookDetail', params: { id: book.id } }">
            <p class="card-title text-dark">{{ book.title }}</p>
        </router-link>
    </b-card>
</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import Firestore from '@/api/firebase/firestore'

export default {
    data() {
        return {
            borrowTitle: 'sharebnb',
            loading: false,
        }
    },
    computed: {
        bookData() {
            return this.$store.getters.bookData
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.borrow-btn {
    width: 100px;
}
</style>
