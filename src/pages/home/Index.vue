<template>
  <div class="container">
    <h1>{{welcome}}</h1>
    <div class="row">
      <div class="col-3" v-for="(stuff, index) in this.stuffs" :key="stuff.id">
        <a @click="stuffDetails(index)">
          <span>{{stuff.name}}</span>
          <img class="stuff-img" :src="stuff.image">
        </a>
      </div>
    </div>
    <router-link to="/about">
      <span class="btn btn-primary">About me.</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcome: "Welcome to the Vue.js Stuffs!",
      stuffs: [
        {
          id: 41,
          name: "stuff 41",
          image: "/stuffs/abott01.png"
        },
        {
          id: 42,
          name: "stuff 42",
          image: "/stuffs/abott02.png"
        },
        {
          id: 43,
          name: "stuff 43",
          image: "/stuffs/abott03.png"
        }
      ]
    };
  },
  methods: {
    stuffDetails(index) {
      const id = this.stuffs[index].id;
      this.$router.push({
        name: "Stuff",
        params: { id: id }
      });
    }
  }
};
</script>

<style>
.stuff-img {
  width: 50px;
  height: 50px;
}
</style>