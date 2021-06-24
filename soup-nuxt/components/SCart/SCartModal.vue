<template>
  <b-modal v-if="activeItem" id="cart-modal" :visible="showModal" ref="cartModal" :hide-footer="true" @hidden="RESET_ACTIVE_ITEM()">
    <template slot="modal-header" class="modal-header-lg dark bg-dark">
      <s-bg-image :image="category.image" />
      <h4 class="modal-title">Specify your dish</h4>
      <b-button-close @click.prevent="hideModal" />
    </template>
    <div class="modal-product-details">
      <b-row align-v="center">
        <b-col cols="9">
          <h6 class="mb-0">{{ activeItem.name }}</h6>
          <span class="text-muted" v-if="activeItem.description">{{ activeItem.description }}</span>
        </b-col>
        <b-col cols="3" class="text-lg text-right">{{ getCurrency(activeItem.totalPrice) }}</b-col>
      </b-row>
    </div>
    <div class="modal-body-inner">
      <!-- Panel Details / Options -->
      <s-panel v-if="activeItem.options && activeItem.options.length > 0" title="Options" id="CartModalOptions" :initialVisible="true">
        <b-row class="gutters-sm">
          <b-col :sm="activeItem.options.length > 1 ? 6 : 12" v-for="(option, index) in activeItem.options" :key="`option_${index}`">
            <b-form-group :label="option.name">
              <s-form-select :value="activeItem.activeOptions[index].value" @change="e => SET_ACTIVE_ITEM_OPTIONS({ index, option: e })" :options="option.list" :optionAdapter="item => ({ label: `${item.name} ${item.price > 0 ? `(+${getCurrency(item.price)})` : ''}`, id: item.id, item })" :name="option.name" />
            </b-form-group>
          </b-col>
        </b-row>
      </s-panel>
      <!-- Panel Details / Additions -->
      <s-panel v-if="activeItem.additions && activeItem.additions.length > 0" title="Additions" id="CartModalAdditions" :initialVisible="!activeItem.options || activeItem.options.length === 0">
        <b-row>
          <b-col sm="6" v-for="(additionsCol, colIndex) in additions" :key="colIndex">
            <b-form-group>
              <s-form-checkbox v-for="(addition, index) in additionsCol" :key="index" :checked="_.clone(activeItem.activeAdditions)" :value="addition" adapter="id" @change="e => SET_ACTIVE_ITEM_ADDITIONS(e)" :id="`addition${colIndex}_${index}`"> {{ addition.name }} ({{ getCurrency(addition.price) }}) </s-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
      </s-panel>
      <!-- Panel Details / Other -->
      <s-panel title="Informations" id="CartModalOther" :initialVisible="(!activeItem.options || activeItem.options.length === 0) && (!activeItem.additions || activeItem.additions.length === 0)">
        <b-form-textarea placeholder="Put here any informations or requests..." :value="activeItem.other" @change="value => SET_ACTIVE_ITEM_OTHER(value)"></b-form-textarea>
      </s-panel>
    </div>
    <s-button v-if="modalMode === 'ADD'" class="modal-btn" size="lg" variant="primary" block @click.native="addItem(activeItem)">Add to Cart</s-button>
    <s-button v-else-if="modalMode === 'EDIT'" class="modal-btn" size="lg" variant="primary" block @click.native="updateItem({ ref: activeItem._ref, data: activeItem })">Save</s-button>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

/**
 * "Add to cart" modal which allows to customize the menu product.
 */
export default {
  name: 'SCartModal',
  components: {
    SButton: () => import('@/components/SButton/SButton'),
    SFormRadio: () => import('@/components/SForm/SFormRadio'),
    SFormCheckbox: () => import('@/components/SForm/SFormCheckbox'),
    SFormSelect: () => import('@/components/SForm/SFormSelect'),
    SPanel: () => import('@/components/SPanel'),
    SBgImage: () => import('@/components/SBg/SBgImage')
  },
  computed: {
    ...mapGetters('cart', ['activeItem', 'showModal', 'modalMode']),
    ...mapGetters('menu', ['categoryById']),
    category() {
      return this.categoryById(this.activeItem.categoryId)
    },
    additions() {
      return this._.chunk(this.activeItem.additions, 2)
    }
  },
  methods: {
    ...mapActions('cart', ['hideModal', 'addItem', 'updateItem']),
    ...mapMutations('cart', ['SET_ACTIVE_ITEM_OPTIONS', 'SET_ACTIVE_ITEM_ADDITIONS', 'SET_ACTIVE_ITEM_OTHER', 'RESET_ACTIVE_ITEM'])
  }
}
</script>

<style lang="scss">
#cart-modal {
  .modal-body {
    padding: 0;
  }

  .modal-header {
    padding: 7rem 2rem 1.5rem;
    color: white;
    background-color: $color-dark;
    border-bottom: 0;

    .bg-image {
      opacity: 0.4;
    }
  }

  .modal-body-inner {
    @include theme-default;
    padding: 1.25rem;
    color: $color-dark;
  }

  .modal-btn {
    &:hover,
    &:focus {
      transform: translateY(0);
    }
  }
}
</style>
