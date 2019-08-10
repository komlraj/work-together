<template>
  <div class="home">
    <div class="timeline-bg">
      <div class="text-bg">
        <p class="text">As you start using Know Your Team, here, you'll see a 
          timeline with all the activities.</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "home",
  components: {
    Dashboard
  }
};
</script>

<style scoped>
  .home {
    background-color: #f6f2ef;
    height: 190vh;
  }
  .timeline-bg {
    background: url("../assets/timeline-bg.png") center no-repeat;
    height: 190vh;
  }
  .text-bg {
    background: url("../assets/artical-bg.svg");
    height: 200px;
  }
</style>

