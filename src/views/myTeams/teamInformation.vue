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
          <el-table-column prop="avatar" width="80" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <el-table-column prop="name" width="200" align="center">
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
          <el-table-column prop="delveloper" width="100" align="center">
          </el-table-column>
          <el-table-column prop="date" width="150" align="center">
          </el-table-column>
          <el-table-column prop="cost" width="100" align="center">
            <template slot-scope="scope"> ${{ scope.row.cost }} </template>
          </el-table-column>
          <el-table-column prop="skill" width="270" align="center">
            <template slot-scope="scope">
              <div class="flex-col skill">
                <div class="flex-row">
                  <el-progress
                    :percentage="scope.row.percentage"
                    :color="customColor"
                    :show-text="false"
                    :stroke-width="8"
                  ></el-progress>
                  <p class="pro-text">
                    {{ scope.row.percentage }}% SKILL MATCHED
                  </p>
                </div>
                <p class="skills">
                  Skill 01, Skill 02, Skill 03 and <span> 5 more</span>
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="star" width="80" align="center">
            <template slot-scope="scope">
              <div class="flex-row">
                <img src="../../assets/svg/star.svg" alt="" />
                <span style="margin-left: 5px; font-weight: bold">
                  {{ scope.row.star }}</span
                >
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" min-width="150">
            <template slot-scope="scope">
              <el-dropdown trigger="click" @command="handleCommand">
                <el-button type="primary">
                  ACTIONS<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    icon="el-icon-delete"
                    :command="composeValue('delete', scope)"
                    >Delete</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination flex-row">
        <el-dropdown trigger="click">
          <el-button type="primary"> show more </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>5条/页</el-dropdown-item>
            <el-dropdown-item>10条/页</el-dropdown-item>
            <el-dropdown-item>15条/页</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="pagButton flex-row">
          <div
            class="pag-item flex-row"
            :class="{ active: currentPage == i }"
            v-for="i in total"
            :key="i"
            @click="currentPage = i"
          >
            <span>{{ i }}</span>
          </div>
          <div
            class="pag-item flex-row"
            style="border-radius: 15px; width: 74px; height: 30px"
          >
            <span class="flex-row"
              >NEXT <img src="../../assets/svg/right.svg" alt=""
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="member-table">
      <div class="top flex-row">
        <p class="title">OPEN POSITIONS</p>
      </div>
      <div class="table">
        <el-table :data="developerData" style="width: 100%">
          <el-table-column prop="name" width="400" align="center">
            <template>
              <div class="flex-col skill">
                <p>Java Developer</p>
                <p class="skills">
                  Skill 01, Skill 02, Skill 03 and <span> 5 more</span>
                </p>
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="date" width="150" align="center">
          </el-table-column>
          <el-table-column prop="cost" width="100" align="center">
            <template slot-scope="scope"> ${{ scope.row.cost }} </template>
          </el-table-column>
          <el-table-column prop="introduce" width="100" align="center">
          </el-table-column>
          <el-table-column align="center" min-width="150">
            <template>
              <el-button type="primary"> SELECT CANDIDATES </el-button>
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
      customColor: "#0AB88A",
      tableData: [
        {
          avatar: require("../../assets/img/avatar (1).jpg"),
          handle: "handle",
          name: "Firstname Lastname",
          delveloper: "Delveloper",
          date: "6/15/20 - 2/15/20",
          cost: 500,
          percentage: 80,
          star: 4.5,
        },
        {
          avatar: require("../../assets/img/avatar (1).jpg"),
          handle: "handle",
          name: "Firstname Lastname",
          delveloper: "Delveloper",
          date: "6/15/20 - 2/15/20",
          cost: 500,
          percentage: 80,
          star: 4.5,
        },
        {
          avatar: require("../../assets/img/avatar (1).jpg"),
          handle: "handle",
          name: "Firstname Lastname",
          delveloper: "Delveloper",
          date: "6/15/20 - 2/15/20",
          cost: 500,
          percentage: 80,
          star: 4.5,
        },
      ],
      developerData: [
        {
          date: "6/15/20 - 2/15/20",
          cost: 500,
          introduce: "Sourcing",
        },
      ],
      total: 3,
      currentPage: 1,
    };
  },
  methods: {
    toMyTeams() {
      this.$router.push("/myTeams");
    },
    handleCommand(command) {
      console.log(command);
    },
    composeValue(item, row) {
      return {
        action: item,
        row: row,
      };
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
      .pro-text {
        color: #0ab88a;
        font-family: Roboto;
        font-size: 12px;
        letter-spacing: 0.5px;
        line-height: 16px;
        text-align: left;
        margin-left: 5px;
      }
      .skill {
        align-items: flex-start;
        .skills {
          color: #2a2a2a;
          font-family: Roboto;
          font-size: 14px;
          line-height: 22px;
          span {
            color: #0d61bf;
          }
        }
      }
      .actions {
        background-color: #137d60;
        border-radius: 15px;
        width: 107px;
        height: 30px;
        color: #ffffff;
        font-family: Roboto;
        font-size: 12px;
        justify-content: center;
        cursor: pointer;
      }
    }
    .pagination {
      margin: 0px 20px 15px 20px;
      justify-content: space-between;
      .pag-item {
        background-color: #ffffff;
        border: 1px solid #137d60;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        justify-content: center;
        color: #229174;
        font-family: Roboto;
        font-size: 12px;
        font-weight: bold;
        margin: 0px 5px;
        cursor: pointer;
      }
      .active {
        border: 1px solid #2a2a2a;
        color: #2a2a2a;
      }
    }
  }
  .open-positions {
    width: 95%;
    padding: 10px 0px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 20px;
  }
}
</style>
<style lang="scss">
.table {
  .el-progress-bar {
    width: 40px;
  }
  .el-button--primary {
    background-color: #137d60;
    border-radius: 15px;
    // width: 107px;
    // height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // padding: 0;
    border: 0;
    justify-content: center;
    color: #ffffff;
    font-family: Roboto;
    font-size: 12px;
  }
  .el-table {
    margin-bottom: 20px;
  }
}
.pagination {
  .el-button--primary {
    background-color: #ffffff;
    border-radius: 15px;
    width: 109px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    border: 1px solid #137d60;
    justify-content: center;
    color: #229174;
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>