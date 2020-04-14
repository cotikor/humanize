<template>
  <div class="container">
    <h1>Latest Talks</h1>
    {{ playlist }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Playlist",
  data() {
    return {
      playlist: null
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/playlistItems",
      params: {
        part: "snippet",
        playlistId: process.env.VUE_APP_PLAYLIST_ID,
        key: process.env.VUE_APP_GOOGLE_API_KEY
      }
    })
      .then(res => {
        console.log("res", res);
        this.playlist = res;
      })
      .catch(err => {
        console.log({ err }, process.env);
      });
  }
};
</script>

<style scoped>
.container {
  border: 1px solid red;
}
</style>
