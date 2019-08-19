<template>
  <div class="header-container">
    <div class="header">
      <nav>
        <router-link class="" to="/timeline">
          <img class="logo" src="../assets/icon.svg"/>
        </router-link>
      </nav>
      <nav>
        <router-link to="/timeline">Timeline</router-link>  |
        <router-link to="/toolbox">Toolbox</router-link>  |
        <router-link to="/guides">Guides</router-link>  |
        <router-link to="/toolbox">Community</router-link>  |
        <router-link to="/toolbox">Me</router-link>  |
        <router-link to="/toolbox">Team</router-link> 
      </nav>
      <nav>
        <span class="user-logo" @click="handleClick">KR</span>
      </nav>
    </div>
    <div class="menu" v-if="toggle">
      <ul>
        <li>Organization</li>
        <li>Name & logo</li>
        <li>Team's email & Slack setting</li>
        <li>Personal</li>
        <li>Avatar, password, etc</li>
        <li>Your email setting</li>
        <li>Help</li>
        <li>Sign out</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header-container {
    position: relative;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 30px;
    width: 30px;
  }
  .select {
    width: 20px;
  }
  .user-logo {
    display: inline-block;
    padding: 5px;
    background: purple;
    border-radius: 45%;
    cursor: pointer;
  }
  .menu {
    position: absolute;
    right: 2%;
    display: inline-block;
    border: 1px solid rgb(201, 197, 197);
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 #c8c1c1;
    background: rgb(255, 254, 250);
    & ul {
      padding: 0;
      & li {
        list-style: none;
        padding: 5px;
        &:hover {
          cursor: pointer;
          background: #8080801c;
        }
      }
    }
  }
</style>

<script>
export default {
  data: () => ({
    toggle: false
  }),
  methods: {
    handleClick() {
      this.toggle = !this.toggle
    }
  }
}
</script>
