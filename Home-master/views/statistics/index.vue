<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 5px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="acess">社区管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>本次登陆的时间:<span>2022-4-13</span></p>
          <p>本次登陆的地点:<span>北京</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 290px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col sytle="margin-top:20px" :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: flex, padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
            style="float: left"
          ></i>
          <div class="detail" style="padding-top: 15px">
            <p class="num" style="margin-left: 50px">{{ item.value }}</p>
            <p class="txt" style="margin-left: 0px">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 180px">
        <!-- 折线图  -->
        <echart :chartData="echartData.order" style="height: 200px" />
      </el-card>

      <div class="graph">
        <el-card style="height: 200px">
          <!-- 柱状图 -->
          <echart :chartData="echartData.user" style="height: 200px" />
        </el-card>

        <el-card style="height: 200px">
          <!-- 饼图 -->
          <p class="pie-name">用户上次登录时间</p>
          <echart
            :chartData="echartData.video"
            :isAxisChart="false"
            style="height: 150px"
          />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../api/data.js";
// import * as echarts from 'echarts'

import Echart from "../../src/components/ECharts";

export default {
  name: "statistics",
  components: {
    Echart,
  },
  data() {
    return {
      userImg: require("../../src/assets/images/user.png"),
      tableData: [],
      tableLabel: {
        name: "类型",
        todayGrow: "今日新增",
        monthGrow: "本月新增",
        totalGrow: "总数量",
      },
      countData: [
        {
          name: "今日登录用户",
          value: 1234,
          icon: "user",
          color: "#2ec7c9",
        },
        {
          name: "今日活跃讨论组",
          value: 1234,
          icon: "chat-line-round",
          color: "#ffb980",
        },
        {
          name: "今日举报数量",
          value: 1234,
          icon: "edit",
          color: "#5ab1ef",
        },
        {
          name: "本月登录用户",
          value: 1234,
          icon: "user",
          color: "#2ec7c9",
        },
        {
          name: "本月活跃讨论组",
          value: 1234,
          icon: "chat-line-round",
          color: "#ffb980",
        },
        {
          name: "本月举报数量",
          value: 1234,
          icon: "edit",
          color: "#5ab1ef",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const keyAarry = Object.keys(order.data[0]);
        const series = [];
        keyAarry.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        this.echartData.order.xData = xData;
        this.echartData.order.series = series;
        this.echartData.user.xData = data.userData.map((item) => item.date);
        this.echartData.user.series = [
          {
            name: "新增用户",
            data: data.userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: data.userData.map((item) => item.active),
            type: "bar",
          },
        ];
        this.echartData.video.series = [
          {
            data: data.videoData,
            type: "pie",
          },
        ];
      }
      console.log(res);
    });
  },
};
</script>

<style>
.pie-name {
  text-align: center;
  font-size: 7px;
  margin-bottom: 10px;
}
</style>