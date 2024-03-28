<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  // update component state
  count.value++
}
</script>

<template>

<button v-on:click="increment">{{ count }}</button>
Due to its frequent use, v-on also has a shorthand syntax:

<button @click="increment">{{ count }}</button>

</template>
