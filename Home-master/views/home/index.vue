<template>
  <div id="Welcome" class="br-5 bs-10">
    <div class="content no-select">
      <div class="title animate__animated animate__lightSpeedInLeft">
        欢迎登录
      </div>
      <div class="sub_title animate__animated animate__lightSpeedInRight">
        豆瓣酱管理端平台
      </div>
      <!-- <div class="desc animate__animated animate__tada">
        - 您是：{{ getUserpower }}
      </div> -->
    </div>
    <div class="pic animate__animated animate__heartBeat"></div>
  </div>
</template>

<script>
import { getMenu } from "../../api/data";

export default {
  name: "home",
  methods: {
   getUserpower() {
      getMenu(this.form).then(({ data: res }) => {
        console.log(res, "res");
        if (res.code === 20000) {
          return {
            userPower: "社区管理员",
          };
        } else {
          return {
            userPower: "小组管理员",
          };
        }
      });
    }
  },
};
</script>

<style lang='less' scoped>
#Welcome {
  margin-top: 120px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgColor1);
  .content {
    line-height: 1.5;
    .title {
      font-size: 28px;
      color: var(--color1);
    }
    .sub_title {
      color: var(--color2);
      font-size: 36px;
    }
    .desc {
      padding-left: 15px;
      font-size: 20px;
      color: var(--color4);
    }
  }
  .pic {
    background-image: url("../../src/assets/images/welcome.svg");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 400px;
    height: 400px;
    margin: 0;
  }
}

@media screen and (max-device-width: 768px) {
  #Welcome {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bgColor1);
    .content {
      line-height: 1.5;
      .title {
        font-size: 28px;
      }
      .sub_title {
        color: #508ce9;
        font-size: 36px;
      }
      .desc {
        padding-left: 15px;
        font-size: 14px;
        color: gray;
      }
    }
    .pic {
      margin-top: 30px !important;
      background-image: url("../../src/assets/images/welcome.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      width: 400px;
      height: 400px;
      margin: 0;
    }
  }
}
</style>