<template>
<div>
        <b-img class="" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
        <h3 class="my-4">{{ detail.title }}</h3>
        <b-button class="review-btn" variant="outline-success">Review</b-button>
        <b-button class="moreDetail-btn" variant="outline-primary">Books-Info</b-button>
        <b-button class="favorite-btn" variant="outline-warning">Star</b-button>
        <p class="my-5">{{ detail.description }}</p>
        <p @click="done">Done</p>
        <router-link to="/booklists/">戻る</router-link>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data () {
        return {
            dataDetail: []
        }
    },
    created () {
        this.dataDetail = this.$store.state.items.find(item => item.id === this.$route.params.id)
    },
    computed: {
        ...mapGetters(['detail'])
    },
    methods: {
        ...mapActions(['done'])
    }
}
</script>

<style scoped>
/* .ranking-btn, .moreDetail-btn, .favorite-btn{ */
/*     width: 150px; */
/* } */
</style>
