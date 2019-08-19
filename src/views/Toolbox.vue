<template>
  <div class="toolbox">
    <div class="container">
      <div style="text-align: center;">
        <h2>Toolbox to become better leader</h2>
        <p>Use these tools to put 3 skills into practice as a leader. Trust, Honesty, Context.</p>
        <a href="">Turn tools on/off</a>
      </div>
    </div>
    <div class="container">
      <div class="card-list">
        <div v-for="list in lists">
          <ToolboxCard :title="list.title" :skill="list.skill" :logoUrl="list.logoUrl" :desc="list.desc"/>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import ToolboxCard from '../components/ToolboxCard';
export default {
  components: {
    ToolboxCard
  },
  data: () => ({
    lists: [
      {
        title: 'icebreaker',
        skill: 'trust',
        desc: "Break the ice in your team with 5 fun, non-chesy get-to-know-you questions. It's a great way to kick things off, build trust, and introduce new team members.",
        logoUrl: '../assets/logo1.svg'
      },
      {
        title: 'one-on-one meetings',
        skill: 'honesty',
        desc: "Schedule and prepare for your one-on-one meeting, so you can make the most of that time together. Use different meeting templates, 50+ one-on-one questions, and more.",
        logoUrl: ''
      },
      {
        title: 'heartbeats',
        skill: 'context',
        desc: "save time and get everyone in your team on the same page with a recurring, high-level update.",
        logoUrl: ''
      },
      {
        title: 'culture questions',
        skill: 'honesty',
        desc: "Uncover how your team feels about the work and culture by asking 1 insightful question. Choose from 150+ questions and learn something new (and surprising) on a reguler basis.",
        logoUrl: ''
      },
      {
        title: 'social questions',
        skill: 'trust',
        desc: "Build rapport in your team by asking 1 non-work-related quetions. rotate between 150+ questions and cause people to chuckle, smile, and feel more connected every week.",
        logoUrl: ''
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .container {
    width: 60%;
    margin: 0 auto;
  }
  .toolbox {
    background: #f6f2ef;
  }
  .card-list {
    background: white;
    padding: 20px;
    box-shadow: 1px 2px 2px 2px #d8cdcd;
  }
</style>

