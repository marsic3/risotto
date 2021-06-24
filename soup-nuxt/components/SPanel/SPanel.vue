<template>
  <div :id="id" class="panel" :class="{ 'panel-open': visible, 'panel-collapsible': collapsible }">
    <div class="panel-header">
      <h5>
        <button v-if="collapsible" @click.prevent="visible = !visible">{{ title }}</button>
        <template v-else>{{ title }}</template>
      </h5>
    </div>
    <b-collapse ref="collapse" class="panel-content" :id="id" :visible="visible">
      <div class="panel-content-inner">
        <!-- @slot Content to show in the panel -->
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script>
/**
 * Collapsible panel with header and content
 */
export default {
  name: 'SPanel',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    initialVisible: {
      type: Boolean,
      default: false
    },
    collapsible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false
    }
  },
  created() {
    this.visible = this.initialVisible
  },
  mounted() {
    this.$refs.collapse.$on('hide', () => {
      this.$emit('hidden')
    })
  }
}
</script>

<style lang="scss">
.panel {
  &:not(:last-child) {
    border-bottom: 1px solid $color-line;
  }

  .panel-header {
    margin: 0;
    padding: 1.25rem 0;

    button {
      @include reset(button);
      @include transition-primary;
      position: relative;
      color: inherit;
      display: block;
      width: 100%;
    }

    .s-form-radio {
      margin-bottom: 0;
    }

    > * {
      margin-bottom: 0;
    }
  }

  &.panel-collapsible .panel-header button {
    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      font-size: 0.8em;
      font-family: 'themify-icons';
      content: '\e62a';
      transform: translate3d(0, -50%, 0);
    }

    &:hover {
      color: $color-primary;
    }
  }

  &.panel-open .panel-header button:after {
    transform: translate3d(0, -50%, 0) rotate(180deg);
  }

  .panel-content-inner {
    padding: 1.25rem 0;
    border-top: 1px solid $color-line;
  }
}
</style>
