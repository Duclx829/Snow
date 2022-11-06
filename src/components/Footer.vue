<template>
    <footer class="mb-lg-0 mb-xxl-5">
        <div class="icon d-flex gap-3 justify-content-center text-danger">
            <a href="https://twitter.com/">
                <IconTwitterSolid />
            </a>
            <a href="https://www.facebook.com/">
                <IconFacebookSolid />
            </a>
            <a href="https://www.instagram.com/">
                <IconInstagramOutline />
            </a>
        </div>
        <div class="text-center text-secondary mt-4">
            2022&copy; Design by Unvab. Code by Duc
        </div>
        <div
            id="toTop"
            :class="{show: isShow}"
            @click="goToTop"
        >
            <IconChervonUp />
        </div>
    </footer>
</template>

<script setup>
import IconTwitterSolid from "./icons/IconTwitterSolid.vue"
import IconFacebookSolid from "./icons/IconFacebookSolid.vue"
import IconInstagramOutline from "./icons/IconInstagramOutline.vue"
import IconChervonUp from "./icons/IconChervonUp.vue"
import $ from "jquery"
import { ref } from "vue"

const isShow = ref(false);

const goToTop = () => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
}

$(window).scroll(() => { isShow.value = $(window).scrollTop() > 800 });

</script>

<style scoped>
footer {
    background: #ebebeb;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.icon * {
    fill: rgb(146, 146, 146);
    height: 18px;
    width: 18px;
    transition: fill 0.5s ease;
}

.icon *:hover {
    fill: rgb(29, 29, 29);
}

#toTop {
    position: fixed;
    z-index: -10;
    right: 50px;
    bottom: 5%;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    opacity: 0;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s linear, visibility 0s 0.4s linear, po;
    cursor: pointer;
    overflow: hidden;
    pointer-events: none;
}

#toTop.show {
    pointer-events: auto;
    opacity: 0.8;
    z-index: 10;
    border-color: #b4b4b4;
    transition: all 0.3s linear, visibility 0s 0s linear;
    visibility: visible;
}


#toTop:hover {
    opacity: 1;
    border-color: rgb(97, 97, 97);

}

#toTop:hover>* {
    animation: roll-up 0.3s linear forwards;
}

@keyframes roll-up {
    20% {
        transform: translateY(-100%);
    }

    50% {
        transform: translateY(-100%);
        opacity: 0;
    }

    60% {
        opacity: 0;
        transform: translateY(100%);
    }

    90% {
        opacity: 1;
    }
}
</style>