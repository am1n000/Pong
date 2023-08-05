import LandingPage from "./views/LandingPage.vue"
import LoginPage from "./views/LoginPage.vue"

export const routes = [
    {
        path: "/",
        component: LandingPage,
    },
    {
        path: "/login",
        component: LoginPage,
    },
];

