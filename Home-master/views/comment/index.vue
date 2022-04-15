<template>
  <div class="manage">
    <div class="manage-header">
      <common-form-five></common-form-five>
    </div>
    <common-table-eight
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @del="delComment"
    ></common-table-eight>
  </div>
</template>

<script>
import { getComment } from "../../api/data";
import CommonFormFive from "../../src/components/CommonFormFive.vue";
import CommonTableEight from "../../src/components/CommonTableEight.vue";
export default {
  name: "comment",
  components: {
    CommonFormFive,
    CommonTableEight,
  },
  data() {
    return {
      tableData: [],
      tableLabel: [
        {
          prop: "id",
          label: "评论id",
        },
        {
          prop: "comment",
          label: "评论内容",
          width: "400",
        },
        {
          prop: "userId",
          label: "评论者id",
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    delComment(item) {
      this.$confirm("此操作将删除该评论,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = item.id;
        this.$http
          .post("/comment/del", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.getList();
          });
      });
    },
    getList(name = "") {
      this.config.loading = true;
      name ? (this.config.page = 1) : "";
      getComment({
        page: this.config.page,
        name,
      }).then(({ data: res }) => {
        console.log(res);
        this.tableData = res.list.map((item) => {
          return item;
        });
        this.config.total = res.count;
        this.config.loading = false;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>