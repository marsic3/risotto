<template>
  <s-section class="section-location">
    <b-container>
      <b-row class="align-items-center justify-content-center gutters-lg" :class="{ 'flex-row-reverse': reverse }">
        <b-col lg="4" class="mb-5 mb-lg-0">
          <h4 class="mb-0">{{ location.name }}</h4>
          <span class="text-muted">{{ location.address.street }}, {{ location.address.city }}, {{ location.address.contry }}</span>
          <hr class="hr-md" />
          <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <h6 class="mb-1 text-muted">Phone:</h6>
              {{ location.phone }}
            </div>
            <div class="col-sm-6">
              <h6 class="mb-1 text-muted">E-mail:</h6>
              <a :href="`mailto:${location.email}`">{{ location.email }}</a>
            </div>
          </div>
          <hr class="hr-md" />
          <h6 class="mb-3 text-muted">Open Hours:</h6>
          <b-row v-for="(item, key) in location.openHours" :key="key">
            <b-col xs="6">
              <strong>{{ getDaysRange(item.days) }}</strong>
            </b-col>
            <b-col xs="6">{{ item.openHour }} - {{ item.closeHour }}</b-col>
          </b-row>
        </b-col>
        <b-col lg="5" class="mb-5 mb-lg-0">
          <GmapMap :center="{ lat: location.lat, lng: location.lng }" :zoom="14" map-type-id="terrain" class="map">
            <gmap-custom-marker :marker="{ lat: location.lat, lng: location.lng }" :offsetX="9">
              <img class="logo-light" src="@/static/img/location-pin.png" alt="" width="88" />
            </gmap-custom-marker>
          </GmapMap>
        </b-col>
      </b-row>
    </b-container>
  </s-section>
</template>

<script>
import { mapGetters } from 'vuex'
import SSection from '@/components/SSection'
import section from '../../mixins/section'

/**
 * Section with location address and map
 */
export default {
  name: 'SSectionOffers',
  mixins: [section],
  components: {
    SSection,
    GmapCustomMarker: () => import('vue2-gmap-custom-marker')
  },
  props: {
    /**
     * Location object
     */
    location: {
      type: Object,
      required: true,
      default: () => {}
    },
    /**
     * Moves map to left and content to the right side
     * @type {String}
     */
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.section-location {
  + .section-location {
    padding-top: 0;
  }

  .map {
    width: 100%;
    height: 500px;
    background-color: $color-light;

    @include media('<=md') {
      height: 400px;
    }
  }
}
</style>
