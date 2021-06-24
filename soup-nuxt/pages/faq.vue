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
                  <li class="nav-item" v-for="(category, index) in categories" :key="`category_link_${index}`">
                    <a href="#" v-scroll-to="`#${category.name.replace(/\s/g, '')}`" class="nav-link">{{ category.name }}</a>
                  </li>
                </ul>
              </nav>
            </s-sticky-sidebar>
          </b-col>
          <b-col lg="9">
            <div v-for="(category, index) in categories" :key="`category_${index}`" :id="category.name.replace(/\s/g, '')" class="pt-4 mb-4">
              <h3>{{ category.name }}</h3>
              <s-panel v-for="(question, index) in category.questions" :id="`question${index}`" :key="`question_${index}`" :title="question.title">
                {{ question.content }}
              </s-panel>
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
      .$get('/pages/faq')
      .then(response => {
        return response
      })
      .catch(() => {
        console.error(`[API] Error while getting /pages/faq`)
        redirect(`/500`)
        return {
          pageTitle: null,
          sections: []
        }
      })
  }
}
</script>
