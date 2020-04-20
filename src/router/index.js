import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Carousel from "@/components/Carousel";
import Playlist from "@/components/Playlist";


Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/home",
			name: "Home",
			component: Home,
		},
		{
			path: "/",
			name: "Intro",
			component: Carousel,
		},

	],
});
