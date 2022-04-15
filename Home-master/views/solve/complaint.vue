<template>
  <div class="manage">
    <common-table-six
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @del="delComplaint"
        @del-no-warning="delComplaintPlus"
    ></common-table-six>
  </div>
</template>

<script>
import {getComplaint} from '../../api/data'
import CommonTableSix from '../../src/components/CommonTableSix.vue'
export default {
  name: "complaint",
  components: {
    CommonTableSix
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
          label:"举报人信用分"
        },
      ],
      config:{
        page:1,
        total:30
      }
    }
  },
  methods: {
    delComplaint(item){
      this.$confirm("您拒绝该用户的举报?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/complaint/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"warning",
            message:"您已拒绝该用户的举报"
          })
          this.getList()
        })

      })

    },
    delComplaintPlus(item){
      this.$confirm("您同意该用户的举报?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/complaint/del-no-warning",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"您已通过该用户的举报"
          })
          this.getList()
        })

      })

    },
    getList(name='') {
       this.config.loading= true
        name?(this.config.page=1):''
      getComplaint({
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