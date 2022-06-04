<template>
  <div class="about">
    <h1>This is an 这一天个人介绍 page</h1>
  </div>
</template>

<script>
  export default {
    name:'About',
    created() {
      console.log('About create');
    },
    destroyed() {
      console.log('About destroyed');
    },
    activated() {
      console.log('About activated');
    },
  }

</script>