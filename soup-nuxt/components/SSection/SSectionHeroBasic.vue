<template>
  <s-section class="section-hero section-hero-basic" bg="light">
    <client-only>
      <!-- Carousel - Images -->
      <carousel ref="images" class="images" :perPage="1" :paginationEnabled="true" :loop="true" :navigateTo="activeSlide" :speed="600" :paginationSize="6" :paginationColor="'whiteFFF'" :paginationActiveColor="'whiteFFF'" @page-change="updateCarousel">
        <slide class="slide" v-for="(slide, index) in slides" :key="index">
          <s-bg-image :image="slide.image" />
        </slide>
      </carousel>
      <b-container :class="[theme.toLowerCase()]">
        <div class="container-inner">
          <!-- Carousel - Content -->
          <div :class="['content', theme.toLowerCase()]">
            <carousel ref="content" :perPage="1" :paginationEnabled="false" :loop="true" :navigateTo="activeSlide" :speed="600" :autoplay="true" :autoplayTimeout="3000" @page-change="updateCarousel">
              <slide class="content-inner" v-for="(slide, index) in slides" :key="index">
                <template v-if="slide.type === 'PRODUCT'">
                  <h4 class="text-muted">{{ slide.tagline }}</h4>
                  <h1>{{ slide.title }}</h1>
                  <b-button-group>
                    <s-button variant="outline-primary" size="lg" @click.native.prevent="showModal({ itemId: slide.productId, mode: 'ADD' })">Add to cart</s-button>
                    <span class="price price-lg">from ${{ slide.price }}</span>
                  </b-button-group>
                </template>
                <template v-if="slide.type === 'BASIC'">
                  <h1>{{ slide.title }}</h1>
                  <h5 class="text-muted mb-5">{{ slide.tagline }}</h5>
                  <s-button v-if="slide.link" :to="{ path: slide.link.slug }" variant="outline-primary" size="lg">{{ slide.link.title }}</s-button>
                </template>
              </slide>
            </carousel>
            <nav class="content-nav">
              <a class="prev" href="#" @click.prevent="prevSlide()"><i class="ti ti-arrow-left"></i></a>
              <a class="next" href="#" @click.prevent="nextSlide()"><i class="ti ti-arrow-right"></i></a>
            </nav>
          </div>
        </div>
      </b-container>
    </client-only>
  </s-section>
</template>

<script>
import { mapActions } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Basic hero section with synchronized images and descriptions
 */
export default {
  name: 'SSectionHeroBasic',
  mixins: [section],
  components: {
    SSection,
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SButton: () => import('@/components/SButton/SButton')
  },
  props: {
    /**
     * Slides to display in the slider
     */
    slides: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      activeSlide: 0
    }
  },
  methods: {
    ...mapActions('cart', ['showModal']),
    prevSlide() {
      if (this.activeSlide > 0) this.activeSlide--
      else if (this.activeSlide === 0) this.activeSlide = this.slides.length - 1
    },
    nextSlide() {
      if (this.activeSlide < this.slides.length - 1) this.activeSlide++
      else this.activeSlide = 0
    },
    updateCarousel(page) {
      this.activeSlide = page
    }
  }
}
</script>

<style lang="scss">
.section.section-hero-basic {
  @include section-hero;

  > .images {
    width: 100%;
    right: 0;

    .body-padded & {
      width: 100%;
    }
  }

  .images {
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: move;
    overflow: hidden;

    .VueCarousel-pagination {
      position: absolute;
      bottom: 15px;
      left: 20px;
      text-align: left;
    }

    .VueCarousel-wrapper,
    .VueCarousel-inner {
      height: 100% !important;
    }

    .slide {
      position: relative;
      height: 100%;
    }
  }

  > .container {
    height: 100%;

    .container-inner {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    > .images {
      width: calc(1110px + ((100vw - 1110px) / 2) - 70px);
      right: 70px;

      @include media('<=xs') {
        width: auto;
        left: -15px;
        right: -15px;
      }

      .body-padded & {
        width: calc(1110px + ((100vw - 1110px) / 2) - 70px - 30px);
      }
    }

    .content {
      position: relative;
      z-index: 5;
      width: 45%;
      background-color: white;

      @include media('<=md') {
        width: 80%;
        margin-top: 90px;
        margin-bottom: 90px;
      }

      @include media('<=xs') {
        width: 90%;
        margin-top: 160px;
      }

      &.dark {
        background-color: $color-dark;
      }

      .content-inner {
        padding: 4rem;

        @include media('<=xl') {
          padding: 3rem;
        }

        @include media('<=md') {
          padding: 2.5rem;
        }

        @include media('<=xs') {
          padding: 2.25rem;
        }
      }

      .content-nav {
        position: absolute;
        top: 100%;
        right: 0;

        > a {
          float: left;
          width: 70px;
          height: 70px;
          display: block;
          background-color: $color-extra-dark;
          line-height: 70px;
          text-align: center;
          font-size: 1.4rem;
          color: inherit;

          > i {
            display: inline-block;
            transition: transform 0.2s ease-out;
          }

          &:hover,
          &:focus {
            &.next > i {
              transform: translateX(3px);
            }

            &.prev > i {
              transform: translateX(-3px);
            }
          }

          &:not(:last-child) {
            border-right: 1px solid $color-line-light;
          }
        }
      }
    }
  }
}
</style>

<docs>
This is recommended data structure for `slides` prop.
```json
[
  {
    "type": "PRODUCT",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-pasta.jpg",
    "productId": 14,
    "title": "Boscaiola Pasta",
    "tagline": "New product!"
  },
  {
    "type": "BASIC",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-burger.jpg",
    "title": "Get 10% off coupon",
    "tagline": "and use it with your next order!",
    "link": {
      "title": "Check our offers",
      "slug": "/offers"
    }
  },
  {
    "type": "BASIC",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-dessert.jpg",
    "title": "Delicious Desserts",
    "tagline": "Order it online even now!",
    "link": {
      "title": "Check our menu",
      "slug": "/menu-list-navigation"
    }
  }
]
</docs>
