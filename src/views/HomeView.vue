<script>
import $ from 'jquery'
import Navbar from '../components/Navbar.vue';
import IconBriefcase from '../components/icons/IconBriefcase.vue'
import IconClock from '../components/icons/IconClock.vue'
import IconStar from '../components/icons/IconStar.vue'
import IconHeart from '../components/icons/IconHeart.vue'
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper";
import Portfolio from '../components/Portfolio.vue';
import { mapState } from 'vuex';
export default {
  components: {
    IconBriefcase,
    IconClock,
    IconStar,
    IconHeart,
    Swiper,
    SwiperSlide,
    Navbar,
    Portfolio
  },
  data() {
    return {
      modules: [Pagination]
    };
  },
  computed: {
    ...mapState(["portfolio", "portfolioCategories", "blogs"])
  },
  methods: {
    animateToNextElement: function (event) {
      $("html, body").animate({ scrollTop: $(event.target).parent().height() - $("#navbar").height() }, 600);
    }
  }
}
</script>

<template>
  <main>
    <Navbar
      :isSolid="false"
      :isFixed="true"
    ></Navbar>
    <div id="header">
      <h6 class="header-subtitle">New branding agency</h6>
      <h3 class="header-title">We are about to change the way<br /><em>you publish on the web</em></h3>
      <a
        class="arrow-down"
        @click="animateToNextElement($event)"
      ></a>
    </div>
    <div
      id="about"
      class="bg-white"
    >
      <div class="container">
        <div class="row m-0">
          <div class="col-md-8 col-lg-8 offset-md-2 offset-lg-2">
            <h2 class="about-title">About our agency</h2>
            <p class="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, et velit
              voluptatibus odio a possimus magni, deserunt rerum illum est molestiae accusantium sunt dignissimos
              quisquam totam animi provident maxime explicabo.</p>
            <img
              class="about-signature"
              src="../assets/about-me-signature.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="box bg-dark">
      <div class="container">
        <div class="my-5 py-2"></div>
        <div class="row">
          <div class="col-lg-3 d-flex align-items-center">
            <div class="box-icon">
              <IconBriefcase />
            </div>
            <div>
              <div class="box-count">548</div>
              <div class="box-title">Project completed</div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <div class="box-icon">
              <IconClock />
            </div>
            <div>
              <div class="box-count">1465</div>
              <div class="box-title">Working hours</div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <div class="box-icon">
              <IconStar />
            </div>
            <div>
              <div class="box-count">612</div>
              <div class="box-title">Positive feedbacks</div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <div class="box-icon">
              <IconHeart />
            </div>
            <div>
              <div class="box-count">735</div>
              <div class="box-title">Happy clients</div>
            </div>
          </div>
        </div>
        <div class="my-5 py-2"></div>
      </div>
    </div>
    <div
      id="project"
      class="bg-white"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="project-title">Best projects</div>
            <div class="project-content">Donec orci sem, pretium ac dolor et, faucibus faucibus mauris.
              Etiam,pellentesque
              faucibus. Vestibulum gravida volutpat ipsum non ultrices.</div>
          </div>
        </div>
        <Portfolio
          :categories="portfolioCategories"
          :portfolio="portfolio"
        ></Portfolio>
      </div>
    </div>
    <div class="box bg-dark">
      <swiper
        :pagination="true"
        :modules="modules"
        loop
        class="mySwiper"
      >
        <swiper-slide>
          <div class="quote">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <blockquote>
                    <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a
                      sizable
                      first
                      project and am looking forward to start the next one asap.</p>
                    <cite> Michael Hopkins</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quote">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <blockquote>
                    <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a
                      sizable
                      first
                      project and am looking forward to start the next one asap.</p>
                    <cite> Michael Hopkins</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quote">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <blockquote>
                    <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a
                      sizable
                      first
                      project and am looking forward to start the next one asap.</p>
                    <cite> Michael Hopkins</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="container-fluid bg-white py-3">
      <div class="container">
        <Swiper
          :slides-per-view="5"
          :space-between="20"
          loop
          class="mySwiper"
        >
          <SwiperSlide :virtualIndex="0">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-4-dark.png"
              width="200"
            />
          </SwiperSlide>
          <SwiperSlide :virtualIndex="1">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-3-dark.png"
              width="200"
            />
          </SwiperSlide>
          <SwiperSlide :virtualIndex="2">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-5-dark.png"
              width="200"
            />
          </SwiperSlide>
          <SwiperSlide :virtualIndex="3">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-6-dark.png"
              width="200"
            />
          </SwiperSlide>
          <SwiperSlide :virtualIndex="4">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-7-dark.png"
              width="200"
            />
          </SwiperSlide>
          <Swiper-Slide :virtualIndex="5">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-8-dark.png"
              width="200"
            />
          </Swiper-Slide>
          <SwiperSlide :virtualIndex="6">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-1-dark.png"
              width="200"
            />
          </SwiperSlide>
          <SwiperSlide :virtualIndex="7">
            <img
              src="http://unvab.com/snow-free-html/assets/images/partner-logo-2-dark.png"
              width="200"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
    <div
      id="blog"
      class="bg-gray-1 py-5"
    >
      <div class="container mt-5">
        <div class="row m-0">
          <div class="col-md-8 col-lg-8 offset-md-2 offset-lg-2">
            <h2 class="blog-title">Lastest blog</h2>
            <p class="blog-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum
              laudantium harum autem quidem ex ullam explicabo sint alias. Eligendi?</p>
          </div>
        </div>
        <div class="py-4"></div>
        <Swiper
          :slides-per-view="3"
          :space-between="30"
          :pagination="true"
          :modules="modules"
          loop
          class="mySwiper"
        >
          <SwiperSlide
            v-for="(blog, index) in blogs.slice(0,5)"
            :key="index"
            :virtualIndex="index"
          >
            <div class="card">
              <a href="/">
                <div class="card-img-top">
                  <div class="card-img">
                    <img :src="blog.image" />
                  </div>
                  <a
                    class="card-link"
                    href="/"
                  >Nature</a>
                </div>
              </a>
              <div class="card-body">
                <div class="card-title">{{ blog.title }}</div>
                <div class="card-subtitle">{{ blog.date }}</div>
                <div class="card-text">{{ blog.shortContent }}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 pe-4">
            <h3>Contact info:</h3>
            <p>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices
              vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam
              consectetur.</p>
            <ul class="list-unstyled">
              <li class="my-3 small"><span class="text-dark fw-bold">Address:&ensp;</span>My Dinh, Tu Liem, Ha Noi, Viet
                Nam
              </li>
              <li class="my-3 small"><span class="text-dark fw-bold">Phone:&ensp;</span>(+84) 327 454 684</li>
              <li class="my-3 small"><span class="text-dark fw-bold">Email:&ensp;</span>info@Example.com</li>
            </ul>
          </div>
          <div class="col-lg-7 ps-4">
            <form action="/">
              <div class="row m-0 gap-4">
                <div class="col p-0">
                  <input
                    type="text"
                    class="form-control py-3 px-4 border-0 rounded-0 shadow-none"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col p-0">
                  <input
                    type="email"
                    class="form-control py-3 px-4 border-0 rounded-0 shadow-none"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                class="form-control mt-4 py-3 px-4 border-0 rounded-0 shadow-none"
                placeholder="Your Title"
                required
              />
              <textarea
                class="form-control mt-4 py-3 px-4 border-0 rounded-0 shadow-none"
                rows="7"
                placeholder="Your Comment"
                required
              ></textarea>
              <button class="mt-4">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.swiper-pagination {
  height: 15px;
  width: 15px;
  display: inline-block;
  z-index: 2;
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 10%;
}

