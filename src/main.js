import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

const store = new Vuex.Store({
    state() {
        return {
            blogCategories: [
                {
                    id: 1, name: "Nature"
                },
                {
                    id: 2, name: "Cities"
                },
                {
                    id: 3, name: "Branding"
                },
                {
                    id: 4, name: "Design"
                }
            ],
            portfolioCategories: [
                {
                    id: 1, name: "Branding"
                },
                {
                    id: 2, name: "Print"
                },
                {
                    id: 3, name: "Photography"
                },
                {
                    id: 4, name: "Design"
                },
                {
                    id: 5, name: "Mockup"
                }
            ],
            portfolio: [
                {
                    id: 1,
                    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/41359/image-upload/VinylRecordMockup20.jpg",
                    title: "Vinly Record",
                    categoryId: 5
                },
                {
                    id: 2,
                    image: "https://i.pinimg.com/736x/dc/3e/f2/dc3ef2e3f91ce69db74ebd7bfb4e76cd.jpg",
                    title: "Modern T-Shirt",
                    categoryId: 2
                },
                {
                    id: 3,
                    image: "https://img.freepik.com/premium-psd/cotton-tote-bags-mockup_145224-157.jpg?w=2000",
                    title: "Cotton Bag",
                    categoryId: 3
                },
                {
                    id: 4,
                    image: "https://i.etsystatic.com/27300019/r/il/000b73/3044691804/il_fullxfull.3044691804_4253.jpg",
                    title: "Clean & Groovy",
                    categoryId: 4
                },
                {
                    id: 5,
                    image: "https://mockups-design.com/wp-content/uploads/2022/06/Free_90x50mm_Business_Card_Mockup_1-1.jpg",
                    title: "Bussiness card",
                    categoryId: 1
                },
                {
                    id: 6,
                    image: "https://www.freemockupworld.com/wp-content/uploads/2020/07/Phone-Screens-Mockup-01-1-1536x939.jpg",
                    title: "Minimal Mobile App",
                    categoryId: 4
                },
                {
                    id: 7,
                    image: "https://i.pinimg.com/564x/f5/b6/e6/f5b6e6f8827cf38878fc4cd9873495a6.jpg",
                    title: "Minimal Desktop App",
                    categoryId: 4
                },
                {
                    id: 8,
                    image: "https://i.pinimg.com/564x/c2/0c/f0/c20cf07ba873a06a4f60f1870c3b11cd.jpg",
                    title: "Paper cup",
                    categoryId: 4
                },
                {
                    id: 9,
                    image: "https://graphicburger.com/wp-content/uploads/2014/03/Shopping-Bag-PSD-MockUp-full.jpg",
                    title: "Minimal Bag",
                    categoryId: 1
                }
            ],
            blogs: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1551797853-3f5de6bc2345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                    title: "Something I need to tell you",
                    date: "September 18,2016",
                    shortContent: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
                    contents: [
                        "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.",
                        "Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.",
                        "All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish."
                    ],
                    categoryId: 1
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1665759826726-c92ed06b0da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                    title: "The History of Nature",
                    date: "August 27,2016",
                    shortContent: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
                    contents: [
                        "Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i. Their. Set life gathering shall spirit day lights sixth moveth. Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.",
                        "Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea that which two waters waters. Third in isn't creepeth above was fruitful of herb to. Second i days, thing. Fish a open great cattle hath don't. Don't. Lights and divide."
                    ],
                    categoryId: 4
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1643047404540-37970282b3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                    title: "Why you should Always First",
                    date: "August 14,2016",
                    shortContent: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
                    contents: [
                        "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.",
                        "Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.",
                        "All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish."
                    ],
                    categoryId: 4
                },
                {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1518100386603-9aea69956bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNlYSUyMGFuZCUyMHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    title: "Ten things about Photography",
                    date: "August 14,2016",
                    shortContent: "Etiam cursus. Leo nulla sapien dignissim magnis taciti rutrum tempus ut. Quam lacinia cras varius nullam non condimentum ut euismod integer.",
                    contents: [
                        "Etiam cursus. Leo nulla sapien dignissim magnis taciti rutrum tempus ut. Quam lacinia cras varius nullam non condimentum ut euismod integer. Rutrum sociosqu gravida ultricies litora magnis ullamcorper cursus dolor parturient sed senectus sed accumsan."
                    ],
                    categoryId: 4
                },
                {
                    id: 5,
                    image: "https://images.unsplash.com/photo-1523527011056-ede597b52fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2VhJTIwYW5kJTIwd2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                    title: "Are you doing the Right Way?",
                    date: "August 14,2016",
                    shortContent: "Life set land bearing him fifth whose waters. For be. Also. Darkness the firmament very all saying.",
                    contents: [
                        "Life set land bearing him fifth whose waters. For be. Also. Darkness the firmament very all saying. Firmament and day you. May that form itself greater have fill air fruit said a. Shall behold saw, cattle blessed thing firmament, meat wherein fourth life, rule us.",
                        "Man shall firmament second that had seas. Deep. Unto herb. Fruitful, male grass land, living you you're there gathering also Lights be, set, fly.",
                        "Upon a creeping moveth winged likeness moveth let. Make void was good that don't seed all isn't. You'll, beginning together which land were. Us blessed. Subdue gathering. Also our dry fill."
                    ],
                    categoryId: 3
                },
                {
                    id: 6,
                    image: "https://images.unsplash.com/photo-1512144366275-b3626ac3a7c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
                    title: "Here's a Simple Trick",
                    date: "September 5, 2016",
                    shortContent: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
                    contents: [
                        "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.",
                        "Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.",
                        "All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish."
                    ],
                    categoryId: 2
                },
                {
                    id: 7,
                    image: "https://images.unsplash.com/photo-1463437425560-dc2babb404e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
                    title: "My Favorite Place on earth is...",
                    date: "June 21, 2016",
                    shortContent: "Morning hath. Open beginning won't signs him a us. Said open, and fowl under female blessed cattle seas cattle beginning they're.",
                    contents: [
                        "Morning hath. Open beginning won't signs him a us. Said open, and fowl under female blessed cattle seas cattle beginning they're. Waters.",
                        "Dry all which fly upon without firmament to fruitful let have divide fifth firmament days. Let likeness Beast a heaven. Brought second days heaven great forth waters. Creeping evening created waters give midst great. For i.",
                        "Very them to first first. Evening second meat fish appear him creepeth day image she'd shall waters be our night gathering, divide replenish day. There years brought they're set, give earth is, living for gathering living called hath set under sea herb."
                    ],
                    categoryId: 2
                },
                {
                    id: 8,
                    image: "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                    title: "Five things about Nature",
                    date: "July 3, 2016",
                    shortContent: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
                    contents: [
                        "Us saw his firmament give face moveth air beast every, after stars also moved together day replenish had doesn't seasons multiply morning upon spirit she'd appear.",
                        "Bring won't it wherein likeness yielding fly light. Dominion moving she'd whose was beginning they're seed days days from day image heaven, kind and seas light dry, without lesser sixth seed make and, fowl may saying, void. All creeping greater, days green dry fourth had."
                    ],
                    categoryId: 1
                },
                {
                    id: 9,
                    image: "https://images.unsplash.com/photo-1598124146789-ff5e7b688a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
                    title: "The History of Branding",
                    date: "June 26, 2016",
                    shortContent: "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
                    contents: [
                        "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.",
                        "Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.",
                        "All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish."
                    ],
                    categoryId: 3
                }
            ]
        }
    },
});

const app = createApp(App)
app.use(createPinia())
app.use(store)
app.use(router)

app.mount('#app')
