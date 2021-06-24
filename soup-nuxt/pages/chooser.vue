<template>
  <!-- Content -->
  <s-content>
    <!-- Hero -->
    <s-section size="lg" bg="dark" theme="dark">
      <s-bg-image :image="{ url: 'http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg' }" />
      <b-container>
        <b-row class="justify-content-center text-center">
          <b-col md="8">
            <img src="http://assets.suelo.pl/soup/img/logo-light.svg" width="95" class="mb-5" alt="" />
            <h4 class="mb-5">NuxtJS Restaurant with Online Ordering System Template</h4>
            <s-button size="lg" v-scroll-to="'#concepts'" variant="outline-primary" class="mb-3">Pick a Concept</s-button><br />
            <s-button variant="link" to="/docs/">Browse Documentation</s-button>
          </b-col>
        </b-row>
      </b-container>
    </s-section>
    <!-- Concepts -->
    <s-section id="concepts" bg="light" theme="light">
      <b-container>
        <h4 class="text-center mb-5">Pick a concept</h4>
        <b-row>
          <b-col sm="6" v-for="(item, index) in concepts" :key="index">
            <!-- Image Box -->
            <div class="image-box">
              <div class="image">
                <nuxt-link :to="item.href"><img :src="item.img" alt=""/></nuxt-link>
              </div>
              <div class="title">
                <nuxt-link :to="item.href">
                  <h5 class="mb-0">{{ item.name }}</h5>
                  <span class="text-muted">{{ item.caption }}</span>
                </nuxt-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </s-section>
  </s-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Chooser',
  layout: 'simple',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SButton: () => import('@/components/SButton/SButton'),
    SSection: () => import('@/components/SSection/SSection')
  },
  asyncData() {
    return {
      concepts: [
        {
          img: './img/screens/index-basic.jpg',
          name: 'Basic',
          caption: 'Basic Hero, Vertical Header',
          href: '/index'
        },
        {
          img: './img/screens/index-video.jpg',
          name: 'Video',
          caption: 'Video Hero, Horizontal Header',
          href: '/index-video?theme=2'
        },
        {
          img: './img/screens/index-slider.jpg',
          name: 'Slider',
          caption: 'Hero Slider, Horizontal Header',
          href: '/index-slider?theme=3'
        },
        {
          img: './img/screens/index-burgers.jpg',
          name: 'Burgers',
          caption: 'Simple Hero, Vertical Header',
          href: '/index-burgers?theme=4'
        }
      ]
    }
  }
}
</script>
