<template>
  <div class="main-menu">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      active-text-color="#2A2A2A"
      @select="selectMenu"
      router
    >
      <div class="close flex-row" v-if="!isCollapse">
        <img
          style="margin-left: 20px"
          src="../../assets/svg/close.svg"
          @click="isCollapse = !isCollapse"
        />
      </div>
      <div class="close flex-row" style="justify-content: center" v-else>
        <img
          src="../../assets/svg/menu.svg"
          @click="isCollapse = !isCollapse"
          style="margin-top: 10px"
        />
      </div>
      <el-menu-item index="myTeams">
        <i v-if="activeMenu == 'myTeams'">
          <img src="../../assets/svg/teams-active.svg" alt="" />
        </i>
        <i v-else>
          <img src="../../assets/svg/teams.svg" alt="" />
        </i>
        <i></i>
        <span slot="title">My Teams</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      activeMenu: "myTeams",
    };
  },
  methods: {
    selectMenu(index) {
      this.activeMenu = index;
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
.main-menu {
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .close {
    width: 100%;
    height: 30px;
    img {
      cursor: pointer;
    }
  }
  i {
    margin-right: 10px;
  }
}
</style>
<style lang="scss">
.is-active {
  border-left: 4px solid #06d6a0;
  font-weight: bold;
}
.el-menu-item {
  font-size: 16px !important;
}
</style>