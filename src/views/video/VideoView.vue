<template>
  <div class="video">
    <h1>This is an 视频 page</h1>
  </div>
</template>
<script>
  export default {
    name:'Video',
    created() {
      console.log('Video create');
    },
    destroyed() {
      console.log('Video destroyed');
    },
    activated() {
      console.log('Video activated');
    },
  }

</script>