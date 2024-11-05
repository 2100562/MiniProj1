const {createApp} = Vue;
const {createRouter, createWebHashHistory} = VueRouter;

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/skills", component: Skills},
    {path: "/education", component: Education},
    {path: "/experience", component: Experience}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

createApp({
    data() {
        return {
            name: "Hugo Gonçalves",
            title: "Software Engineer",
            social: {
                github: "https://github.com/2100562",
                linkedin: "https://linkedin.com/in/goncalh"
            },
            contact: {
                email: "2100562@estudante.uab.pt"
            }
        };
    }
}).use(router).mount('#app');
