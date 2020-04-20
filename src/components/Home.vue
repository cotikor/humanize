<template>
		<div class="container">
			<Navigation />
			<Playlist />
		</div>

</template>

<script>
import Playlist from "./Playlist";
import Navigation from "./Navigation";

export default {
	name: "Home",
	components: {
		Playlist,
		Navigation,
	},
};
</script>

<style scoped>
.container {
	background: black;
	display: flex;
	flex-flow: column nowrap;
	height: 100vh;
	width: 100%;
}


</style>
