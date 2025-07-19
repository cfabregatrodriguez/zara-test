// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	// Puedes añadir más rutas aquí más adelante
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
