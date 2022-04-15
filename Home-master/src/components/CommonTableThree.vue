<template>
  <div class="common-table-three">
    <el-table
      :data="tableData"
      height="530"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      stripe
    >
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
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="searchComment()">查看评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="padding-left: 420px"
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
  name: "CommonTableThree",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    searchComment() {
      this.$router.push({ path: "/comment" });
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
.common-table-three {
  height: calc(100%+230px);
  // 小bug 窗口大小有问题
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    top: 530px;
    text-align: center;
  }
}
</style>