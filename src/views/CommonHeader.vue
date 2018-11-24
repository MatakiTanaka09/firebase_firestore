<template>
<b-navbar toggleable="md" type="light" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand>
        <router-link to="/booklists" class="main-title">{{ title }}</router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item>
                <router-link to="/booklists" class="borrow-list">Borrorw</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link to="/mylist" class="my-list">MyList</router-link>
            </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item>
                <router-link to="/mylist" class="cart">Cart</router-link>
            </b-nav-item>
            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>

</b-navbar>
</template>


<script>
export default {
    name: 'CommonHeader',
    data() {
        return {
            title: 'Share BnB'
        }
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
