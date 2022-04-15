<template>
  <div class="manage">
    <div class="manage-header">
      <common-form-three></common-form-three>
    </div>
    <common-table-three
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @del="delContent"
    ></common-table-three>
  </div>
</template>

<script>
import CommonFormThree from '../../src/components/CommonFormThree.vue'
import {getContent} from '../../api/data'
import CommonTableThree from '../../src/components/CommonTableThree.vue'
export default {
  name: "content",
  components: {
    CommonFormThree,
    CommonTableThree
  },
  data() {
    return {
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
      tableData:[],
      tableLabel:[
        {
          prop:"id",
          label:"帖子id"
        },
        {
          prop:"name",
          label: "所属小组"
        },
        {
          prop:"comment",
          label:"帖子内容",
          width:"350"
        },
        {
          prop:"userId",
          label:"发帖者id"
        },
      ],
      config:{
        page:1,
        total:30
      }
    }
  },
  methods: {
    delContent(item){
      this.$confirm("此操作将删除该帖子,是否继续?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/content/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"删除成功"
          })
          this.getList()
        })

      })

    },
    getList(name='') {
       this.config.loading= true
        name?(this.config.page=1):''
      getContent({
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