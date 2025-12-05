<template>
  <v-select
    :label="label"
    :items="items"
    :variant="variant || 'outlined'"
    :rounded="rounded || 'xl'"
    bg-color="primary"
  ></v-select>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  items: string[]
  variant?:
    | 'outlined'
    | 'plain'
    | 'filled'
    | 'solo'
    | 'solo-filled'
    | 'solo-inverted'
    | 'underlined'
    | undefined
  color?: string
  rounded?: '0' | 'sm' | 'md' | 'lg' | 'xl' | 'pill' | undefined
}>()
</script>

<style scoped></style>
