<template>
    <div class="portfolio">
        <article
            class="article hide"
            :data-category-id="item.categoryId"
            v-for="(item, index) in portfolio"
            :key="index"
        >
            <div
                class="portfolio-item"
                :style="`--scaleDelay: ${index * 0.05}s`"
            >
                <router-link
                    to="/"
                    class="portfolio-link"
                >
                </router-link>
                <div
                    class="portfolio-image"
                    :style="`background-image: url('${item.image}')`"
                ></div>
                <div class="portfolio-content">
                    <h4 class="portfolio-title">{{ item.title }}</h4>
                    <p class="portfolio-subtitle">{{ getCategoryName(item.categoryId) }}</p>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    props: {
        portfolio: {
            type: Object
        },
        categories: {
            type: Object
        },
        category: {
            type: Object
        },
        size: {
            type: Number,
            default: 9
        }
    },
    data() {
        return {
            selectedCategoryId: -1,
        }
    },
    watch: {
        category: function (newVal, oldVal) {
            this.selectedCategoryId = !newVal ? -1 : newVal.id
            this.changeItemVisibility();
        },
        size: function (newVal, oldVal) {
            this.changeItemVisibility();
        }
    },
    methods: {
        getCategoryName(id) {
            var category = this.categories.filter(value => value["id"] == id);
            return category[0].name;
        },
        changeItemVisibility: function () {
            $(".article:not(.hide)").addClass("hide");
            if (this.selectedCategoryId == -1) {
                $(".article").slice(0, this.size).removeClass("hide");
                return;
            }
            $(`.article[data-category-id=${this.selectedCategoryId}]`).slice(0, this.size).removeClass("hide");
        }
    },
    mounted() {
        this.changeItemVisibility();
    }
}
</script>
<style scoped>
.portfolio {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
}

.article {
    width: 33.3333%;
    padding-top: 33.333%;
    position: relative;
    visibility: visible;
    transition: all 0.5s ease, visibility 0s ease;
}

@media (max-width: 991px) {
    .article {
        width: 50%;
        padding-top: 50%;
    }
}
@media (max-width: 767px) {
    .article {
        width: 100%;
        padding-top: 100%;
    }
}
@media (max-width: 576px) {
    .article {
        width: 80%;
        padding-top: 80%;
        margin: 0 auto;
    }
}

.article.hide {
    width: 0;
    padding-top: 0;
    visibility: hidden;
    transition: all 0.5s ease, visibility 0s 0.5s ease;
}

.portfolio-item {
    height: 100%;
    width: 100%;
    inset: 0;
    opacity: 1;
    transition: all 0.2s var(--scaleDelay) ease, opacity 0.1s ease;
    position: absolute;
}

.article.hide .portfolio-item {
    width: 0%;
    height: 0%;
    inset: 0%;
    opacity: 0;
}

.portfolio-link {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.portfolio-image {
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.portfolio-content {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.795);
    font-family: playfair-display, serif;
    color: #fff;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.4s linear;
}

.portfolio-item:hover .portfolio-content {
    opacity: 1;
}


.portfolio-title {
    text-transform: capitalize;
    font-size: 1.8rem;
    font-weight: 600;
}

.portfolio-subtitle {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 0.8rem;
}

.portfolio-title,
.portfolio-subtitle {
    transform-origin: bottom;
    transform: translateY(20px);
    opacity: 0;

}

.portfolio-title {
    transition: transform 0.4s linear,
        opacity 0.2s linear;
}

.portfolio-subtitle {
    transition: transform 0.4s linear,
        opacity 0.5s linear;
}


.portfolio-item:hover .portfolio-title,
.portfolio-item:hover .portfolio-subtitle {
    transform: translateY(0);
    opacity: 1;
}
</style>