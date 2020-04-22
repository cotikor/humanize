<template>
	<div class="main-container">
		<iframe
			id="player"
			type="text/html"
			:src="url + currentVid"
			frameborder="0"
		>
		</iframe>
		<section class="playlist-container">
			<div
				v-for="item in playlist"
				:key="item.id"
				class="video-container"
				v-bind:class="{
					active: item.snippet.resourceId.videoId === currentVid,
				}"
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
			url: `https://www.youtube.com/embed/`,
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
			console.log(this.url);
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
	height: 95vh;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

#player {
	width: 100%;
	height: 50vh;
	border: 1px solid white;
}

.playlist-container {
	overflow-y: scroll;
	border: 1px solid white;
	width: 100%;
}

.video-container {
	border-bottom: 1px solid white;
	border-top: 1px solid white;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}

.video-container:hover h1 {
	font-weight: bold;
}

.video-container h1 {
	width: 60%;
	text-align: left;
	margin: 0 5%;
	font-family: "Special Elite";
	font-size: 14px;
	height: 100%;

}

.video-container img {
	width: 30%;
}

.active {
	opacity: 0.5;
}

/* Mobile Landscape */
@media only screen and (min-width: 576px) {
	.main-container {
		flex-flow: row nowrap;
	}

	#player {
		width: 60%;
		max-height: 100vh;
	}

	.playlist-container {
		width: 40%;
		max-height: 90vh;
	}
}

/* Tablet Portrait */
@media only screen and (min-width: 768px) {
	.main-container {
		flex-flow: column nowrap;
	}

	#player {
		width: 100%;
		max-height: auto;
	}

	.playlist-container {
		width: 100%;
		max-height: 60vh;

	}

	.video-container h1 {
		font-size: 18px;
		max-width: 70%;
	}
		.video-container img {
		font-size: 18px;
		max-width: 30%;
		height: auto;
	}
}

/* Large Mobile Landscape */
@media only screen and (min-width: 810px) {
	.main-container {
		flex-flow: row nowrap;
	}

	#player {
		width: 50%;
		max-height: 100vh;
	}

	.playlist-container {
		width: 50%;
		max-height: 90vh;
	}

		.video-container h1 {
		font-size: 14px;
	}
}


/* Tablet Landscape */
@media only screen and (min-width: 1024px) {
	.main-container {
		flex-flow: column nowrap;

	}
	#player {
		width: 100%;
		max-height: 100vh;
	}

	.playlist-container {
		width: 100%;
		max-height: 45vh;
	}

	.video-container h1 {
		font-size: 24px;
	}
}

/* Desktop */
@media only screen and (min-width: 1300px) {
		.main-container {
		flex-flow: row nowrap;

	}
	
	#player {
		width: 70%;
		height: 90vh;
	}

	.playlist-container {
		width: 30%;
		max-height: 90vh;
	}
}
</style>
