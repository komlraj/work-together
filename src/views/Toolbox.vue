<template>
  <div class="toolbox">
    <div>
      <h2>Toolbox to become better leader</h2>
      <p>Use these tools to put 3 skills into practice as a leader. Trust, Honesty, Context.</p>
      <a href="">Turn tools on/off</a>
    </div>
    <div class="card-list">

    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    lists: [
      {
        title: 'icebreaker',
        skill: 'trust',
        desc: "Break the ice in your team with 5 fun, non-chesy get-to-know-you questions. It's a great way to kick things off, build trust, and introduce new team members.",
        logoUrl: ''
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
