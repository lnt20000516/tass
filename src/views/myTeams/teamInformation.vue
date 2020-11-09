<template>
  <div class="team-information">
    <div class="top flex-row" @click="toMyTeams">
      <img src="../../assets/svg/return.svg" alt="" />
      <div class="line"></div>
      <p class="team-name">{{ teamName }}</p>
    </div>
    <div class="team-info flex-row">
      <div class="info flex-row">
        <div class="info-item flex-row">
          <img src="../../assets/svg/time.svg" alt="" />
          <div class="text flex-col">
            <p class="lable">Time Remaining</p>
            <p class="value">8 Weeks</p>
          </div>
        </div>
        <div class="info-item flex-row">
          <img src="../../assets/svg/cost.svg" alt="" />
          <div class="text flex-col">
            <p class="lable">Weekly Cost</p>
            <p class="value">$5,000</p>
          </div>
        </div>
        <div class="info-item flex-row">
          <img src="../../assets/svg/rating.svg" alt="" />
          <div class="text flex-col">
            <p class="lable">Weekly Cost</p>
            <el-rate
              v-model="rate"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </div>
        </div>
      </div>
      <div class="btn flex-row">
        <span>REPORT AN ISSUE</span>
      </div>
    </div>
    <div class="member-table">
      <div class="top flex-row">
        <p class="title">ALL TEAM MEMBERS</p>
        <el-input
          v-model="search"
          placeholder="Filter by handle, name, role or skill"
        ></el-input>
      </div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="avatar" width="50">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <el-table-column prop="name" width="180">
            <template slot-scope="scope">
              <div class="member-name flex-col">
                <p class="handle">
                  {{ scope.row.handle }}
                </p>
                <p class="name">
                  {{ scope.row.name }}
                </p>
                
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="delveloper"> </el-table-column>
          <el-table-column prop="date"> </el-table-column>
          <el-table-column prop="cost">
            <template slot-scope="scope"> ${{ scope.row.cost }} </template>
          </el-table-column>
          <el-table-column prop="skill">
            <template slot-scope="scope">
              
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teamName: "TEAM NAME 001",
      rate: 3.7,
      search: "",
      tableData: [
        {
          avatar: require("../../assets/img/avatar (1).jpg"),
          handle: "handle",
          name: "Firstname Lastname",
          delveloper: "Delveloper",
          date: "6/15/20 - 2/15/20",
          cost: 500,
        },
      ],
    };
  },
  methods: {
    toMyTeams() {
      this.$router.push("/myTeams");
    },
  },
};
</script>
<style scoped lang='scss'>
.team-information {
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
  .top {
    cursor: pointer;
    img {
      cursor: pointer;
    }
    .line {
      width: 1px;
      height: 40px;
      background-color: #d4d4d4;
      margin: 0px 20px;
    }
    .team-name {
      color: #2a2a2a;
      font-family: BarlowCondensed;
      font-size: 2em;
      line-height: 38px;
      text-align: left;
      cursor: pointer;
    }
  }
  .team-info {
    width: 95%;
    height: 80px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 20px;
    justify-content: space-between;
    .info {
      width: 50%;
      justify-content: space-between;
      .info-item {
        margin-left: 20px;
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
    .btn {
      background-color: #ef476f;
      border-radius: 20px;
      width: 15%;
      height: 40px;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;
      span {
        color: #fafafb;
        font-family: Roboto;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
      }
    }
  }
  .member-table {
    width: 95%;
    padding: 10px 0px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 20px;
    .top {
      margin: 20px 20px 0px 20px;
      justify-content: space-between;
      p {
        color: #2a2a2a;
        font-family: Barlow;
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        font-weight: 900;
      }
      .el-input {
        width: 30%;
        margin-right: 20px;
      }
    }
    .table {
      margin: 0px 20px;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
      .member-name {
        align-items: flex-start;
        .handle {
          color: #0d61bf;
          font-family: Roboto;
          font-size: 14px;
          line-height: 22px;
          text-align: left;
          font-weight: bold;
        }
        .name {
          color: #2a2a2a;
          font-family: Roboto;
          font-size: 14px;
          line-height: 22px;
          text-align: left;
        }
      }
    }
  }
}
</style>