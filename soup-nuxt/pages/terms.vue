<template>
  <!-- Content -->
  <s-content>
    <!-- Page Title -->
    <s-page-title v-if="pageTitle" v-bind="pageTitle" />

    <!-- Page Content -->
    <page-content>
      <b-container>
        <b-row>
          <b-col lg="3">
            <s-sticky-sidebar>
              <!-- Side Navigation -->
              <nav class="pt-4">
                <h5 class="mb-3"><i class="ti ti-align-justify mr-3 text-muted"></i>Pick a content:</h5>
                <ul class="nav nav-vertical">
                  <li class="nav-item" v-for="(chapter, index) in chapters" :key="`chapter_link_${index}`">
                    <a href="#" v-scroll-to="`#${chapter.name.replace(/\s/g, '')}`" class="nav-link">{{ chapter.name }}</a>
                  </li>
                </ul>
              </nav>
            </s-sticky-sidebar>
          </b-col>
          <b-col lg="9">
            <div v-for="(chapter, index) in chapters" :key="`chapter_${index}`" :id="chapter.name.replace(/\s/g, '')" class="pt-4 mb-4">
              <h3>{{ chapter.name }}</h3>
              <div v-html="chapter.content" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </page-content>
  </s-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageFaq',
  components: {
    SContent: () => import('@/components/SLayout/SContent'),
    SPageTitle: () => import('@/components/SLayout/SPageTitle'),
    PageContent: () => import('@/components/SLayout/SPageContent'),
    SStickySidebar: () => import('@/components/SStickySidebar'),
    SPanel: () => import('@/components/SPanel/SPanel')
  },
  async asyncData({ $axios }) {
    return await $axios
      .$get('/pages/terms')
      .then(response => {
        return response
      })
      .catch(() => {
        console.error(`[API] Error while getting /pages/terms`)
        redirect(`/500`)
        return {
          pageTitle: null,
          sections: []
        }
      })
  }
}
</script>
