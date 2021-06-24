<template>
  <b-modal modal-class="modal-video" size="lg" :visible="show" ref="modal" :hide-footer="true" :hide-header="true" @hidden="$emit('hidden')">
    <iframe height="500" :src="`${videoUrl}?autoplay=1`"></iframe>
    <b-button-close @click.prevent="$refs.modal.hide()" />
  </b-modal>
</template>

<script>
/**
 * Modal with YouTube video iframe
 */
export default {
  name: 'SVideoModal',
  props: {
    /**
     * Shows the modal
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * Youtube's video URL
     */
    videoUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.modal-video {
  text-align: center;

  @include media('<=sm') {
    text-align: left;
  }

  .modal-body {
    padding: 0;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    color: white;
  }

  iframe {
    width: 768px;
    max-width: 100%;
    display: block;
  }

  &::before {
    display: inline-block;
    vertical-align: middle;
    content: ' ';
    height: 100%;

    @include media('<=sm') {
      display: none;
    }
  }

  .modal-dialog {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    margin-top: 70px;
  }

  .modal-content {
    background-color: black;
  }
}
</style>
