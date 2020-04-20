<template>
	<main id="app">
		<router-view />
	</main>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
#app {
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items: center;
	height: 100vh;
	width: 100%;
	background: black;
}
</style>
