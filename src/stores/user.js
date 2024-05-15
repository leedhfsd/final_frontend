import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    userInfo: "아이디",
    nickname: "닉네임",
  });
  const checkDuplication = () => {};
  const joinUser = () => {};
  const login = () => {};
  const logout = () => {};

  return { checkDuplication, joinUser, login, logout };
});
