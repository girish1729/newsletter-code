<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  // ...
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1>Vue is awesome!</h1>
  <h1>Oh no 😢</h1>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
</template>
