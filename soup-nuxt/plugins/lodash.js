import Vue from 'vue'
import VueLodash from 'vue-lodash'
import chunk from 'lodash/chunk'
import clone from 'lodash/clone'

Vue.use(VueLodash, { name: 'custom', lodash: { chunk, clone } })
