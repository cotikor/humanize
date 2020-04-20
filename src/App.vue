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
	display:flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items:center;
	height: 100vh;
	width: 100%;
		animation-name: fade-in;
	animation-duration: 4s;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
