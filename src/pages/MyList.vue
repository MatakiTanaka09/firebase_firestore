<template>
<div>
    <div class="border-bottom">
        <b-img class="" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
        <h2 class="my-4">{{ user_name }}</h2>
    </div>
    <div class="border-bottom">
        <div class="my-4 mx-3">
            <h4 class="text-center my-4 font-weight-bold">{{ my_borrowing_list }}</h4>
            <b-card class="my-2" bg-variant="" text-variant="dark" title="エンジニアのためのGitの教科書">
                <p class="card-text">
                    StartedAt: 2018/11/26<br/>
                    EndedAt: ---
                </p>
            </b-card>
        </div>
    </div>
    <div class="my-4 mx-3">
        <h4 class="text-center my-4 font-weight-bold">{{ my_borrowed_list }}</h4>
        <b-card class="my-2" bg-variant="" text-variant="dark" title="Vue.js入門 基礎から実践アプリケーション開発まで">
            <p class="card-text">
                StartedAt: 2018/11/26<br/>
                EndedAt: 2018/11/30
            </p>
        </b-card>
        <b-card class="my-2" bg-variant="" text-variant="dark" title="基礎から学ぶvue.js">
            <p class="card-text">
                StartedAt: 2018/11/26<br/>
                EndedAt: ---
            </p>
        </b-card>
        <b-card class="my-2" bg-variant="" text-variant="dark" title="Bootstrap 4 フロントエンド開発の教科書">
            <p class="card-text">
                StartedAt: 2018/11/27<br/>
                EndedAt: 2018/12/01
            </p>
        </b-card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            user_name: 'Yuki Tanaka',
            my_borrowing_list: 'My Borrowing List',
            my_borrowed_list: 'My Borrowed List',
        }
    }
}
</script>

<style></style>
