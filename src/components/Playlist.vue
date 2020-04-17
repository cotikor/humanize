<template>
	<div class="container">
		<iframe id="player" type="text/html" :src="url + currentVid" frameborder="0"> </iframe>
		<section
			v-for="item in playlist"
			:key="item.id"
			class="video-container"
			@click="setVideo(item.snippet.resourceId.videoId)"
		>
			<img :src="item.snippet.thumbnails.default.url" />
			<h1>{{ item.snippet.title }}</h1>
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
.container {
	border: 1px solid red;
	overflow-y: scroll;
	background-color: black;
	color: white;
}

#player {
	border: 1px solid white;
	width: 100%;
}
.video-container {
	border-bottom: 1px solid white;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

}
</style>
