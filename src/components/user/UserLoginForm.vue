<script setup>
import { ref } from "vue";
const userInfo = ref({
  id: null,
  password: null,
});
</script>

<template>
  <v-container>
    <v-card class="mx-auto" max-width="344" title="로그인">
      <v-container>
        <v-form>
          <v-text-field
            :v-model="userInfo.id"
            color="primary"
            label="아이디"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            :v-model="userInfo.password"
            color="primary"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요.."
            variant="outlined"
          ></v-text-field>
          <v-btn
            color="primary"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            Sign In
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<style scoped></style>
