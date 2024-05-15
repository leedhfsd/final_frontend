<script setup>
import { ref } from "vue";
import { mdiMagnify } from "@mdi/js";
import router from "./router";
const links = ref([
  {
    menu: "추천 여행지",
    link: "/recommend",
  },
  {
    menu: "일정",
    link: "/planning",
  },
  {
    menu: "리뷰",
    link: "/review",
  },
  {
    menu: "로그인",
    link: "/login",
  },
  {
    menu: "회원 가입",
    link: "/join",
  },
  {
    menu: "테스트용",
    link: "/test",
  },
]);

const navigateToSearch = () => {
  router.push("/");
};
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-btn :to="'/'" class="mr-4" color="">
          <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>
          마이트립
        </v-btn>
        <v-responsive max-width="360">
          <v-text-field
            density="compact"
            label="여행지 검색.."
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
            :prepend-inner-icon="mdiMagnify"
            @click:prepend-inner="navigateToSearch"
          ></v-text-field>
        </v-responsive>

        <v-spacer></v-spacer>
        <v-btn
          v-for="link in links"
          :key="link.menu"
          :to="link.link"
          text
          variant="text"
        >
          {{ link.menu }}
        </v-btn>
        <v-btn>
          <v-avatar class="me-4" color="grey-darken-1" size="32"> </v-avatar>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.v-btn {
  background-color: transparent !important;
  box-shadow: none !important;
  transition: background-color 0.3s ease !important;
}
</style>
