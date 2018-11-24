<template>
<div>
    <h1 class="my-4">{{ borrowTitle }}</h1>

    <!-- <div v&#45;show="loading" class="loader">Now Loading...</div> -->
    <!-- <div v&#45;show="!loading"> -->
        <b-card v-for="bookData in booksData" :key="bookData.id" style="max-width: 25rem;" class="my-2 align-middle"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
        >
            <p class="card-title">{{ bookData.name }}</p>
            <b-button class="borrow-btn" size="lg" href="#" variant="outline-primary">Borrow</b-button>
            <b-button class="borrow-btn" size="lg" href="#" variant="outline-success">
                <router-link :to="{ name: 'BookDetail', params: { id: bookData.id } }">
                    Detail
                </router-link>
            </b-button>
        </b-card>

    <!-- </div> -->
</div>
</template>


<script>
import { Firestore } from '@/api/firebase/firestore'
const firestore = new Firestore()

export default {
    data () {
        return {
            borrowTitle: 'Share BnB',
            loading: true,
            booksData: [],
        }
    },
    created() {
        firestore.getBooksCollection().get().then(querySnapshot => {
            // this.loading = false
            querySnapshot.forEach(doc => {
                let data = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    borrowable: doc.data().borrowable
                }
                this.booksData.push(data)
            })
        })
    }
}
</script>


<style scoped>
.borrow-btn {
    width: 150px;
}
</style>
