<template>
	<div class="app">
		<AppHeader/>
		<div class="app-body">
			<Sidebar/>
			<main class="main">
				<breadcrumb :list="list" />
				<div class="container-fluid">
					<router-view></router-view>
				</div>
			</main>
			<AppAside/>
		</div>
	</div>
</template>

<script>
import AppHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import AppAside from "../components/Aside";
import Breadcrumb from "../components/Breadcrumb";

export default {
    name: "full",
    components: {
        AppHeader,
        Sidebar,
        AppAside,
        Breadcrumb
    },
    computed: {
        name() {
            return this.$route.name;
        },

        list() {
            return this.$route.matched;
        }
    },
    mounted() {
        window.onresize = () => {
			let showSize = document.documentElement.clientWidth;
			this.$store.commit('SET_CLIENTWIDTH',showSize)
        };
    }
};
</script>
