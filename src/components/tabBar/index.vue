<template>
  <div class="tab-bar flex-row">
    <div class="left flex-row">
      <img src="../../assets/svg/logo.svg" />
      <div class="line"></div>
      <p class="title">TAAS</p>
    </div>
    <div class="right flex-row">
      <img src="../../assets/svg/combined.svg" />
      <div class="line" style="margin: 0px 15px"></div>
      <div class="bell flex-row">
        <img src="../../assets/svg/bell.svg" alt="" />
        <div class="num" v-show="num != 0">
          <span>{{ num | maxNum }}</span>
        </div>
      </div>
      <div class="avatar flex-row">
        <span>{{ userName | user }}</span>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>切换到member</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 46,
      userName: "handle",
    };
  },
  filters: {
    maxNum: function (val) {
      if (val > 99) {
        return 99;
      } else {
        return val;
      }
    },
    user: function (val) {
      return val.substring(0, 2).toUpperCase();
    },
  },
};
</script>
<style scoped lang='scss'>
span {
  cursor: default;
}
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.tab-bar {
  width: 100%;
  height: 100%;
  justify-content: space-between;
  .left {
    img {
      width: 54px;
      height: 19px;
    }
    .title {
      color: #ffffff;
      font-family: Barlow;
      font-size: 24px;
      font-weight: bold;
      cursor: default;
    }
  }
  .right {
    img {
      cursor: pointer;
    }
    .bell {
      width: 30px;
      height: 30px;
      position: relative;
      justify-content: center;
      cursor: pointer;
    }
    .num {
      color: #ffffff;
      font-family: Roboto;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      width: 17px;
      height: 16px;
      background-color: #e90c5a;
      border-radius: 13px;
      position: absolute;
      top: 0;
      left: 12px;
    }
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: #2c95d7;
      color: #ffffff;
      font-family: Roboto;
      font-size: 14px;
      letter-spacing: 0.5px;
      line-height: 18px;
      justify-content: center;
      margin: 0px 10px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #ffffff;
    }
    .el-icon-arrow-down {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .line {
    background-color: #555555;
    width: 1px;
    height: 30px;
    margin: 0px 25px;
  }
}
</style>
<style lang="scss">
@media screen and (max-width: 500px) {
  .tab-bar {
    .left {
      img {
        width: 45px !important;
        height: 15px !important;
      }
      .title {
        font-size: 17px !important;
      }
    }
    .line {
      margin: 0px 10px !important;
    }
    .right {
      img {
        width: 18px !important;
        height: 18px !important;
      }
    }
  }
}
</style>