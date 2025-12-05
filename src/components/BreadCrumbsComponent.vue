<template>
  <v-breadcrumbs :items="breadcrumbs" @click:item="navigate" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
  return route.matched
    .filter((r) => r.meta?.breadcrumb !== false)
    .map((r) => {
      const breadcrumbMeta = r.meta?.breadcrumb
      const nameFallback = typeof r.name === 'string' ? r.name : r.path
      const title = typeof breadcrumbMeta === 'string' ? breadcrumbMeta : nameFallback

      return {
        title,
        href: r.path,
      }
    })
})

// make navigate accept optional href and guard before pushing
function navigate(item: { href?: string }) {
  if (item.href) {
    router.push(item.href)
  }
}
</script>
