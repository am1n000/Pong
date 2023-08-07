import LandingPage from "./views/LandingPage.vue"
import LoginPage from "./views/LoginPage.vue"
import AccountSettingsPage from "./views/AccountSettingsPage.vue"
import ProfilePage from "./views/ProfilePage.vue"

export const routes = [
    {
        path: "/",
        component: LandingPage,
    },
    {
        path: "/login",
        component: LoginPage,
    },
    {
        path: "/settings",
        component: AccountSettingsPage,
    },
    {
        path: "/profile",
        component: ProfilePage,
    },
];

