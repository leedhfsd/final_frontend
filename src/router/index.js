import HomeView from "@/views/HomeView.vue";
import PlanningView from "@/views/PlanningView.vue";
import RecommendView from "@/views/RecommendView.vue";
import LoginView from "@/views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
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
			component: () => import("../views/PlanningView.vue"),
		},
	],
});

export default router;
