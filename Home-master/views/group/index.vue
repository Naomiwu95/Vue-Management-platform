<template>
  <div class="manage">
    <div class="manage-header">
        <common-form-two></common-form-two>
    </div>
    <common-table-two
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editGroup"
      @del="delGroup"
      @top="topGroup"
      @ban="banGroup"
      @unban="unbanGroup"
    ></common-table-two>
  </div>
</template>
<script>
import CommonFormTwo from "../../src/components/CommonFormTwo.vue";
import { getGroup } from "../../api/data";
import CommonTableTwo from "../../src/components/CommonTableTwo.vue";
export default {
  name: "group",
  components: {
    CommonFormTwo,
    CommonTableTwo,
  },
  data() {
    return {
      // input: '',
      isShow: false,
      // formLabel: [
      //   {
      //     model: "keyword",
      //     label: "",
      //     type: "input",
      //   },
      // ],
      // searchFrom: {
      //   keyword: "",
      // },
      tableData: [],
      tableLabel: [
        {
          prop: "id",
          label: "小组id",
        },
        {
          prop: "name",
          label: "名称",
        },
        {
          prop: "number",
          label: "成员数量",
        },
        {
          prop: "leader",
          label: "管理员",
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    delGroup(item) {
      this.$confirm("此操作将删除该讨论组,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = item.id;
        this.$http
          .post("/group/del", {
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
    topGroup(item) {
      this.$confirm("此操作将置顶该讨论组,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = item.id;
        this.$http
          .post("/group/top", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "置顶成功",
            });
            this.getList();
          });
      });
    },
    banGroup(item) {
      this.$confirm("此操作将封禁该讨论组,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = item.id;
        this.$http
          .post("/group/ban", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "封禁成功",
            });
            this.getList();
          });
      });
    },
    unbanGroup(item) {
      this.$confirm("此操作将解封该讨论组,是否继续?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = item.id;
        this.$http
          .post("/group/unban", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "解封成功",
            });
            this.getList();
          });
      });
    },
    getList(name = "") {
      this.config.loading = true;
      name ? (this.config.page = 1) : "";
      getGroup({
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
  //justify-content: space-around;
  //align-items: center;
  //text-align: center;
}
</style>