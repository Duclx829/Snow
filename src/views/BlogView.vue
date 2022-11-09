<template>
    <div>
        <Navbar></Navbar>
        <div class="container mt-0 mt-lg-5 blog">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 blog-post-isotope">
                    <ToggleNavbar
                        :categories="blogCategories"
                        v-on:category-selected="categorySelected"
                    ></ToggleNavbar>
                    <div
                        v-for="(blog, index) in blogs"
                        :key="index"
                        class="blog-post hide"
                        :data-category-id="blog.categoryId"
                    >
                        <div class="post-header">
                            <a
                                class="post-link"
                                href="/"
                            >
                                <div
                                    class="post-image"
                                    :style="`background-image: url('${blog.image}')`"
                                >
                                </div>
                            </a>
                            <div class="post-category">
                                <a>{{ getCategoryName(blog.categoryId) }}</a>
                            </div>
                        </div>
                        <div class="post-body">
                            <div class="post-title">{{ blog.title }}</div>
                            <div class="post-subtitle">{{ blog.date }}</div>
                            <div class="post-text">
                                <p
                                    v-for="(text, index) in blog.contents"
                                    :key="index"
                                >
                                    {{ text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="!reachMaxSize"
            class="load-more-works"
        >
            <button @click="showMoreItems">Load more works</button>
        </div>
    </div>
</template>

<script setup>
import $ from 'jquery'
import Navbar from '../components/Navbar.vue';
import ToggleNavbar from '../components/ToggleNavbar.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blogCategories = computed(() => store.state.blogCategories);
const blogs = computed(() => store.state.blogs);
const reachMaxSize = ref(false);
const currentCategory = ref({});
const defaultSize = ref(8);
const size = ref(0);

const getCategoryName = (id) => {
    var category = blogCategories.value.find(e => e.id == id)
    return category.name;
}

const checkMaxSize = () => {
    reachMaxSize.value = !currentCategory.value
        ? size.value >= blogs.value.length
        : (size.value >= blogs.value.filter(value => value.categoryId == currentCategory.value.id).length);
}

const loadItemByCategory = () => {
    checkMaxSize();
    $(`.blog-post:not(.hide)`).addClass("hide")
    if (currentCategory.value == undefined) {
        $(`.blog-post`).slice(0, size.value).removeClass("hide");
        return;
    }
    var id = currentCategory.value.id;
    $(`.blog-post[data-category-id ='${id}']`).slice(0, size.value).removeClass("hide");
}

const categorySelected = (cate) => {
    currentCategory.value = cate;
    size.value = defaultSize.value;
    loadItemByCategory();
}
const showMoreItems = () => {
    size.value += 2;
    loadItemByCategory()
}
</script>

<style scoped>
.load-more-works {
    background: #fff;
    padding: 2rem 0;
    text-align: center;
}

.load-more-works>button {
    padding: 1rem 3rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    transition: opacity 0.3s ease;
    border: none;
    background: transparent;
}

.load-more-works>button:hover {
    opacity: 0.8;
}

.blog-post-isotope {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: relative;
    gap: 2.2rem;
    margin-bottom: 5rem;
}

.blog-post {
    background: #fff;
    width: 100%;
    height: auto;
    opacity: 1;
    transform-origin: bottom;
    transform: scale(1);
    transition: all 0.2s linear;
}


.blog-post.hide {
    height: 0;
    opacity: 0;
    transform: scale(0);
    transition: height 0s 0.2s linear;
    position: absolute;
    overflow: hidden;
}

.post-header {
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.post-link {
    position: absolute;
    inset: 0;
    display: block;
    background-color: transparent;
}

.post-image {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 0.35s ease, background 0.25s linear;
}

.post-image::before,
.post-image::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    visibility: hidden;
    transition: 0.3s;
}

.post-image::before {
    top: 1rem;
    left: 1rem;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
}

.post-image::after {
    bottom: 1rem;
    right: 1rem;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
}

.post-image:hover::before,
.post-image:hover::after {
    width: 20%;
    height: 20%;
    visibility: visible;
}

.post-image:hover {
    /* opacity: 0.8; */
    background-size: 115% 115%;
}


.post-category {
    position: absolute;
    left: 20px;
    bottom: 20px;
    background: #000;
    color: #fff;
    z-index: 2;
    transition: background 0.3s ease;
}

.post-category>a {
    display: inline-block;
    padding: 0.3rem 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.82rem;
    cursor: pointer;
}

.post-category:hover {
    background: rgb(49, 49, 49);
}

.post-body {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.post-title {
    font-size: 1.8rem;
    color: #000;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
}

.post-subtitle {
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
}

.post-text {
    color: #373a3cd5;
    font-size: 1rem;
}

.post-text p {
    word-spacing: 1px;
    letter-spacing: 1px;
    line-height: 1.8;
    margin-bottom: 1.75rem;
    font-weight: 400;
}

.post-text p:last-of-type {
    margin-bottom: 0;
}
</style>