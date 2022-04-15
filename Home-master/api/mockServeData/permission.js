import Mock from 'mockjs'
export default {
  getMenu: config => {
    console.log(config);
    const { username, password } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'home/index'
            },
            {
              path: '/statistics',
              name: 'statistics',
              label: '数据看板',
              icon: 's-data',
              url: 'statistics/index'
            },
            {
              path: '/group',
              name: 'group',
              label: '讨论组管理',
              icon: 'chat-line-round',
              url: 'group/index'
            },
            {
              path: '/content',
              name: 'content',
              label: '帖子管理',
              icon: 's-order',
              url: 'content/index'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/index'
            },
            {
              path: '/manage',
              name: 'manage',
              label: '查看删除列表',
              icon: 'delete',
              url: 'manage/index'
            },
            {
              label: '不良信息治理',
              icon: 'location',
              children: [
                {
                  path: '/complaint',
                  name: 'complaint',
                  label: '举报处理',
                  icon: 'setting',
                  url: 'solve/complaint'
                },
                {
                  path: '/appeal',
                  name: 'appeal',
                  label: '申诉处理',
                  icon: 'setting',
                  url: 'solve/appeal'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'wujie' && password === 'wujie') {
      return {
        code: 20001,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'home/index'
            },
            {
              path: '/group',
              name: 'group',
              label: '讨论组管理',
              icon: 'chat-line-round',
              url: 'group/index'
            },
            {
              path: '/content',
              name: 'content',
              label: '帖子管理',
              icon: 's-order',
              url: 'content/index'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/index'
            },
            {
              path: '/sign',
              name: 'sign',
              label: '审核用户申请',
              icon: 'user',
              url: 'sign/index'
            },
            {
              label: '不良信息治理',
              icon: 'location',
              children: [
                {
                  path: '/complaint',
                  name: 'complaint',
                  label: '举报处理',
                  icon: 'setting',
                  url: 'solve/complaint'
                },
                {
                  path: '/appeal',
                  name: 'appeal',
                  label: '申诉处理',
                  icon: 'setting',
                  url: 'solve/appeal'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}
