<template>
  <div class="hello">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: "Dashboard",
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
