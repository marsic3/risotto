<template>
  <!-- Content -->
  <s-content>
    <!-- Page Content -->
    <s-section size="lg" bg="">
      <b-container>
        <b-row>
          <b-col class="text-center">
            <span class="icon icon-xl icon-danger">
              <i class="ti ti-plug"></i>
            </span>
            <h1 class="mb-3">Ooops...</h1>
            <p class="lead text-muted mb-5">It seems that there is an error with API connections. Please try again later...</p>
            <p class="text-xs text-muted">If you are dev please check the console ;)</p>
          </b-col>
        </b-row>
      </b-container>
    </s-section>
  </s-content>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Error500',
  layout: 'simple',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SSection: () => import('@/components/SSection/SSection')
  }
}
</script>
