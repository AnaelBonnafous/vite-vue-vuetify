<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <VCard elevation="5" class="my-10">
    <VCardTitle>Title</VCardTitle>
    <VCardSubtitle>Subtitle</VCardSubtitle>
    <VCardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </VCardText>
    <VCardActions class="justify-center">
      <VBtn
        variant="flat"
        color="error"
        class="pb-6 pr-6"
        append-icon="mdi-close"
        >Decline</VBtn
      >
      <VBtn
        variant="flat"
        color="success"
        class="pt-16 h-auto"
        append-icon="mdi-check"
        >Accept</VBtn
      >
    </VCardActions>
  </VCard>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>
