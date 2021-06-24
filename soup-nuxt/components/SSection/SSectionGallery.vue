<template>
  <s-section :bg="bg" :theme="theme" cover>
    <client-only>
      <div class="gallery">
        <carousel ref="content" class="gallery-carousel carousel inner-controls" :perPage="1" :paginationEnabled="false" :loop="true" :navigateTo="activeSlide" :speed="600" :navigationEnabled="true" navigationPrevLabel="" navigationNextLabel="" @page-change="updateCarousel">
          <slide v-for="(image, index) in items" :key="index">
            <img :src="image.url" :alt="image.title" />
          </slide>
        </carousel>
        <div class="gallery-nav">
          <carousel ref="content" class="gallery-nav-inner" :perPage="1" :paginationEnabled="false" :navigateTo="activeSlide" :speed="600" @page-change="updateCarousel" :touchDrag="false" :mouseDrag="false" :loop="true">
            <slide v-for="(image, index) in items" :key="index">
              <img :src="image.url" :alt="image.title" @click="updateCarousel(index)" />
            </slide>
          </carousel>
        </div>
      </div>
    </client-only>
  </s-section>
</template>

<script>
import { mapGetters } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with gallery slider
 */
export default {
  name: 'SSectionOffers',
  mixins: [section],
  components: {
    SSection,
    SBgImage: () => import('@/components/SBg/SBgImage')
  },
  props: {
    /**
     * Items to display in gallery slider
     */
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      activeSlide: 0
    }
  },
  methods: {
    updateCarousel(page) {
      this.activeSlide = page
    }
  }
}
</script>

<style lang="scss">
.gallery {
  @include fullheight;

  .gallery-fullscreen {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
    z-index: 10;
    font-size: 1.5rem;
  }

  .gallery-carousel {
    @include fullheight;
    position: relative;

    .slide {
      position: relative;
    }

    .VueCarousel-wrapper,
    .VueCarousel-inner {
      height: 100%;
    }

    .VueCarousel-slide {
      @include fullheight;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background-image: linear-gradient(to top, rgba(black, 0.7), rgba(black, 0));
      content: ' ';
      z-index: 1;
      pointer-events: none;
    }
  }

  .gallery-nav {
    position: absolute;
    left: 50%;
    width: 600px;
    bottom: 30px;
    max-width: 100%;
    transform: translate3d(-50%, 0, 0);
    z-index: 3;
    overflow: hidden;

    .gallery-nav-inner {
      width: 160px;
      margin: 0 auto;
    }

    .VueCarousel-wrapper {
      overflow: visible;
    }

    .VueCarousel-slide {
      position: relative;
      cursor: pointer;
      height: 90px;
      background-color: black;
      box-shadow: 0 0 30px 0 rgba(black, 0.4);

      img {
        @include transition-primary;
        opacity: 0.4;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      &.VueCarousel-slide-center img {
        opacity: 1;
      }
    }
  }
}
</style>
