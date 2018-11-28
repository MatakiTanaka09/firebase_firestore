<template>
<div class="py-4 mx-auto">
    <b-input-group size="sm" prepend="何をお探しですか？">
        <b-dropdown size="sm" text="ジャンルで検索" variant="outline-secondary" slot="append">
            <b-dropdown-item
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            {{ item.label }}
            </b-dropdown-item>
        </b-dropdown>
    </b-input-group>

  </div>
</template>

<script>

export default {
    name: 'BookSearchOption',
    // props: {
    //     action: {
    //         type: Function,
    //         required: true
    //     }
    // },
    data() {
        return {
            options: [
                { value: 1, label: 'HTML/CSS' },
                { value: 2, label: 'JavaScript' },
                { value: 3, label: 'PHP/Laravel/DB/SQL' },
                { value: 4, label: 'Python' },
                { value: 5, lebel: 'WEBデザイン' },
                { value: 6, label: 'Blockchain' },
                { value: 7, label: 'その他' }
            ],
            value: null
        }
    },
    methods: {
        changeValue(value) {
            this.action(value)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
