<template>
  <div class="common-table-four">
    <el-table :data="tableData" height="600" :header-cell-style="{textAlign: 'center'}" :cell-style="{ textAlign: 'center' }" stripe>
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 200"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleDel(scope.row)">恢复</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="padding-left: 420px;"
      class="pager"
      layout="prev ,pager,next"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      page-size="20"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "CommonTableFour",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    handleDel(row) {
        this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less" scoped>
.common-table-four {
  height: calc(100%-62px);
  // 小bug 窗口大小有问题
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    top: 600;
    right: 20px;
    text-align: center;
  }
}