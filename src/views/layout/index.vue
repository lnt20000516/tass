<template>
  <el-container :style="{ height: maxHeight + 'px' }">
    <el-header>
      <tab-bar />
    </el-header>
    <el-container>
      <el-aside><main-menu /></el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import tabBar from "../../components/tabBar";
import mainMenu from "../../components/mainMenu";
export default {
  components: {
    tabBar,
    mainMenu,
  },
  computed: {
    screenWH() {
      return this.$store.getters.getScreenWH;
    },
  },
  watch: {
    screenWH(newVal) {
      this.resize();
    },
  },
  mounted() {
    this.resize();
  },
  methods: {
    resize() {
      this.maxHeight = this.screenWH.maxH;
    },
  },
  data() {
    return {
      maxHeight: 0,
    };
  },
};
</script>
<style scoped lang='scss'>
.el-header {
  width: 100%;
  height: 80px;
  background-color: #2a2a2a;
}
.el-aside {
  width: auto !important;
}
.el-main {
  width: 100%;
  height: 100%;
  background-color: #f4f5f6;
}
</style>