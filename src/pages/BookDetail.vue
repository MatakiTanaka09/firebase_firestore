<template>
<div>
    <!-- <b&#45;img class="" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" /> -->
    <h3 class="my-4">{{ bookDetail.title }}</h3>
    <p class="my-5">{{ bookDetail.description }}</p>
    <b-button v-if="bookDetail.borrowable" class="borrow-btn" size="" variant="outline-primary">
        Borrow
    </b-button>
    <b-button v-if="!bookDetail.borrowable" class="borrow-btn" size="" variant="outline-secondary" disabled>
        {{ user }}さんがBorrow...
    </b-button>
    <b-button class="borrow-btn" size="" variant="outline-warning">
        Cart in
    </b-button>
    <router-link to="/booklists" class="d-block text-dark mt-4">戻る</router-link>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'

export default {
    computed: {
        bookDetail() {
            return this.$store.getters.searchBookById(this.$route.params.id)
        },
        user() {
            return this.$store.getters.user.displayName
        },
    },
    methods: {
        ...mapActions({
            changeBorrowable: 'changeBorrowable',
            setQueryParams: 'setQueryParams'
        }),
        // borrow() {
        //     Firestore.setBorrowLog(this.$route.params.id, this.$store.getters.user.uid)
        // }
    }
}
</script>

<style scoped>
/* .ranking-btn, .moreDetail-btn, .favorite-btn{ */
/*     width: 150px; */
/* } */
</style>
