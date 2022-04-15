<template>
  <div class="manage">
    <common-table-se
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @del="delSign"
        @del-no-warning="delSignPlus"
    ></common-table-se>
  </div>
</template>

<script>
import {getSign} from '../../api/data'
import CommonTableSe from '../../src/components/CommonTableSe.vue'
export default {
  name: "sign",
  components: {
    CommonTableSe
  },
  data() {
    return {
      tableData:[],
      tableLabel:[
        {
          prop:"id",
          label:"申请人id"
        },
        {
            prop:"name",
            label:"申请人昵称"
        },
        {
          prop:"signContent",
          label:"申请理由"
        },
        {
          prop:"signCredit",
          label:"申请人信用分"
        },
      ],
      config:{
        page:1,
        total:30
      }
    }
  },
  methods: {
    delSign(item){
      this.$confirm("您拒绝该用户的申请?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/sign/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"warning",
            message:"您已拒绝该用户的申请"
          })
          this.getList()
        })

      })

    },
    delSignPlus(item){
      this.$confirm("您同意该用户的申请?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/sign/del-no-warning",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"您已通过该用户的申请"
          })
          this.getList()
        })

      })

    },
    getList(name='') {
       this.config.loading= true
        name?(this.config.page=1):''
      getSign({
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