<template>
  <div class="manage">
    <div class="manage-header">
      <common-form-four></common-form-four>
    </div>
    <common-table
    :tableData="tableData"
    :tableLabel="tableLabel"
    :config="config"
    @changePage="getList()"
    @unban="unbanUser"
    @del="delUser"
    ></common-table>
  </div>
</template>
<script>
import CommonFormFour from '../../src/components/CommonFormFour.vue'
import {getUser} from '../../api/data'
import CommonTable from '../../src/components/CommonTable.vue'
export default {
  name: "User",
  components: {
    CommonFormFour,
    CommonTable
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      operateFormLabel: [
        {
          model: "id",
          label: "id",
          type: "input",
        },
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "group",
          label: "所在讨论组",
          type: "input",
        },
        {
          model: "power",
          label: "权限",
          type: "select",
          opts: [
            {
              label: "有权",
              value: 1,
            },
            {
              label: "无权",
              value: 0,
            },
          ],          
        }
      ],
      operateForm: {
        id: "",
        name: "",
        group: "",
        age: "",
        birth: "",
        sex: "",
        power: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchFrom: {
        keyword: "",
      },
      tableData:[],
      tableLabel:[
        {
          prop:"id",
          label:"用户id"
        },
        {
          prop:"name",
          label:"姓名"
        },
        {
          prop:"age",
          label:"年龄"
        },
        {
          prop:"sexLabel",
          label:"性别"
        },
        {
          prop:"birth",
          label:"出生日期",
          width:200
        },
        {
          prop:"group",
          label:"所在讨论组",
          width:200
        },
        {
          prop:"powerLabel",
          label:"权限",
        },
      ],
      config:{
        page:1,
        total:30
      }

    }
  },
  methods: {
    confirm() {
        if(this.operateType === 'edit'){
            this.$http.post('user/edit',this.operateForm).then(res=>{
                console.log(res)
                this.isShow=false
                this.getList()
            })
        }else{
             this.$http.post('user/add',this.operateForm).then(res=>{
                 console.log(res)
                this.isShow=false
                this.getList()
            })
        }
    },
    addUser() {
      (this.isShow = true),
        (this.operateType = "add"),
        (this.operateForm = {
          id: "",
          name: "",
          group: "",
          age: "",
          birth: "",
          sex: "",
          power: "",
        });
    },
    unbanUser(item){
      this.$confirm("此操作将解封该用户,是否继续?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/user/unban",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"解封成功"
          })
          this.getList()
        })

      })

    },
    delUser(item){
      this.$confirm("此操作将禁言该用户,是否继续?","提示",{
        confirmButtonText:"确认",
        cancelButtonText:'取消',
        type:"warning"
      }).then(()=>{
        const id =item.id
        this.$http.post("/user/del",{
          params:{id}
        }).then(()=>{
          this.$message({
            type:"success",
            message:"禁言成功"
          })
          this.getList()
        })

      })

    },
    getList(name='') {
       this.config.loading= true
        name?(this.config.page=1):''
      getUser({
        page:this.config.page,
        name
      }).then(({data:res})=>{
        console.log(res)
        this.tableData=res.list.map(item=>{
          item.sexLabel=item.sex === 0 ? "女" : "男"
          item.powerLabel=item.label === 0 ? "有权" : "无权"
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
