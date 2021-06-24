<template>
  <s-section class="pb-0" protrude :class="{ 'pt-0': !title, 'pull-up-20': !title }" bg="transparent">
    <b-container>
      <h1 v-if="title" class="section-header">{{ title }}</h1>
    </b-container>
    <client-only>
      <carousel
        class="section-carousel carousel inner-controls"
        :perPage="1"
        :perPageCustom="[
          [560, 1],
          [768, 2],
          [1024, 3]
        ]"
        paginationActiveColor="white"
        paginationColor="white"
        :paginationSize="8"
        :navigationEnabled="true"
        navigationPrevLabel=""
        navigationNextLabel=""
      >
        <!-- Menu Sample -->
        <slide class="carousel-slide" v-for="(item, index) in itemsToShow" :key="index">
          <nuxt-link :to="{ path: '/menu-list-navigation', hash: item.name.replace(/\s/g, '') }">
            <s-bg-image class="image" :image="item.image" />
            <h3 class="title">{{ item.name }}</h3>
          </nuxt-link>
        </slide>
      </carousel>
    </client-only>
  </s-section>
</template>

<script>
import { mapGetters } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with menu categories displayed in carousel
 */
export default {
  name: 'SSectionCategories',
  mixins: [section],
  components: {
    SSection,
    SBgImage: () => import('@/components/SBg/SBgImage')
  },
  props: {
    /**
     * Sets section title
     */
    title: {
      type: [String, Boolean]
    },
    /**
     * Sets categories to display in carousel
     */
    items: {
      type: Array
    }
  },
  data() {
    return {
      itemsToShow: []
    }
  },
  computed: {
    ...mapGetters('menu', ['categories'])
  },
  created() {
    this.itemsToShow = this.items || this.categories
  }
}
</script>

<style lang="scss">
.section-carousel {
  margin-bottom: 0;

  .VueCarousel-wrapper {
    padding-bottom: 10px;
    margin-bottom: -10px;
  }

  .carousel-slide {
    position: relative;
    background-color: $color-dark;
    overflow: hidden;
    height: 500px;

    &:nth-child(2n + 1) {
      top: 10px;
    }

    .image {
      transition: all 1.5s ease-out;

      &::after {
        @include fill-parent;
        background-image: linear-gradient(to top, rgba(black, 0.6), rgba(black, 0));
      }
    }

    .title {
      position: absolute;
      bottom: 4.5rem;
      right: 4.5rem;
      color: white;
      font-size: 5.5rem;
      font-weight: 100;
      margin-bottom: 0;

      @include media('<=lg') {
        font-size: 4rem;
      }
    }

    &:hover {
      .image {
        transform: scale(1.05);
      }
    }
  }

  .slick-list {
    overflow: visible;
  }
}
</style>

<docs>
This is data structure for `items` prop.
```json
[
  {
    "id": 1,
    "name": "Burgers",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg"
  },
  {
    "id": 2,
    "name": "Pizza",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-pizza.jpg"
  },
  {
    "id": 3,
    "name": "Sushi",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-sushi.jpg"
  },
  {
    "id": 4,
    "name": "Pasta",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-pasta.jpg"
  },
  {
    "id": 5,
    "name": "Desserts",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-desserts.jpg"
  },
  {
    "id": 6,
    "name": "Drinks",
    "image": "http://assets.suelo.pl/soup/img/photos/menu-title-drinks.jpg"
  }
]
```
Single feature item is a [SFeature](../SFeature/SFeature.html) component.
</docs>
