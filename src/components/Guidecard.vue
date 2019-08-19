<template>
  <div class="guide-card">
    <hr/>
    <span>{{title}}</span>
    <p>{{desc}}</p>
    <hr />
    <p>{{author}}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'author']
}
</script>

<style lang="scss" scoped>
  .guide-card {
    background: white;
    padding: 15px;
  }
</style>

