import http from "../request"
import store from '@/store'
import cookie from "vue-cookies"
import router from '@/router'
import ElementUI from 'element-ui';

export async function getAllTeam() {
  const {
    data: res
  } = await http.get("team/all/");

  if (res.code == 200) {
    let data = res.data;
    data.forEach(item => {
      item.startDate *= 24 * 60 * 60 * 1000;
      item.endDate *= 24 * 60 * 60 * 1000;
      item.cost = 0;
      item.avatarList = [];
      item.members.forEach((i, index) => {
        item.cost += i.salary;
        if (index <= 4) {
          item.avatarList.push(i.avatar);
        }
      });
      item.number = item.members.length;
      let time = new Date().getTime();
      let difference = item.endDate - time;
      difference = Math.ceil(difference / 24 / 60 / 60 / 1000);
      item.week = Math.ceil(difference / 7);
    });
    return data;
  } else {
    ElementUI.Message({
      message: "查询失败"
    })
    return [];
  }

}