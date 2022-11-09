<template>
    <nav
        id="navbar"
        :class="[
            { 'fixed-top': isFixed },
            navbarSolid ? 'navbar-solid' : 'navbar-transparent'
        ]"
    >
        <div class="container w-100">
            <div class="navbar">
                <a
                    href="/"
                    class="navbar__brand ms-2 ms-md-0"
                ><img
                        class="navbar__brand-img"
                        src="../assets/logo.png"
                        width="85"
                    />
                </a>
                <div
                    class="d-flex d-md-flex d-lg-none navbar__toggler"
                    @click="isShow = !isShow; toggleMobileNav(isShow)"
                >
                    <span class="navbar__toggler-icon"></span>
                </div>
                <ul class="nav d-none d-md-none d-lg-flex ">
                    <li class="navbar__item">
                        <router-link
                            to="/about"
                            class="navbar__link"
                        >About</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link
                            to="/contact"
                            class="navbar__link"
                        >Contact</router-link>
                    </li>
                    <li class="navbar__item">
                        <a
                            href="/portfolio"
                            class="navbar__link"
                        >Portfolio</a>
                    </li>
                    <li class="navbar__item">
                        <a
                            href="/blog"
                            class="navbar__link"
                        >Blog</a>
                    </li>
                </ul>
                <div
                    id="nav-mobile"
                    class="d-flex d-sm-flex d-md-flex d-lg-none"
                    style="background:linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80');"
                >
                    <ul @click="toggleMobileNav(false)">
                        <li style="--item-delay: 0.4s">
                            <router-link to="/about">About</router-link>
                        </li>
                        <li style="--item-delay: 0.45s">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <li style="--item-delay: 0.5s">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li style="--item-delay: 0.55s">
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                    <div class="nav__social">
                        <a
                            class="icon"
                            href="https://twitter.com/"
                        >
                            <IconTwitterSolid />
                        </a>
                        <a
                            class="icon"
                            href="https://www.facebook.com/"
                        >
                            <IconFacebookSolid />
                        </a>
                        <a
                            class="icon"
                            href="https://www.instagram.com/"
                        >
                            <IconInstagramOutline />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import $ from 'jquery';
import { watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import IconTwitterSolid from "./icons/IconTwitterSolid.vue"
import IconFacebookSolid from "./icons/IconFacebookSolid.vue"
import IconInstagramOutline from "./icons/IconInstagramOutline.vue"

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
const isShow = ref(false)

$(window).scroll(function () {
    if (!navFixed.value) return;
    var height = $(window).scrollTop();
    navbarSolid.value = height > 100;
});

const toggleMobileNav = (state) => {
    if (state) {
        $("#nav-mobile").addClass("open");
        $(".navbar__toggler").addClass("open");
        $(".navbar__brand-img").addClass("invert-100");
        $("body").addClass("no-scroll");
    } else {
        $("#nav-mobile").removeClass("open");
        $(".navbar__toggler").removeClass("open");
        $(".navbar__brand-img").removeClass("invert-100");
        $("body").removeClass("no-scroll");
    }

}

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

.navbar__toggler {
    width: 45px;
    height: 30px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
}

.navbar__toggler-icon {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.589);
    padding: 0;
    height: 3px;
    width: 25px;
    border: 0;
    border-radius: 10px;
    transition: 0.2s;
    z-index: 10;
    position: relative;
}

.navbar__toggler-icon::before,
.navbar__toggler-icon::after {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.589);
    height: 3px;
    width: 25px;
    border-radius: 10px;
    border: 0;
    transition: 0.2s;
}

.navbar__toggler-icon::before {
    transform: translateY(-8px);
}

.navbar__toggler-icon::after {
    transform: translateY(8px);
}

#navbar.navbar-solid {
    background: #fff;
    color: #000;
}

.navbar__brand-img {
    /* width: 6rem; */
    /* height: auto; */
    /* object-fit: cover; */
    z-index: 10;
    filter: invert(100%);
}

.invert-100 {
    filter: invert(100%) !important;
}

.navbar-solid .navbar__brand-img {
    filter: invert(0%);
}

.navbar-solid .navbar__toggler-icon,
.navbar-solid .navbar__toggler-icon::before,
.navbar-solid .navbar__toggler-icon::after {
    background-color: rgba(0, 0, 0, 0.623);
}

.open .navbar__toggler-icon {
    transform: translateX(-30px);
    background: transparent;
}

.open .navbar__toggler-icon::before {
    rotate: 45deg;
    translate: 24px 5.5px;
    background-color: #fff;
}

.open .navbar__toggler-icon::after {
    rotate: -45deg;
    translate: 24px -5.5px;
    background-color: #fff;
}

#nav-mobile {
    position: fixed;
    inset: 0;
    z-index: 9;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: grayscale(100%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s ease, visibility 0s 0.6s;
}

#nav-mobile.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.6s ease;
}

#nav-mobile li {
    list-style-type: none;
    text-align: center;
    line-height: 2;
    opacity: 0;
}

#nav-mobile.open li {
    opacity: 1;
    transition: 0.5s;
    transition-delay: var(--item-delay);
}

#nav-mobile a {
    text-decoration: none;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
}

#nav-mobile .icon * {
    fill: #cecece;
    height: 25px;
    width: 25px;
    transition: fill 0.5s ease;
}

.nav__social {
    position: fixed;
    bottom: 0;
    padding: 60px 10px;
    display: flex;
    gap: 20px;
}

.navbar__link {
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

.navbar__item:first-of-type .navbar__link {
    padding-left: 0;
}

.navbar__item:last-of-type .navbar__link {
    padding-right: 0;
}

.navbar__link:hover {
    opacity: 1;
}
</style>