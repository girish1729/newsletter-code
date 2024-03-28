<script setup>
import { ref } from 'vue'
import ChildSlot from './ChildSlot.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildSlot></ChildSlot>
</template>
