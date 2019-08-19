<template>
  <div class="card">
    <div>
      <img :src="logoUrl" class="card-logo"/>
    </div>
    <div class="card-desc">
      <div class="card-header">
        <span class="card-title">{{title}}</span>
        <span class="skill">{{skill}}</span>
      </div>
      <div class="card-body">
        <p class="card-text">{{desc}}</p>
        <span class="card-arrow"> <strong> > </strong></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'skill', 'desc', 'logoUrl']
}
</script>

<style lang="scss" scoped>
  .card-logo {
    width: 100px;
    height: 100px;
  }
  .card {
    display: flex;
    justify-items: center;
    box-shadow: 2px 1px 2px 2px #fbfbfb;
    border: 0.5px solid #ebe2e2;
    margin-bottom: 5px;
    padding: 20px;
  }
  .card-body {
    display: flex;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
  }
</style>

