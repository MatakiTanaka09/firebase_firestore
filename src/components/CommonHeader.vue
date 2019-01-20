<template>
<b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand>
        <router-link to="/booklists" class="main-title">{{ title }}</router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item>
                <router-link to="/mylist" class="my-list">MyList</router-link>
            </b-nav-item>
            <b-nav-item>
                <!-- <router&#45;link to="/cart" class="my&#45;list">Cart</router&#45;link> -->
                <router-link :to="{ name: 'Cart' }" class="my-list">Cart</router-link>
            </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <sign-in/>
            </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import SignIn from "@/components/SignIn"

export default {
    name: 'CommonHeader',
    components: {
        SignIn
    },
    data() {
        return {
            title: 'sharebnb'
        }
    },
    computed: {
        ...mapGetters(['detail'])
    }
}
</script>


<style scoped>
*, *::before, *::after {
    box-sizing: border-box;
}
a:link, a:visited, a:hover, a:active {
    /* color: #fff; */
    text-decoration: none;
}
.main-title, .borrow-list, .my-list, .cart {
    color: black;
}
</style>