#blog .swiper-pagination-bullets.swiper-pagination-horizontal {
  position: relative;
  margin: 1rem 0;
}

.swiper-pagination-bullet {
  background: #777777;
  transition: opacity 0.3s ease, background 0.3s ease, transform 0.5s ease;
  opacity: 0.2;
}

.swiper-pagination-bullet-active {
  background: #fff;
  transform: scale(1.25);
  opacity: 1;
}

#blog .swiper-pagination-bullet-active {
  background: rgb(83, 83, 83);
}
</style>
<style scoped>
.bg-gray-1 {
  background-color: #fafafa;
}

.card {
  position: relative;
}

.card-link {
  position: absolute;
  bottom: 10px;
  left: 10px;
  text-decoration: none;
  background-color: #000;
  padding: 5px 25px;
  text-transform: uppercase;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 500;
  z-index: 10;
  transition: background 0.5s ease;
}

.card-link:hover {
  background-color: rgba(0, 0, 0, 0.562);
}

.card-img-top {
  width: 100%;
  padding-top: 70%;
  position: relative;
  background: #fff;
}

.card-img {
  position: absolute;
  inset: 0;
}

.card-img::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: transparent;
  transition: background 0.5s ease-in-out;
}

.card-img-top img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-img:hover::before {
  background: rgba(255, 255, 255, 0.384);
}

