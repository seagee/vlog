<template>
  <div class="home">
    <h1>This is an 视频 page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

</template>
<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'HomeView',
    created() {
      console.log('home create');
    },
    destroyed() {
      console.log('home destroyed');
    },
    activated() {
      console.log('home activated');
    },
    components: {
      HelloWorld
    },

  }
</script>