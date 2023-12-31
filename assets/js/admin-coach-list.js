import { api_url } from "./config.js";

// 畫面初始化
function init(){
    getCoaches();
};
init();

// 取得教練列表
const coachList = document.querySelector('.js-coachList');
let coachData = [];
function getCoaches(){
  axios.get(`${api_url}/coaches?_expand=user`)
  .then(function (res) {
    coachData = res.data;
    console.log(coachData);
    let str=``;    
    coachData.forEach((i) => {
        str += renderCoachHTML(i);
    });
    coachList.innerHTML = str;
  })
  .catch(function (error) {
    console.log(error);
  })
};

function renderCoachHTML(i){
    return `
    <tr>
        <th scope="row">${i.id}</th>
        <td>${i.coachName}</td>
        <td>${i.user.email}</td>
        <td>${i.coachExp} 年</td>
        <td>${i.coachContact}</td>
        <td class="text-center">${i.coachAutherize?"通過":"未通過"}</td>
        <td class="text-center"><a href="admin-coach-detail.html?id=${i.id}" class="link-primary">查看</a></td>
    </tr>
    `;
};