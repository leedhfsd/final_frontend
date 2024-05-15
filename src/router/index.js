import HomeView from "@/views/HomeView.vue";
import PlanningListView from "@/views/planning/PlanningListView.vue";
import RecommendView from "@/views/RecommendView.vue";
import LoginView from "@/views/user/LoginView.vue";
import JoinView from "@/views/user/JoinView.vue";
import ReviewView from "@/views/review/ReviewView.vue";
import TestView from "@/views/TestView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 테스트 path는 반드시 추후에 삭제해야함
    { path: "/test", name: "test", component: TestView },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/join",
      name: "join",
      component: JoinView,
    },
    {
      path: "/recommend",
      name: "recommend",
      component: RecommendView,
    },
    {
      path: "/review",
      name: "review",
      component: ReviewView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/planning",
      name: "planning",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/planning/PlanningView.vue"),
      children: [
        {
          path: "/planning/:id",
          name: "PlanningListView",
        },
      ],
    },
  ],
});

export default router;
