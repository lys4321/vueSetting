import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/App.vue'),
	},
	{
		path: '/page2',
		name: 'page2',
		component: () => import('@/components/HelloWorld.vue'),
	},
	{
		path: '/page3',
		name: 'page3',
		component: () => import('@/components/TheWelcome.vue'),
	},
	{
		path: '/page4',
		name: 'page4',
		component: () => import('@/components/WelcomeItem.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
