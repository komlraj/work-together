<template>
  <div class="guides">
    <div class="container">
      <div style="text-align: center;">
        <h2>Guides to become a better leader</h2>
        <p>Our written guides based on data help you develop 3 critical skill as a leader: Trust, context, Honesty.</p>
        <p>When you <a href="">Add your team,</a> they can read the <strong>"employee version"</strong> of these guides.</p>
      </div>
      <div class="guides-card-list">
        <GuideCard v-for="item in publishedArticle" :title="item.title" :desc="item.desc" :author="item.author"/>
        <GuideCard v-for="item in comingArticle" :title="item.title" :desc="item.desc" :author="item.author"/>
      </div>
    </div>
  </div>
</template>

<script>
import GuideCard from '../components/Guidecard';
export default {
  components: {
    GuideCard
  },
  data: ()=> ({
    publishedArticle: [
      {
        title: 'intro',
        desc: 'the know your team methodology',
        author: 'by Claire Lew'
      },
      {
        title: 'trust',
        desc: 'building trust in a team',
        author: 'by Claire Lew' 
      },
      {
        title: 'context',
        desc: 'sharing info a team',
        author: 'by Claire Lew'
      },
      {
        title: 'honesty',
        desc: 'one-on-one meetings',
        author: 'by Claire Lew'
      },
      {
        title: 'honesty',
        desc: 'getting honest feedback',
        author: 'by Claire Lew'
      },
      {
        title: 'honesty',
        desc: 'giving honest feedback',
        author: 'by Claire Lew'
      },
      {
        title: 'continued learning',
        desc: 'foundations of leadership',
        author: 'by Claire Lew'
      },
      {
        title: 'continued learning',
        desc: 'shifting culture',
        author: 'by Claire Lew'
      }
    ],
    comingArticle: [
      {
        title: 'continued learning',
        desc: 'managing remote team',
        author: 'coming soon'
      },
      {
        title: 'continued learning',
        desc: 'managing up',
        author: 'coming soon'
      },
      {
        title: 'context',
        desc: 'setting direction in a team',
        author: 'coming soon'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .guides {
    background: #f6f2ef;
  }
  .container {
    width: 60%;
    margin: 0 auto;
  }
  .guides-card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
</style>

