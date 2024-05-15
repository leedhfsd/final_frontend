<script setup>
import { ref } from "vue";
import { mdiChevronRight } from "@mdi/js";

// 규칙 추가 하기
// https://vuetifyjs.com/en/components/forms/#fast-fail

const userInfo = ref({
  id: null,
  nickname: null,
  password: null,
  checkPassword: null,
  email: null,
  terms: false,
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" title="회원 가입">
      <v-container>
        <v-text-field
          :v-model="userInfo.id"
          color="primary"
          label="아이디"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          :v-model="userInfo.nickname"
          color="primary"
          label="닉네임"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          :v-model="userInfo.email"
          color="primary"
          label="Email"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          :v-model="userInfo.password"
          color="primary"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요.."
          variant="outlined"
        ></v-text-field>

        <v-text-field
          :v-model="userInfo.checkPassword"
          color="primary"
          label="비밀번호 확인"
          placeholder="동일한 비밀번호를 입력해주세요.."
          variant="outlined"
        ></v-text-field>

        <v-checkbox
          :v-model="userInfo.terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          회원가입
          <v-icon :icon="mdiChevronRight" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
