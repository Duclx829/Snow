<template>
    <div
        id="toggle-navbar"
        class="wrapper my-4"
    >
        <div
            class="toggle d-flex mb-4 justify-content-center"
            :class="{ active: show }"
            @click="show = !show"
        >
            <IconGrid></IconGrid>
        </div>
        <ul :class="{ active: show }">
            <li :style="`--myDelay: 0.4s`">
                <input
                    type="radio"
                    name="rad"
                    id="all"
                    @change="categorySelect"
                />
                <label for="all">All</label>
            </li>
            <li
                v-for="(item, index) in categories"
                :key="index"
                :style="`--myDelay: ${0.4 + (index + 1) * 0.1}s`"
            >
                <input
                    type="radio"
                    name="rad"
                    :id="item.name"
                    @change="categorySelect(index)"
                />
                <label :for="item.name">{{ item.name }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
import IconGrid from './icons/IconGridSolid.vue';
export default {
    components: { IconGrid },
    props: ["categories"],
    data() {
        return {
            show: false
        }
    },
    setup(props, context) {
        const categorySelect = index => {
            context.emit("category-selected", props.categories[index]);
        }
        return {
            categorySelect
        }
    },
    mounted() {
        $(".toggle").on("click", function () {
            var toggleBtn = $(this);
            toggleBtn.css("pointer-events", "none");
            var myTimeout = setTimeout(function () {
                toggleBtn.css("pointer-events", "auto");
                clearTimeout(myTimeout);
            }, 1000);
        });
        $("#all").click();
    },
}
</script>

<style scoped>
#toggle-navbar {
    --duration: 0.4s;
}

.toggle>* {
    fill: #111111;
    transition: fill var(--duration) 1s ease, opacity var(--duration) ease;
    cursor: pointer;
}

.toggle.active>* {
    fill: #9b9b9ba6;
}

.toggle:not(.active):hover>* {
    opacity: 0.6;
}

ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0;
    padding: 0;
    transform-origin: top;
    transition: all var(--duration) ease;
    transition-delay: 0.7s;
    overflow: hidden;
    height: 0;
}

ul.active {
    transition-delay: 0s;
    height: 50px;
    width: 100%;
}

li {
    list-style-type: none;
    opacity: 0;
    margin: 0.1rem 1.2rem 0 1.2rem;
    transform: translateY(-50%);
    transition: opacity var(--duration) calc(var(--myDelay) - var(--duration)) ease,
        transform var(--duration) calc(var(--myDelay) - var(--duration)) ease;
}

ul.active li {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--myDelay);
}

input[type="radio"] {
    display: none;
}

input[type="radio"]~label {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #535353b4;
    transition: all 0.2s ease;
    cursor: pointer;
}

input[type="radio"]:checked~label,
input[type="radio"]:hover~label {
    color: #111111;
}
</style>