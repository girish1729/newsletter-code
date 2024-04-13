<!--
Modal component with customizable slots and CSS transitions.
-->

<script setup>
import modal from './ModalChild.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Modal test from vue</h3>
      </template>
    </modal>
  </Teleport>
</template>
