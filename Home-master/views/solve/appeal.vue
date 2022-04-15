<template>
  <div class="manage">
    <common-table-five
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @del="delAppeal"
        @del-no-warning="delAppealPlus"
    ></common-table-five>
  </div>
</template>

<script>
import {getAppeal} from '../../api/data'
import CommonTableFive from '../../src/components/CommonTableFive.vue'
export default {
  name: "appeal",
  components: {
    CommonTableFive
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
          prop:"appealId",
          label: "申诉人id"
        },
        {
          prop:"appealContent",
          label:"申诉内容"
        },
        {
          prop:"appealCredit",
          label:"申诉人信用分"
        },
      ],
      config:{
        page:1,
        total:30
      }
    }
  },
  methods: {
    delAppeal(item){
      this.$confirm("您拒绝该用户的申诉?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/appeal/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"warning",
            message:"您已拒绝该用户的申诉"
          })
          this.getList()
        })

      })

    },
    delAppealPlus(item){
      this.$confirm("您同意该用户的申诉?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/appeal/del-no-warning",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"您已通过该用户的申诉"
          })
          this.getList()
        })

      })

    },
    getList(name='') {
       this.config.loading= true
        name?(this.config.page=1):''
      getAppeal({
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