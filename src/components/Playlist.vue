<template>
	<div class="main-container">
		<iframe id="player" type="text/html" :src="url + currentVid" frameborder="0"> </iframe>
		<section class="playlist-container">
		<div
			v-for="item in playlist"
			:key="item.id"
			class="video-container"
			v-bind:class="{active: item.snippet.resourceId.videoId === currentVid}"
			@click="setVideo(item.snippet.resourceId.videoId)"
		>
			<img :src="item.snippet.thumbnails.default.url" />
			<h1>{{ item.snippet.title }}</h1>
		</div>
		</section>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Playlist",
	data() {
		return {
			player: null,
			playlist: null,
			currentVid: "25bwiSikRsI",
			url: `https://www.youtube.com/embed/`
			
		};
	},
	mounted() {
		axios({
			method: "get",
			url: "https://www.googleapis.com/youtube/v3/playlistItems",
			params: {
				part: "snippet",
				playlistId: process.env.VUE_APP_PLAYLIST_ID,
				key: process.env.VUE_APP_GOOGLE_API_KEY,
				maxResults: 20,
			},
		})
			.then((res) => {
				this.playlist = res.data.items;
			})
			.catch((err) => {
				console.log({ err });
			});
	},
	methods: {
		setVideo(id) {
			this.currentVid = id;
			console.log(this.url)
		},
	},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&display=swap");

.main-container {
	background-color: black;
	color: white;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	height: 99vh;
}

#player {
	width: 100%;
	height: auto;

}

.playlist-container{
	overflow-y: scroll;
	border: 1px solid white;
}

.video-container {
	border-bottom: 1px solid white;
	border-top: 1px solid white;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	cursor: pointer;
	
}

.video-container:hover h1 {
	font-weight: bold;
}

.video-container h1 {
	width: 60%;
	text-align:left;
	margin: 0 5%;
	font-family: "Special Elite";
	}

.video-container img {
	border-right: 1px solid white;
}

.active {
	opacity: .5;
}


</style>
