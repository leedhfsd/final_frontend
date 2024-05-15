<script setup>
import { ref } from "vue";
const userInfo = ref({
  id: null,
  password: null,
});
</script>

<template>
  <v-container>
    <v-sheet class="mx-auto" width="300">
      <v-form fast-fail @submit.prevent>
        <v-text-field :v-model="userInfo.id" label="id"></v-text-field>

        <v-text-field
          :v-model="userInfo.password"
          label="password"
        ></v-text-field>

        <v-btn class="mt-2" type="submit" block>로그인</v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<style scoped></style>
