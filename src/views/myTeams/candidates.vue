<template>
  <div class="candidates">
    <div class="top flex-row">
      <div class="flex-row" @click="toTeamInformation">
        <img src="../../assets/svg/return.svg" />
        <div class="line"></div>
        <p class="title">UI/UX DESIGNER</p>
      </div>
      <div class="tabs flex-row">
        <p
          class="lable"
          :class="{ active: activeIndex == 1 }"
          @click="activeIndex = 1"
        >
          TO REVIEW (15)
        </p>
        <p
          class="lable"
          :class="{ active: activeIndex == 2 }"
          @click="activeIndex = 2"
        >
          INTERESTED (2)
        </p>
        <p
          class="lable"
          :class="{ active: activeIndex == 3 }"
          @click="activeIndex = 3"
        >
          NOT INTERESTED (3)
        </p>
      </div>
    </div>
    <div class="candidates-main">
      <div class="main-top flex-row">
        <div class="title">CANDIDATES TO REVIEW (15)</div>
        <div class="select">
          <el-select
            v-model="selectValue"
            placeholder="请选择"
            @focus="isFocus = true"
            @blur="isFocus = false"
          >
            <el-option label="Skill Matched" value="Skill Matched"> </el-option>
          </el-select>
          <span class="sort" :class="{ focus: isFocus }">Sort by</span>
        </div>
      </div>
      <div class="table">
        <el-table :data="reviewData" style="width: 100%">
          <el-table-column prop="avatar" width="80">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar" />
            </template>
          </el-table-column>
          <el-table-column prop="handle" width="160">
            <template slot-scope="scope">
              <span class="handle">{{ scope.row.handle }}</span>
            </template>
          </el-table-column>
          <el-table-column width="700">
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
                <div class="skills">
                  Skill 01, Skill 02, Skill 03 Skill 01, Skill 02, Skill 03
                  Skill 01, Skill 02, Skill 03 and
                  <el-popover placement="top-start" trigger="click">
                    <div class="more flex-row">
                      <div class="item">
                        <p class="title">Required Skills</p>
                        <div
                          class="flex-row"
                          v-for="(item, i) in skills"
                          :key="i"
                        >
                          <img
                            src="../../assets/svg/correct.svg"
                            v-if="item.matching"
                          />
                          <img src="../../assets/svg/error.svg" v-else />
                          <p class="skill-name">
                            {{ item.name }}
                          </p>
                        </div>
                      </div>
                      <div class="item">
                        <p class="title">Other Skills</p>
                        <div
                          class="flex-row"
                          v-for="(item, i) in skills"
                          :key="i"
                        >
                          <p class="skill-name">
                            {{ item.name }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <span slot="reference"> 5 more</span>
                  </el-popover>
                </div>
                <div class="flex-row" style="cursor: pointer">
                  <img src="../../assets/svg/resume.svg" />
                  <span class="download">Download Resume</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column min-width="200">
            <template>
              <div class="operation">
                <p class="question">Interested in this candidate?</p>
                <div class="buttons flex-row">
                  <span class="button1 flex-row">NO</span>
                  <span class="button2 flex-row">YES</span>
                </div>
              </div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1,
      isFocus: false,
      selectValue: "Skill Matched",
      reviewData: [
        {
          avatar: require("../../assets/img/avatar (10).jpg"),
          handle: "handle",
          percentage: 100,
        },
      ],
      customColor: "#0AB88A",
      skills: [
        {
          name: "skill1",
          matching: false,
        },
        {
          name: "skill1",
          matching: true,
        },
        {
          name: "skill1",
          matching: true,
        },
        {
          name: "skill1",
          matching: true,
        },
      ],
      currentPage: 1,
      total:5
    };
  },
  methods: {
    toTeamInformation() {
      this.$router.push("/teamInformation");
    },
  },
};
</script>
<style scoped lang='scss'>
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
.candidates {
  .top {
    cursor: pointer;
    justify-content: space-between;
    img {
      cursor: pointer;
    }
    .line {
      width: 1px;
      height: 40px;
      background-color: #d4d4d4;
      margin: 0px 20px;
    }
    .title {
      color: #2a2a2a;
      font-family: BarlowCondensed;
      font-size: 2em;
      line-height: 38px;
      text-align: left;
      cursor: pointer;
    }
    .tabs {
      .lable {
        color: #2a2a2a;
        font-family: Roboto;
        font-size: 12px;
        margin: 0px 20px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        padding: 10px;
      }
      .active {
        background-color: #7f7f7f;
        color: #ffffff;
      }
    }
  }
  .candidates-main {
    width: 95%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-top: 30px;
    margin-left: 20px;
    .main-top {
      justify-content: space-between;
      .title {
        color: #2a2a2a;
        font-size: 16px;
        font-weight: bold;
      }
      .select {
        width: 30%;
        position: relative;
        .el-select {
          width: 100%;
        }
        .sort {
          width: 50px;
          height: 18px;
          text-align: center;
          color: #aaaaaa;
          font-size: 12px;
          background-color: #ffffff;
          position: absolute;
          top: -9px;
          left: 10px;
          cursor: default;
        }
        .focus {
          color: #409eff;
        }
      }
    }
    .table {
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
      .handle {
        color: #0d61bf;
        font-family: Roboto;
        font-size: 14px;
        font-weight: bold;
      }

      .skill {
        align-items: flex-start;
        .pro-text {
          color: #0ab88a;
          font-family: Roboto;
          font-size: 12px;
          letter-spacing: 0.5px;
          line-height: 16px;
          text-align: left;
          margin-left: 5px;
        }
        .skills {
          color: #2a2a2a;
          font-family: Roboto;
          font-size: 14px;
          line-height: 22px;
          span {
            color: #0d61bf;
          }
        }
        .download {
          color: #0d61bf;
          font-family: Roboto;
          font-size: 14px;
          margin-left: 10px;
        }
      }
      .operation {
        .question {
          color: #2a2a2a;
          font-family: Roboto;
          font-size: 14px;
        }
        .buttons {
          color: #229174;
          font-family: Roboto;
          font-size: 12px;
          margin-top: 15px;
          .button1 {
            background-color: #ffffff;
            border: 1px solid #137d60;
            border-radius: 15px;
            width: 49px;
            height: 30px;
            justify-content: center;
            margin-right: 10px;
          }
          .button2 {
            background-color: #137d60;
            border-radius: 15px;
            width: 55px;
            height: 30px;
            justify-content: center;
            color: #ffffff;
          }
        }
      }
    }
  }
}
.more {
  padding: 15px;
  .item {
    margin-right: 15px;
    .title {
      color: #2a2a2a;
      font-family: Roboto;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .skill-name {
      color: #2a2a2a;
      font-family: Roboto;
      font-size: 14px;
      margin-left: 15px;
      margin-bottom: 7px;
    }
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
</style>
<style lang="scss">
.table {
  .el-progress-bar {
    width: 40px;
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
