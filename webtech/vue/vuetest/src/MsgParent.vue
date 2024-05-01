<script setup>
import { ref } from 'vue'
import MsgChild from './MsgChild.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
<MsgChild @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>
