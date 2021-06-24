<template>
  <s-section :theme="theme" :bg="bg" :class="[extend, { extended: !!extend }]">
    <div class="container" :class="[`bg-${bg}`]">
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in items" :key="index">
          <s-feature :icon="item.icon" :title="item.title" :description="item.description" />
        </div>
      </div>
    </div>
  </s-section>
</template>

<script>
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with features with icons
 */
export default {
  name: 'SSectionFeatures',
  mixins: [section],
  components: {
    SSection,
    SFeature: () => import('@/components/SFeature')
  },
  props: {
    /**
     * Items to display
     * @type {Array}
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Extends the background to the left or right side
     * @values true, false
     */
    extend: {
      type: [Boolean, String],
      default: false
    }
  }
}
</script>

<docs>
This is recommended data structure for `items` prop.
```json
[
  {
    "title": "Pick a dish",
    "description": "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    "icon": "shopping-cart"
  },
  {
    "title": "Make a payment",
    "description": "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    "icon": "wallet"
  },
  {
    "title": "Recieve your food!",
    "description": "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    "icon": "package"
  }
]
```
Single feature item is a [SFeature](../SFeature/SFeature.html) component.
</docs>
