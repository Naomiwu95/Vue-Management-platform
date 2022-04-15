<template>
  <div class="common-table">
    <el-table :data="tableData" height="530" :header-cell-style="{textAlign: 'center'}" :cell-style="{ textAlign: 'center' }" stripe>
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">禁言</el-button>
          <el-button size="mini" @click="handleUnban(scope.row)">解封</el-button>
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
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    handleUnban(row) {
      this.$emit("unban", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less">
.common-table {
  height: calc(100%+230px);
  // 小bug 窗口大小有问题
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    top: 530px;
    right: 20px;
    text-align: center;
  }
}
