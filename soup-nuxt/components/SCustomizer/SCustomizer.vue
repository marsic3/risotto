<template>
  <div class="customizer" :class="{ visible }" ref="customizer" v-click-outside="close">
    <div class="customizer-body">
      <!-- Color -->
      <div class="customizer-module">
        <h5>Color Scheme</h5>
        <client-only>
          <label>Pick a color</label>
          <div class="customizer-color-picker">
            <v-swatches v-model="themePrototype.themeColor" show-fallback fallback-input-type="color" popover-x="right" :swatches="swatches" :wrapper-style="{ width: '100%' }" :trigger-style="{ width: '100%', 'border-radius': 0 }" :swatch-style="{ 'border-radius': 0 }" />
          </div>
        </client-only>
        <b-form-group>
          <s-form-checkbox id="themeInverted" v-model="themePrototype.themeInverted">Inverted Mode</s-form-checkbox>
        </b-form-group>
      </div>
      <div class="customizer-module">
        <h5>Logo</h5>
        <b-form-group label="Style">
          <b-row>
            <b-col xs="6">
              <b-form-group>
                <s-form-radio id="headerLogoStyleVertical" v-model="themePrototype.headerLogoStyle" value="VERTICAL">Vertical</s-form-radio>
              </b-form-group>
            </b-col>
            <b-col xs="6">
              <b-form-group>
                <s-form-radio id="headerLogoStyleHorizontal" v-model="themePrototype.headerLogoStyle" value="HORIZONTAL">Horizontal</s-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group label="Background">
          <b-row>
            <b-col xs="6">
              <b-form-group>
                <s-form-radio id="headerLogoBackgroundLight" v-model="themePrototype.headerLogoBackground" :disabled="themePrototype.headerLogoStyle === 'HORIZONTAL'" value="LIGHT">Light</s-form-radio>
              </b-form-group>
            </b-col>
            <b-col xs="6">
              <b-form-group>
                <s-form-radio id="headerLogoBackgroundDark" v-model="themePrototype.headerLogoBackground" :disabled="themePrototype.headerLogoStyle === 'HORIZONTAL'" value="DARK">Dark</s-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </div>
      <div class="customizer-module">
        <h5>Other</h5>
        <b-form-group>
          <s-form-checkbox id="themeBodyPadded" v-model="themePrototype.themeBodyPadded">Body Padded <span class="text-muted text-xs ml-1">(only desktop)</span></s-form-checkbox>
        </b-form-group>
      </div>
    </div>
    <button class="customizer-close close" @click.prevent="close"></button>
    <button class="customizer-trigger" @click.prevent="visible = !visible">
      <span><i class="ti ti-settings"></i> {{ !visible ? 'Show Customizer' : 'Hide Customizer' }}</span>
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'

/**
 * Compotent which allows to customize the theme.
 */
export default {
  name: 'SCustomizer',
  components: {
    SButton: () => import('@/components/SButton/SButton'),
    SFormRadio: () => import('@/components/SForm/SFormRadio'),
    SFormCheckbox: () => import('@/components/SForm/SFormCheckbox'),
    VSwatches
  },
  data() {
    return {
      visible: false,
      themePrototype: null,
      swatches: [
        ['#497ece', '#56a75f', '#47a782'],
        ['#d15454', '#58adb7', '#ddae71']
      ]
    }
  },
  watch: {
    themePrototype: {
      handler(value) {
        this.update()
      },
      deep: true
    },
    $route() {
      this.getTheme()
    }
  },
  computed: {
    theme() {
      return this.$store.state.theme
    }
  },
  created() {
    this.themePrototype = this._.clone(this.theme)
  },
  mounted() {
    this.getTheme()
  },
  methods: {
    ...mapMutations('theme', ['SET_STATE']),
    ...mapActions('theme', ['fetchTheme']),
    update() {
      this.SET_STATE(this.themePrototype)
    },
    close() {
      this.visible = false
    },
    getTheme() {
      const themeId = this.$route.query.theme

      if (themeId) {
        this.fetchTheme(themeId).then(() => {
          this.themePrototype = this._.clone(this.theme)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.customizer {
  @include theme-default;
  @include transition-primary;
  @include fullheight;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 910;
  transform: translate3d(-100%, 0, 0);

  &.visible {
    transform: translate3d(0, 0, 0);

    .customizer-trigger {
      background-color: $color-extra-dark;
    }
  }

  &-trigger {
    @include reset(button);
    @include transition-primary;
    position: absolute;
    left: 100%;
    top: 40vh;
    background-color: $color-primary;
    color: white;
    width: 2.5rem;
    padding: 1.5rem 0;
    font-family: $font-secondary;
    text-transform: uppercase;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    > span {
      writing-mode: vertical-rl;
    }

    i {
      margin-right: 0.5rem;
    }

    &:focus,
    &:hover {
      box-shadow: none;
      outline: none;
    }

    &:hover {
      background-color: $color-extra-dark;
    }
  }

  &-body {
    @include fullheight;
    background-color: $color-body;
    padding: 2rem;
    width: 300px;
    max-width: calc(100vw - 40px);
    box-shadow: 0 0 30px 0 rgba(black, 0.1);

    .container {
      display: flex;

      @include media('<=sm') {
        flex-wrap: wrap;
      }
    }
  }

  &-module {
    flex: 1 0 0;

    &:not(:last-child) {
      margin-bottom: 3rem;
    }

    h5 {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid $color-line;
    }
  }

  &-color-picker {
    .vue-swatches {
      width: 120px;
      margin-bottom: 1rem;
    }

    .vue-swatches__trigger__wrapper {
      display: block;
    }

    .vue-swatches__fallback__button {
      border-radius: 0;
      background-color: $color-primary;
      height: 2.75rem;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: $font-secondary;
      font-weight: normal;
      text-transform: uppercase;
      padding: 0 1rem;
    }

    .vue-swatches__container:not(.vue-swatches--inline) {
      border-radius: 0;
      box-shadow: 0 0 30px 0 rgba(black, 0.2);
    }

    .vue-swatches__fallback__wrapper {
      display: flex;
      align-items: center;
    }

    .vue-swatches__fallback__input {
      height: 2.5rem;
      border-radius: 0;
      padding: 0;

      .vue-swatches__fallback__input--wrapper {
        display: block;
      }
    }
  }

  &-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
}
</style>
