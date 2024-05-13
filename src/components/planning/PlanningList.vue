<script setup>
import PlanningListItem from "./PlanningListItem.vue";
import { useAttractionStore } from "@/stores/attraction";
const store = useAttractionStore();
const attractions = store.attractions;
</script>

<template>
  <div>
    <planning-list-item
      v-for="attraction in attractions"
      :key="attraction.id"
      :attraction="attraction"
    />
  </div>
</template>

<style scoped></style>
