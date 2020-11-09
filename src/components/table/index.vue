<template>
  <div>
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
</template>
<script>
export default {};
</script>
<style scoped lang='scss'>
</style>