import  Mock  from "mockjs";
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import groupApi from './mockServeData/group'
import contentApi from './mockServeData/content'
import manageApi from './mockServeData/manage'
import appealApi from './mockServeData/appeal'
import complaintApi from './mockServeData/complaint'
import signApi from './mockServeData/sign'
import commentApi from './mockServeData/comment'
import permissionApi from './mockServeData/permission'
//import MockXMLHttpRequest from "mockjs";

Mock.mock('/api/home/getData',homeApi.getStatisticalData)

Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'post',userApi.deleteUser)
Mock.mock(/user\/unban/,'post',userApi.unbanTheUser)
Mock.mock(/group\/getGroup/, 'get',groupApi.getGroupList)
Mock.mock(/group\/del/,'post',groupApi.deleteGroup)
Mock.mock(/group\/top/,'post',groupApi.topTheGroup)
Mock.mock(/group\/ban/,'post',groupApi.banTheGroup)
Mock.mock(/group\/unban/,'post',groupApi.unbanTheGroup)
Mock.mock(/content\/getContent/, 'get',contentApi.getContentList)
Mock.mock(/content\/del/,'post',contentApi.deleteContent)
Mock.mock(/manage\/getManage/, 'get',manageApi.getManageList)
Mock.mock(/manage\/del/,'post',manageApi.deleteManage)
Mock.mock(/appeal\/getAppeal/, 'get',appealApi.getAppealList)
Mock.mock(/appeal\/del/,'post',appealApi.deleteAppeal)
Mock.mock(/appeal\/del-no-warning/,'post',appealApi.deleteAppeal)
Mock.mock(/complaint\/getComplaint/, 'get',complaintApi.getComplaintList)
Mock.mock(/complaint\/del/,'post',complaintApi.deleteComplaint)
Mock.mock(/complaint\/del-no-warning/,'post',complaintApi.deleteComplaint)
Mock.mock(/sign\/getSign/, 'get',signApi.getSignList)
Mock.mock(/sign\/del/,'post',signApi.deleteSign)
Mock.mock(/sign\/del-no-warning/,'post',signApi.deleteSign)
Mock.mock(/comment\/getComment/, 'get',commentApi.getCommentList)
Mock.mock(/comment\/del/,'post',commentApi.deleteComment)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)