.card-body {
  padding: 2rem;
}

.card-title {
  font-family: playfair-display, serif;
  font-size: 1.45rem;
  color: #000;
  font-weight: 600;
}

.card-subtitle {
  font-size: 0.825rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
}

.card-text {
  margin-top: 10px;
  line-height: 1.7;
  word-spacing: 1px;
  letter-spacing: 1px;
  font-weight: 300;
  color: #000;
  font-size: 0.85;
}

#header {
  max-height: 1281px;
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/home_2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;

}

.header-subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.header-title {
  font-size: 3.5rem;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  text-align: center;
  margin: 1.5rem 0;
}

.arrow-down {
  position: absolute;
  bottom: 7%;
  text-decoration: none;
  color: inherit;
  border: 1px solid #fff;
  border-radius: 50%;
  height: 3.3rem;
  width: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s linear;
  overflow: hidden;
}

.arrow-down::before {
  content: '';
  height: 0.6em;
  width: 0.6em;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  rotate: -45deg;
  scale: 0.9;
}

.arrow-down:hover {
  opacity: 1;
}


#about {
  height: 50vh;
  display: flex;
  align-items: center;
}

.about-title,
.project-title,
.blog-title {
  text-transform: capitalize;
  text-align: center;
  font-size: 2.75rem;
  font-weight: 600;
  color: rgb(22, 22, 22);
  font-family: playfair-display, serif;
  margin-bottom: 1.5rem;
}

.about-content,
.project-content,
.blog-content {
  color: rgba(0, 0, 0, 0.616);
  font-size: 1.1rem;
  margin-top: 1rem;
  text-align: center;
}

#contact {
  color: rgba(0, 0, 0, 0.616);
  font-size: 1.1rem;
  margin-top: 1rem;
  padding: 5.5rem 0;
}

#contact h3 {
  text-transform: capitalize;
  font-size: 2.75rem;
  font-weight: 600;
  color: rgb(22, 22, 22);
  font-family: playfair-display, serif;
  margin-bottom: 1.5rem;
}


.about-signature {
  display: block;
  margin: 2rem auto;
}

.box {
  height: auto;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  background: url('../assets/bg-pattern.jpg');
  background-position: center;
  background-repeat: repeat-y;
}


.box-count,
.box-title {
  text-transform: uppercase;
  font-weight: 700;
  margin-left: 2rem;
}

#project {
  padding: 5rem 0;
}

.sliders {
  width: 100%;
  background: rgba(87, 87, 87, 0.363);
  height: 15rem;
  margin: 7rem 0;
}

.quote {
  text-align: center;
  margin: 10rem 0;
  font-family: playfair-display, serif;
  font-size: 1.65rem;
  font-style: italic;
}

.quote p::before {
  content: '\201C';
  margin-right: 8px;
}

.quote p::after {
  content: '\201D';
  margin-left: 8px;
}

.quote cite {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  font-family: sans-serif;
}

#contact button {
  background: rgb(17, 17, 17);
  border: 0;
  color: #fff;
  padding: 15px 25px;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  transition: background 0.5s ease;
}

#contact button:hover {
  background: rgba(17, 17, 17, 0.85);
}
</style>