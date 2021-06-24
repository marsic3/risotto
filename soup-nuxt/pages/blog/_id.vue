<template>
  <!-- Content -->
  <s-content>
    <!-- Section -->
    <s-section bg="light" cover>
      <article class="post-single">
        <div class="post-image">
          <s-bg-image :image="post.media" size="lg" />
        </div>
        <b-container>
          <b-row class="justify-content-center">
            <b-col lg="9">
              <div class="post-content">
                <div class="post-toolbar">
                  <nuxt-link class="post-back" :to="{ name: 'blog' }"><i class="ti ti-arrow-left"></i>Back to list</nuxt-link>
                  <s-meta :items="[$moment(post.created_at).format('DD.MM.YYYY'), `by ${post.author}`]" />
                </div>
                <h1>{{ post.title }}</h1>
                <hr />
                <div class="post-content-inner" v-html="post.content"></div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </article>
    </s-section>
  </s-content>
</template>

<script>
import { mapGetters } from 'vuex'
import animations from '@/mixins/animations'

export default {
  name: 'BlogPost',
  mixins: [animations],
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SSection: () => import('@/components/SSection'),
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SMeta: () => import('@/components/SMeta')
  },
  async asyncData({ $axios, params }) {
    const post = await $axios
      .$get(`/blog/${params.id}`)
      .then(response => {
        return response
      })
      .catch(() => {
        console.error(`[API] Error while getting /blog/${params.id}`)
        return []
      })
    return {
      post: post
    }
  }
}
</script>

<style lang="scss">
.post-single {
  .date {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .post-image {
    position: relative;
    height: 60vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    overflow: hidden;
    background: $color-dark;

    > img {
      border-radius: 3px;
    }
  }

  .post-toolbar {
    display: flex;

    .post-back {
      font-weight: 500;
      font-size: 0.9rem;

      i {
        margin-right: 0.5rem;
      }

      &:not(:hover) {
        color: $color-muted;
      }
    }

    .meta {
      margin-left: auto;
    }
  }

  .post-content {
    background-color: $color-body;
    padding: 5rem;
    z-index: 2;
    margin-top: -10vh;
    margin-bottom: 2rem;

    @include media('<=md') {
      padding: 3rem;
    }

    @include media('<=xs') {
      padding: 1.5rem;
    }

    .post-content-inner {
      white-space: pre-line;
    }
  }

  .post-module {
    margin-top: 3rem;
  }
}
</style>
