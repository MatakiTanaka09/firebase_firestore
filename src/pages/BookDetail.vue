<template>
<div>
    <b-img class="" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
    <h3 class="my-4">{{ detail.title }}</h3>
        <!-- <b&#45;button class="review&#45;btn" variant="outline&#45;success">Review</b&#45;button> -->
        <!-- <b&#45;button class="moreDetail&#45;btn" variant="outline&#45;primary">Books&#45;Info</b&#45;button> -->
        <!-- <b&#45;button class="favorite&#45;btn" variant="outline&#45;warning">Star</b&#45;button> -->
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
        this.dataDetail = this.$store.state.data.find(wl => wl.id === this.$route.params.id)
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
