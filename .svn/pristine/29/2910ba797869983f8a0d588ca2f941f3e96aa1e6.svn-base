<template>
	<div class="sidebar">
		<nav class="sidebar-nav" >
			<ul class="nav" id="sidebar">
				<template v-for="(item,index) in routes">
					<router-link ref="menuItem" tag="li" class="nav-item nav-dropdown" v-if="!item.hidden&&item.children&&item.children.length>0" :to="item.path+''+item.children[0].path" disabled>

						<div class="nav-link nav-dropdown-toggle" @click="handleClick">
							<Icon :type="item.icon" color="white" />{{ item.name}} </div>
						<ul class="nav-dropdown-items">
							<li class="nav-item" v-for="child in item.children" v-if='!child.hidden' @click="addActive(item,index)">
								<!-- <router-link :to="child.path+'/'+item.children[0].path" class="nav-link" ><i class="icon-puzzle"></i> {{ child.name}} </router-link> -->
								<router-link :to="item.path+'/'+child.path+'/'+child.children[0].path" class="nav-link opend" v-if="!child.hidden&&child.children">
									<Icon :type="child.icon" color="white" />{{ child.name}} </router-link>

								<router-link :to="item.path+'/'+child.path" class="nav-link opend" v-else="!child.children">
									<Icon :type="child.icon" color="white" /> {{ child.name}} </router-link>

							</li>
						</ul>
					</router-link>

					<li class="nav-item" v-if="!item.hidden&&!item.children" @click="addActive(item,index)">
						<router-link :to="item.path" class="nav-link" exact>
							<Icon :type="item.icon" color="white" />{{ item.name}} </router-link>
					</li>

				</template>
			</ul>
		</nav>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import {trim, siblings, parentIndexOf } from "static/bil/publicMethod";
export default {
    name: "SidebarItem",
    props: {
        routes: {
            type: Array
        }
    },
    computed: {
        ...mapGetters(["siderbaropen"])
    },
    watch: {
        siderbaropen(newdata,olddata) {
            this.opends(newdata)
        }
    },
    methods: {
        handleClick(e) {
            e.preventDefault();
            e.target.parentElement.classList.toggle("open");
        },
        addActive(x,index) {
            // console.log(event);
            event.preventDefault();
            let opend = event.target.parentElement.parentElement.parentElement;
            opend.classList.add("open");

            let sibArr = [];
            if (siblings(opend) == "") {
                sibArr = siblings(event.target.parentElement);
            } else {
                sibArr = siblings(opend);
            }
            for (let x in sibArr) {
                sibArr[x].classList.remove("open");
                // console.log(sibArr[x]);
            }
            
            // console.log(this.$router.currentRoute.matched);
        },
        opends(newdata) {
            // console.log(this.$refs.menuItem[0].$children);
            let aList = this.$refs.menuItem[0].$children;
            for(let x in aList) {
                if(aList[x].$el.text != undefined ) {
                   if(trim(newdata.name) == trim(aList[x].$el.text)) {
                   aList[x].$parent.$el.classList.add('open')
                   }
                }
               
            }

        }
    },
    mounted() {
        console.log(this.siderbaropen);
        let opend = document.getElementsByClassName(
            "router-link-exact-active open"
        )[0];
        if (opend) {
            opend.parentElement.parentElement.parentElement.classList.add(
                "open"
            );
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-icon {
    margin-right: 10px;
}
.hideSidebar .menu-indent {
    display: block;
    text-indent: 10px;
}
// .navbar .sidebar .nav .nav-item .active.dropdown-toggle,
// .sidebar .nav .nav-item .nav-link.active,
// .sidebar .nav .nav-item .navbar .active.dropdown-toggle {
//     background: #063242;
// }
// .navbar .sidebar .nav .nav-item .dropdown-toggle:hover,
// .sidebar .nav .nav-item .nav-link:hover,
// .sidebar .nav .nav-item .navbar .dropdown-toggle:hover {
//     background: #42778a !important;
// }
</style>

