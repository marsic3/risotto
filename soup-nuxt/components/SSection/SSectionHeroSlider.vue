<template>
  <s-section class="section-hero section-hero-slider" bg="dark" theme="dark">
    <client-only>
      <!-- Carousel - Images -->
      <carousel ref="images" class="section-slider carousel inner-controls" :perPage="1" :paginationEnabled="true" :loop="true" :navigateTo="activeSlide" :speed="600" :paginationSize="6" :paginationColor="'whiteFFF'" :paginationActiveColor="'whiteFFF'" @page-change="updateCarousel" :navigationEnabled="true" navigationPrevLabel="" navigationNextLabel="">
        <slide class="slide" v-for="(slide, index) in slides" :key="index" :class="`bg-${bg}`">
          <s-bg-image :image="slide.image" transparent />
          <b-container class="slide-content v-center">
            <template v-if="slide.type === 'PRODUCT'">
              <h4 class="text-muted">{{ slide.tagline }}</h4>
              <h1 class="display-1">{{ slide.title }}</h1>
              <b-button-group>
                <s-button variant="outline-primary" size="lg" @click.native.prevent="showModal({ itemId: slide.productId, mode: 'ADD' })">Add to cart</s-button>
                <span class="price price-lg">from ${{ slide.price }}</span>
              </b-button-group>
            </template>
            <template v-if="slide.type === 'BASIC'">
              <h1 class="display-1">{{ slide.title }}</h1>
              <h5 class="text-muted mb-5">{{ slide.tagline }}</h5>
              <s-button v-if="slide.link" :to="{ path: slide.link.slug }" variant="outline-primary" size="lg">{{ slide.link.title }}</s-button>
            </template>
          </b-container>
        </slide>
      </carousel>
    </client-only>
  </s-section>
</template>

<script>
import { mapActions } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Simple hero slider with background images
 */
export default {
  name: 'SSectionHeroSlider',
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
      else if (this.activeSlide === 0) this.activeSlide = this.hero.slides.length - 1
    },
    nextSlide() {
      if (this.activeSlide < this.hero.slides.length - 1) this.activeSlide++
      else this.activeSlide = 0
    },
    updateCarousel(page) {
      this.activeSlide = page
    }
  }
}
</script>

<style lang="scss">
.section.section-hero-slider {
  padding: 0;

  .section-slider {
    height: 100%;

    .slide {
      @include section-hero;
      position: relative;
      min-height: 70vh;
      display: flex;
      align-items: center;

      .slide-content {
        z-index: 2;
        padding-top: 4rem;
        padding-bottom: 4rem;
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
    "productId": 1,
    "title": "Boscaiola Pasta",
    "tagline": "New product!",
    "price": 9.98
  },
  {
    "type": "BASIC",
    "image": "http://assets.suelo.pl/soup/img/photos/slider-burger.jpg",
    "offerId": 1,
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
    "offerId": 1,
    "title": "Delicious Desserts",
    "tagline": "Order it online even now!",
    "link": {
      "title": "Check our menu",
      "slug": "/menu-list-navigation"
    }
  }
]
</docs>
