<template>
  <button class="btn-play" @click.prevent="$emit('click')"></button>
</template>

<script>
/**
 * Play Button
 */
export default {
  name: 'SButtonPlay'
}
</script>

<style lang="scss">
.btn-play {
  @include reset(button);
  position: relative;
  display: inline-block;
  font-size: 52px;
  width: 92px;
  height: 92px;
  vertical-align: middle;
  border: 2px solid white;
  border-radius: 50%;

  &::before {
    @include transition-primary;
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: 50%;
    background-color: white;
    opacity: 0;
    visibility: hidden;
    content: ' ';
  }

  &::after {
    @include transition-primary;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    filter: blur(0);
    border-style: solid;
    border-width: 8px 0 8px 14px;
    border-color: transparent transparent transparent white;
    content: ' ';
  }

  &:hover,
  &:focus,
  &:active,
  &:focus:active {
    outline: none;

    &::before {
      opacity: 1;
      visibility: visible;
    }

    &::after {
      border-color: transparent transparent transparent $color-dark;
    }
  }
}
</style>
