<template>
  <div class="my-teams">
    <p class="title">MY TEAMS</p>
    <div class="teams flex-row">
      <div class="team-item" v-for="i in 5" :key="i">
        <div class="top flex-row">
          <p class="team-name" @click="toInformation">TEAM NAME 001</p>
          <el-dropdown trigger="click" placement="bottom">
            <span class="el-dropdown-link">
              <i> <img src="../../assets/svg/more.svg" /> </i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Team Feedback</el-dropdown-item>
              <el-dropdown-item>Team Invocies</el-dropdown-item>
              <el-dropdown-item>Team Reports</el-dropdown-item>
              <el-dropdown-item divided>Add Team Member</el-dropdown-item>
              <el-dropdown-item divided>Report an Issue</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="middle">
          <div class="middle-item flex-row">
            <img src="../../assets/svg/date.svg" alt="" />
            <div class="text flex-col">
              <p class="lable">Start - End Date</p>
              <p class="value">6/15/20 - 12/15/20</p>
            </div>
          </div>
          <div class="middle-item flex-row">
            <img src="../../assets/svg/time.svg" alt="" />
            <div class="text flex-col">
              <p class="lable">Time Remaining</p>
              <p class="value">8 Weeks</p>
            </div>
          </div>
          <div class="middle-item flex-row">
            <img src="../../assets/svg/cost.svg" alt="" />
            <div class="text flex-col">
              <p class="lable">Weekly Cost</p>
              <p class="value">$5,000</p>
            </div>
          </div>
          <div class="middle-item flex-row">
            <img src="../../assets/svg/teamsLarge.svg" alt="" />
            <div class="text flex-col">
              <p class="lable">Number of Team Members</p>
              <p class="value">10</p>
            </div>
          </div>
        </div>
        <div class="bottom flex-row" @click="toInformation">
          <img v-for="(i, index) in imgList" :key="index" :src="i" />
          <div class="more flex-row"><span>+6</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        require("../../assets/img/avatar (1).jpg"),
        require("../../assets/img/avatar (2).jpg"),
        require("../../assets/img/avatar (3).jpg"),
        require("../../assets/img/avatar (4).jpg"),
      ],
    };
  },
  methods: {
    toInformation() {
      this.$router.push("/teamInformation");
    },
  },
};
</script>
<style scoped lang='scss'>
.my-teams {
  p {
    cursor: default;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    color: #2a2a2a;
    font-family: BarlowCondensed;
    font-size: 2.125em;
    text-align: left;
    margin-bottom: 30px;
  }
  .teams {
    flex-wrap: wrap;
    overflow: hidden;
    padding: 0px 10px;
    .team-item {
      background-color: #ffffff;
      border-radius: 8px;
      width: 20vw;
      height: 45vh;
      padding: 24px 15px 24px 24px;
      margin: 20px;
      .top {
        justify-content: space-between;
        .team-name {
          color: #219174;
          font-family: Barlow;
          font-size: 20px;
          line-height: 24px;
          text-align: left;
          font-weight: bold;
          cursor: pointer;
        }
        img {
          margin-top: -15px;
          cursor: pointer;
        }
      }
      .middle {
        margin: 20px 0px;
        .middle-item {
          margin: 15px 0px;
          .text {
            align-items: flex-start;
            margin-left: 20px;
            .lable {
              color: #555555;
              font-family: Roboto;
              font-size: 12px;
              letter-spacing: 0.5px;
              line-height: 16px;
              text-align: left;
            }
            .value {
              color: #2a2a2a;
              font-family: Roboto;
              font-size: 14px;
              line-height: 22px;
              text-align: left;
            }
          }
        }
      }
      .bottom {
        margin-top: 30px;
        img {
          border-radius: 100%;
          width: 40px;
          height: 40px;
          margin: 0px 5px;
        }
        .more {
          justify-content: center;
          border: 1px solid #0d61bf;
          border-radius: 100%;
          width: 39px;
          height: 39px;
          margin-left: 5px;
          color: #0d61bf;
          font-family: Roboto;
          font-size: 14px;
          line-height: 22px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>