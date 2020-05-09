<template>
  <div class="hello">
    <h1>Karaoke App</h1>
    <input v-on:keyup.enter="search" v-model="query" type="text">
    <button @click="search">submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      query: "",
    }
  },
  mounted() {
    // this.youtube = google.youtube({
    //   version: 'v3',
    //   auth: 'AIzaSyCL8sRQJRmwpbJf5LIjgirA1cT8Y5GkR9E'
    // });
  },
  methods: {
    ...mapActions([ 'get_results']),
    async search() {
      await this.get_results(this.query);
      // const result = await this.youtube.search.list({part: "snippet", type: "video", q: this.query, maxResults: 20});
      // console.log("SERCHING", this.query);
      // console.log("RESULT: ", result.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
