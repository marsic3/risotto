<template>
  <!-- Blockquote -->
  <blockquote class="blockquote" :class="{ light: odd, 'blockquote-lg': large }">
    <div class="blockquote-content" :class="{ dark: !odd }">
      <s-rate v-if="item.rate" :value="item.rate" size="sm" />
      <p>{{ item.content }}</p>
    </div>
    <footer>
      <img v-if="item.author.thumbnail" :src="item.author.thumbnail.url" alt="" />
      <span class="name"
        >{{ item.author.name }}<span class="text-muted">, {{ item.source }}</span></span
      >
    </footer>
  </blockquote>
</template>

<script>
/**
 * Basic blockquote / review component
 */
export default {
  name: 'SBlockquote',
  components: {
    SRate: () => import('@/components/SRate')
  },
  props: {
    /**
     * Blockquote base data object
     */
    item: {
      type: Object,
      default: () => {}
    },
    /**
     * Makes odd item looks different
     */
    odd: {
      type: Boolean,
      default: false
    },
    /**
     * Increases size of blockquote
     */
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.blockquotes .blockquote:nth-child(2n-1) {
  margin-right: 4.5rem;

  @include media('<=xs') {
    margin-right: 1rem;
  }
}

.blockquotes .blockquote:nth-child(2n) {
  margin-left: 4.5rem;

  @include media('<=xs') {
    margin-left: 1rem;
  }
}

.blockquote {
  position: relative;
  border: 0;
  padding: 0;
  margin-bottom: 1.5rem;

  .blockquote-content {
    position: relative;
    background-color: $color-light;
    padding: 2rem;
    margin-bottom: 0.8rem;

    &::after {
      position: absolute;
      top: 100%;
      right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 20px 20px 0;
      border-color: transparent $color-light transparent transparent;
      content: ' ';
    }

    &.dark {
      background-color: $color-dark;

      &::after {
        border-color: transparent $color-dark transparent transparent;
      }
    }

    p {
      font-size: 1.75rem;
      font-weight: 200;
      line-height: 1.3;
      margin-bottom: 0;
    }
  }

  &.blockquote-lg {
    margin-bottom: 4rem;

    .blockquote-content {
      padding: 3rem;

      p {
        font-size: 3.5rem;
        font-weight: 100;

        @include media('<=sm') {
          font-size: 2.5rem;
          font-weight: 200;
        }
      }
    }
  }

  footer {
    font-size: 0.9rem;
    padding: 0 2rem;
    font-weight: 500;

    &::before {
      display: none;
    }

    img {
      width: 32px;
      border-radius: 50%;
      margin-right: 0.35rem;
    }

    .name {
      white-space: nowrap;
    }
  }
}

.bg-light .blockquote {
  .blockquote-content {
    background-color: white;

    &::after {
      border-color: transparent white transparent transparent;
    }

    &.inverted {
      background-color: $color-dark;

      &::after {
        border-color: transparent $color-dark transparent transparent;
      }
    }
  }
}
</style>

<docs>
Sample data structure for `item` prop:
```json
{
  "content": "It’ was amazing feeling for may belly!",
  "rate": 4,
  "author": {
    "name": "Mark Johnson",
    "source": "Booking",
    "thumbnail": "http://assets.suelo.pl/soup/img/avatars/avatar02.jpg"
  }
}
```
</docs>
