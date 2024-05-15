<script setup>
import { ref } from "vue";
import { mdiCircleOutline, mdiCircle } from "@mdi/js";
const formData = ref({
  userId: "유저아이디",
  content_id: "관광지 아이디",
  review: {
    rating: null,
    visitDate: null,
    title: null,
    description: null,
    image: null,
  },
});
</script>

<template>
  <v-container>
    <v-form>
      <v-rating
        :v-model="formData.review.rating"
        :empty-icon="mdiCircleOutline"
        :full-icon="mdiCircle"
        hover
      ></v-rating>
    </v-form>
  </v-container>
</template>

<style scoped></style>
