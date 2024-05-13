<script setup>
defineProps({
  attraction: {
    type: Object,
    reuqired: true,
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    type: {
      type: Number,
    },
    img: {
      type: String,
    },
    location: {
      type: String,
    },
    like: {
      type: Number,
    },
    rating: {
      type: Number,
    },
  },
});
</script>

<template>
  <v-card
    append-icon="mdi-open-in-new"
    class="mx-auto"
    max-width="344"
    :subtitle="attraction.location"
    :title="attraction.title"
  ></v-card>
  <!-- <v-list-item value="widgets">
    <v-list-item-title>{{ attraction.title }}</v-list-item-title>
    <v-list-item-subtitle>
      {{ attraction.location }}
    </v-list-item-subtitle>
    <template v-slot:append="{ isActive }">
      <v-list-item-action start>
        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
      </v-list-item-action>
    </template>
  </v-list-item> -->
</template>

<style scoped></style>
