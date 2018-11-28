<template>
<div class="my-4 mx-3">
    <div class="border-bottom">
        <h2 class="">{{ title }}</h2>
        <p>{{ description }}</p>
        <b-button class="bulk-borrow-btn mb-4" size="lg" variant="warning">Bulk Borrow</b-button>
    </div>
    <div class="my-4">
        <b-card class="my-3" bg-variant="" text-variant="dark" title="Vue.js入門 基礎から実践アプリケーション開発まで">
            <p class="card-text">
                非常に分かりやすい。Vueを使いこなせるようになるぞ
            </p>
            <b-button class="btn" variant="outline-danger">Delete</b-button>
            <b-button class="btn" variant="outline-primary">Borrow</b-button>
        </b-card>
        <b-card class="my-3" bg-variant="" text-variant="dark" title="基礎から学ぶvue.js">
            <p class="card-text">
                Webサイトにも解説が載っているので、本書と併せて読むのが良い
            </p>
            <b-button class="btn" variant="outline-danger">Delete</b-button>
            <b-button class="btn" variant="outline-primary">Borrow</b-button>
        </b-card>
        <b-card class="my-3" bg-variant="" text-variant="dark" title="Bootstrap 4 フロントエンド開発の教科書">
            <p class="card-text">
                Bootstrapはこの一冊で事足りる
            </p>
            <b-button class="btn" variant="outline-danger">Delete</b-button>
            <b-button class="btn" variant="outline-primary">Borrow</b-button>
        </b-card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'お客様のカートに商品はありません。',
            description: 'こちらのカートでは借りたい本を自由に出し入れすることができます。',
        }
    }
}
</script>

<style scoped>
.btn {
    width: 145px;
}
.bulk-borrow-btn {
    width: 300px;
}
</style>
