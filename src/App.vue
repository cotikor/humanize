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
body {
	scrollbar-width: thin;
  	scrollbar-color: white black;
}
#app {

	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items: center;
	height: 100vh;
	width: 100%;
	background: black;
}
::-webkit-scrollbar {
  width: 10px;              
}

::-webkit-scrollbar-track {
  background: black;        
}

::-webkit-scrollbar-thumb {
  background-color: white;    
  border-radius: 20px;
}
</style>
