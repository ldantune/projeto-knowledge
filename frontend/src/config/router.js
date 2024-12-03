import { createRouter, createWebHistory } from "vue-router"; // Importações do Vue Router 3
import HomeComponent from "@/components/home/Home.vue"; // Componente Home
import AdminPages from "@/components/admin/AdminPages.vue"; // Componente AdminPages

// Definição das rotas
const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "adminPages",
    path: "/admin",
    component: AdminPages,
  },
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(), // Usa o modo "history" para URLs limpas
  routes, // Define as rotas
});

export default router; // Exporta o roteador
