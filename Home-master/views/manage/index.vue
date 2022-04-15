<template>
  <div class="manage">
    <common-table-four
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @del="delManage"
    ></common-table-four>
  </div>
</template>

<script>
import {getManage} from '../../api/data'
import CommonTableFour from '../../src/components/CommonTableFour.vue'
export default {
  name: "manage",
  components: {
    CommonTableFour
  },
  data() {
    return {
      tableData:[],
      tableLabel:[
        {
          prop:"id",
          label:"举报id"
        },
        {
          prop:"complaintId",
          label: "举报人id"
        },
        {
          prop:"complaintContent",
          label:"举报内容"
        },
        {
          prop:"complaintCredit",
          label:"被举报人信用分"
        },
        {
            prop:"complaintname",
            label:"被举报人名称"
        },
      ],
      config:{
        page:1,
        total:30
      }
    }
  },
  methods: {
    delManage(item){
      this.$confirm("您确认要恢复本条举报?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/manage/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"该举报已被恢复"
          })
          this.getList()
        })

      })

    },
    getList(name='') {
       this.config.loading= true
        name?(this.config.page=1):''
      getManage({
        page:this.config.page,
        name
      }).then(({data:res})=>{
        console.log(res)
        this.tableData=res.list.map(item=>{
          return item
        })
        this.config.total=res.count
        this.config.loading=false
      })
    },
  },
  created(){
    this.getList()
  }
};

</script>
<style lang="less" scoped>
.manage-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>