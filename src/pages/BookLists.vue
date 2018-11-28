<template>
<div>
    <h1 class="my-4">{{ borrowTitle }}</h1>
    <!-- <BookSearchOption/> -->
    <b-card v-for="bookData in booksData" :key="bookData.id" style="max-width: 25rem;" class="my-2 align-middle" v-if="bookData.borrowable"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
    >
        <p class="card-title">{{ bookData.title }}</p>
        <b-button class="borrow-btn" size="lg" variant="outline-primary" @click="handleChangeBorrowable(bookData.id)">Borrow Now</b-button>
        <b-button class="borrow-btn" size="lg" variant="outline-success">
            <router-link :to="{ name: 'BookDetail', params: { id: bookData.id } }">
                Detail
            </router-link>
        </b-button>
    </b-card>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
// import BookSearchOption from '@/components/BookSearchOption'

export default {
    // components: {
    //     BookSearchOption
    // },
    data() {
        return {
            borrowTitle: 'Sharebnb',
            loading: false,
            booksData: [],
        }
    },
    created() {
        this.booksData = this.$store.getters.all
        console.log(this.booksData)
    },
    computed: {
        ...mapGetters(['detail'])
    },
    methods: {
        ...mapActions({
            done: 'done',
            changeBorrowable: 'changeBorrowable',
            setQueryParams: 'setQueryParams'
        }),
        handleChangeBorrowable(id) {
            console.log('on click', id)
            this.changeBorrowable({ id })
        }
    }
}
</script>
<!-- <!&#45;&#45; firebase連携 &#45;&#45;> -->
<!-- <script> -->
<!-- import { Firestore } from '@/api/firebase/firestore' -->
<!-- const firestore = new Firestore() -->
<!--  -->
<!-- export default { -->
<!--     data () { -->
<!--         return { -->
<!--             borrowTitle: 'Sharebnb', -->
<!--             loading: true, -->
<!--             booksData: [], -->
<!--         } -->
<!--     }, -->
<!--     created() { -->
<!--         firestore.getBooksCollection().get().then(querySnapshot => { -->
<!--             // this.loading = false -->
<!--             querySnapshot.forEach(doc => { -->
<!--                 let data = { -->
<!--                     id: doc.id, -->
<!--                     name: doc.data().name, -->
<!--                     description: doc.data().description, -->
<!--                     borrowable: doc.data().borrowable -->
<!--                 } -->
<!--                 this.booksData.push(data) -->
<!--             }) -->
<!--         }) -->
<!--     } -->
<!-- } -->
<!-- </script> -->


<style scoped>
.borrow-btn {
    width: 150px;
}
</style>
