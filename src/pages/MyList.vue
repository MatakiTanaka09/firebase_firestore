<template>
<div>
    <div class="">
        <div class="my-4 mx-2">
            <h4 class="text-center my-4 font-weight-bold">{{ my_borrowing_list }}</h4>
            <b-card v-for="data in NonBorrowableDetail" class="my-2" bg-variant="" text-variant="dark" :key="data.id">
                <p class="card-title font-weight-bold">{{ data.title }}</p>
                <p class="card-text">
                    StartedAt: 2018/11/27<br/>
                    EndedAt: 2018/12/01
                </p>
            </b-card>
        </div>
        <div class="my-4 mx-2">
            <h4 class="text-center my-4 font-weight-bold">{{ my_borrowed_list }}</h4>
            <b-card class="my-2" bg-variant="" text-variant="dark">
                <p class="card-title font-weight-bold">エンジニアのためのGitの教科書</p>
                <p class="card-text">
                    StartedAt: 2018/11/26<br/>
                    EndedAt: ---
                </p>
            </b-card>
        </div>

    </div>

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            user_name: 'Yuki Tanaka',
            my_borrowing_list: 'My Borrowing List',
            my_borrowed_list: 'My Borrowed List',
            NonBorrowableDetail: []
        }
    },
    created() {
        this.NonBorrowableDetail = this.$store.getters.findNonBorrowableBook
    },
    computed: {
        ...mapGetters(['detail'])
    }
}
</script>

<style></style>
