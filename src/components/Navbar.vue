<template>
    <nav
        id="navbar"
        :class="[
        {'fixed-top': isFixed },
        navbarSolid ? 'navbar-solid' : 'navbar-transparent'
        ]"
    >
        <div class="container">
            <div class="navbar">
                <a
                    href="/"
                    class="navbar-brand"
                ><img
                        src="../assets/logo.png"
                        width="85"
                    />
                </a>
                <ul class="nav">
                    <li class="navbar-item">
                        <router-link
                            to="/about"
                            class="navbar-link"
                        >About</router-link>
                    </li>
                    <li class="navbar-item">
                        <router-link
                            to="/contact"
                            class="navbar-link"
                        >Contact</router-link>
                    </li>
                    <li class="navbar-item">
                        <a
                            href="/portfolio"
                            class="navbar-link"
                        >Portfolio</a>
                    </li>
                    <li class="navbar-item">
                        <a
                            href="/blog"
                            class="navbar-link"
                        >Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import $ from 'jquery';
import { watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    isSolid: {
        type: Boolean,
        default: true
    },
    isFixed: {
        type: Boolean,
        default: false
    }
})

const navbarSolid = ref(props.isSolid);
const navFixed = ref(props.isFixed);

$(window).scroll(function () {
    if (!navFixed.value) return;
    var height = $(window).scrollTop();
    navbarSolid.value = height > 100;
});

const animateTo = (toId, time = 0) => {
    $("html, body").animate({ scrollTop: $(`#${toId}`).position().top - $("#navbar").height() }, time);
}

const getCurrentPath = (route) => {
    const routePath = route.path;
    const toId = ['/about', '/contact'].includes(routePath) ? routePath.substring(1, routePath.length) : 'navbar';
    animateTo(toId, 500);
}
watch(router.currentRoute, (newValue) => {
    getCurrentPath(newValue);
});

onMounted(() => { getCurrentPath(router.currentRoute.value) })

</script>
<style scoped>
#navbar {
    padding: 1.455rem 0;
    width: 100%;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    font-family: work-sans, sans-serif;
    transition: background 0.2s linear;
}

.navbar-transparent {
    background: transparent;
    color: #fff;
}

.fixed-top {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
}

#navbar.navbar-solid {
    background: #fff;
    color: #000;
}

.navbar-brand img {
    /* width: 6rem; */
    /* height: auto; */
    /* object-fit: cover; */
    filter: invert(100%);
}

.navbar-solid .navbar-brand img {
    filter: invert(0%);
}

.navbar-link {
    text-decoration: none;
    display: inline-block;
    color: inherit;
    opacity: 0.7;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.96rem;
    letter-spacing: 0.2px;
    padding: 0.4rem 0.973334rem;
    transition: opacity 0.15s linear, color 0.15s linear;
}

.navbar-item:first-of-type .navbar-link {
    padding-left: 0;
}

.navbar-item:last-of-type .navbar-link {
    padding-right: 0;
}

.navbar-link:hover {
    opacity: 1;
}
</style>