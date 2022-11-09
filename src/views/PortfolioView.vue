<template>
    <div>
        <Navbar></Navbar>
        <div class="mt-0 mt-lg-5 ">
            <ToggleNavbar
                :categories="portfolioCategories"
                v-on:category-selected="categorySelected"
            ></ToggleNavbar>
        </div>
        <div class="container mb-5 pb-5 w-100">
            <Portfolio
                :portfolio="portfolio"
                :categories="portfolioCategories"
                :category="category"
                :size="size"
            ></Portfolio>
        </div>
        <div
            v-if="!reachMaxSize"
            class="load-more-works"
        >
            <a @click="loadMoreItem">Load more works</a>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import ToggleNavbar from '../components/ToggleNavbar.vue';
import Portfolio from '../components/Portfolio.vue';
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const category = ref({});
const defaultSize = ref(9);
const size = ref(0);
const store = useStore()
const portfolio = computed(() => store.state.portfolio)
const portfolioCategories = computed(() => store.state.portfolioCategories)
const reachMaxSize = ref(false)

const checkMaxSize = function () {
    reachMaxSize.value = !category.value
        ? size.value >= portfolio.value.length
        : (size.value >= portfolio.value.filter(value => value.categoryId == category.value.id).length);
}
const loadMoreItem = function () {
    size.value += 6;
    checkMaxSize();
}
const categorySelected = function (cate) {
    category.value = cate;
    size.value = defaultSize.value;
    checkMaxSize();
}
</script>

<style scoped>
.load-more-works {
    background: #fff;
    padding: 2rem 0;
    text-align: center;
}

.load-more-works>a {
    padding: 1rem 3rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    transition: opacity 0.3s ease;
}

.load-more-works>a:hover {
    opacity: 0.8;
}
</style>