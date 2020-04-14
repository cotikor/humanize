<template>
	<div class="container">
		<h1>Latest Talks</h1>

		<a
			v-for="item in playlist"
			:key="item.id"
			:href="`https://youtu.be/${item.snippet.resourceId.videoId}`"
			target="_blank"
			rel="noopener noreferrer"
		>
			<section class="video-container">
				<img :src="item.snippet.thumbnails.default.url" />
				<h1>{{ item.snippet.title }}</h1>
			</section>
		</a>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Playlist",
	data() {
		return {
			playlist: null,
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
				console.log("res", res.data.items);
				this.playlist = res.data.items;
			})
			.catch((err) => {
				console.log({ err });
			});
	},
};
</script>

<style scoped>
.container {
	border: 1px solid red;
	overflow: scroll;
}
.video-container {
	border: 1px solid black;
}
</style>
