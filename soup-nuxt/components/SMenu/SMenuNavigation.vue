<template>
  <s-sticky-sidebar>
    <nav class="menu-navigation">
      <ul class="nav nav-menu bg-dark dark">
        <!-- @slot Menu navigation `<li></li>` elements -->
        <slot />
      </ul>
    </nav>
  </s-sticky-sidebar>
</template>

<script>
/**
 * Sticky Menu local navigation.
 */
export default {
  name: 'SMenuNavigation',
  components: {
    SStickySidebar: () => import('@/components/SStickySidebar')
  }
}
</script>
