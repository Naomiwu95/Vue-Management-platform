// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          新增用户: Mock.Random.float(100, 8000, 0, 0),
          活跃用户: Mock.Random.float(100, 8000, 0, 0),
          新增讨论组: Mock.Random.float(100, 8000, 0, 0),
          活跃讨论组: Mock.Random.float(100, 8000, 0, 0),
          新增帖子: Mock.Random.float(100, 8000, 0, 0),
          新增评论: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '一天内',
            value: 4000
          },
          {
            name: '一周内',
            value: 9000
          },
          {
            name: '一个月内',
            value: 5000
          },
          {
            name: '半年内',
            value: 1000
          },
          {
            name: '半年及以上',
            value: 430
          },
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        orderData: {
          date: ['04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17'],
          data: List
        },
        tableData: [
          {
            name: '讨论组',
            todayGrow: 500,
            monthGrow: 3500,
            totalGrow: 22000
          },
          {
            name: '帖子',
            todayGrow: 300,
            monthGrow: 2200,
            totalGrow: 24000
          },
          {
            name: '评论',
            todayGrow: 800,
            monthGrow: 4500,
            totalGrow: 65000
          },
          {
            name: '用户',
            todayGrow: 1200,
            monthGrow: 6500,
            totalGrow: 45000
          },
        ]
      }
    }
  }
}