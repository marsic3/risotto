<template>
  <!-- Post / Item -->
  <article class="post-item">
    <div class="post-image">
      <nuxt-link :to="{ name: 'blog-id', params: { id: post.id } }">
        <s-bg-image :image="post.media" size="md" />
      </nuxt-link>
    </div>
    <div class="post-content">
      <s-meta :items="[$moment(post.createdAt).format('DD.MM.YYYY'), `by ${post.author}`]" />
      <h4>
        <nuxt-link :to="{ name: 'blog-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
      </h4>
      <p>{{ post.shortDescription }}</p>
      <s-button size="sm" variant="outline-primary" :to="{ name: 'blog-id', params: { id: post.id } }">Read more</s-button>
    </div>
  </article>
</template>

<script>
/**
 * Blog post item
 */
export default {
  name: 'SBlogPost',
  components: {
    SBgImage: () => import('@/components/SBg/SBgImage'),
    SButton: () => import('@/components/SButton/SButton'),
    SMeta: () => import('@/components/SMeta')
  },
  props: {
    /**
     * Post data object
     */
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.post-item {
  display: flex;
  margin-bottom: 2rem;

  @include media('<=sm') {
    display: block;
  }

  .post-image {
    position: relative;
    width: 60%;
    background-size: cover;
    background-position: center center;
    background-color: $color-dark;

    @include media('<=sm') {
      width: 100%;
      height: 300px;
    }
  }

  .post-content {
    position: relative;
    width: 40%;
    background-color: $color-light;
    padding: 4rem;

    @include media('<=sm') {
      width: 100%;
      padding: 40px 30px;
    }

    a:not(:hover) {
      color: inherit;
    }

    h4 {
      margin-bottom: 25px;
    }

    p {
      color: $color-muted;
    }

    *:last-child {
      margin-bottom: 0;
    }
  }

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
}

.bg-light,
.bg-grey {
  .post-item {
    .post-content {
      background-color: $color-body;
    }
  }
}
</style>

<docs>
Sample data structure for `post` prop:
```json
{
  "id": 1,
  "title": "How to create effective webdeisign?",
  "shortDescription": "In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar.",
  "content": "<p class=\"lead\">In hac habitasse platea dictumst. Curabitur vestibulum nulla non efficitur pulvinar. Nulla pulvinar est in eros vehicula lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Aenean rutrum dapibus molestie. Praesent eu nibh a magna maximus semper. Aliquam odio nulla, ornare et imperdiet dignissim, rutrum et felis. Nulla in eros et magna vehicula tincidunt quis eget orci. Quisque in est ac augue bibendum fringilla quis a odio. Donec mollis consectetur commodo. Cras interdum ac nibh id sodales. Phasellus egestas varius pulvinar. Aliquam sit amet felis sit amet purus vestibulum dictum in sit amet justo. Nam blandit arcu porttitor, faucibus purus a, vehicula odio. Pellentesque semper, odio sed commodo iaculis, augue mauris scelerisque mi, in mattis elit justo ut erat. Nulla cursus turpis sollicitudin, eleifend lectus non, tristique nunc. Fusce vitae varius tellus.</p>",
  "media": {
    "type": "image",
    "sizes": {
      "md": "http://assets.suelo.pl/soup/img/posts/post01.jpg",
      "lg": "http://assets.suelo.pl/soup/img/posts/post01_lg.jpg"
    }
  },
  "createdAt": "2020-07-14T11:12:18+0000",
  "author": "Johnatan Doe"
}
```
</docs>
