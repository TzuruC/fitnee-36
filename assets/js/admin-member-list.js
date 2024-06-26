import { api_url } from "./config.js";
import Swal from 'sweetalert2';

let deleteBtns;

// 畫面初始化
function init() {
  getArticles();
};
init();

// 取得文章列表
const listItem = document.querySelector('.js-memberList');
let data = [];
function getArticles() {
  axios.get(`${api_url}/users`)
    .then(function (res) {
      data = res.data;
      console.log(data);
      let str = ``;
      data.forEach((i, index) => {
        str += renderList(i, index + 1);
        index++;
      });
      listItem.innerHTML = str;
      getCategories(res);
    })
    .then(function (res) {
      deleteBtns = document.querySelectorAll(".delete-btn");
      deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const dataId = deleteBtn.getAttribute("data-id");
          deleteArticle(dataId);
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    })
}


// 渲染文章列表
function renderList(i, index) {
  let role;
  if (i.role === "admin") {
    role = "管理員";
  } else if (i.role === "user") {
    if (!i.coachId) {
      role = "一般會員";
    } else {
      role = "教練";
    }
  }
  return `
    <tr>
      <th scope="row">${index}</th>
      <td>${i.name}</td>
      <td>${i.gender ? i.gender : "不適用"}</td>
      <td>${i.email}</td>
      <td>${i.phone ? i.phone : "未登錄"}</td>
      <td class="text-center">${role}</td>
      <td class="text-center"><a class="link-primary" data-id="${i.id}" href="admin-member-detail.html?id=${i.id}">查看</a></td>
    </tr>
    `;
}

// 篩選文章-1
// 渲染分類項目
const articleFilter = document.querySelector('.admin-article-filter .form-select');
function getCategories(res) {
  // 取得所有分類
  let articleAllCategoryData = [];
  data = res.data;
  data.forEach((i) => {
    articleAllCategoryData.push(i.articleCategory);
  });
  // 使用 Set 去除重複值
  let articleCategoryData = [...new Set(articleAllCategoryData)];
  // 渲染分類項目
  let str = `<option value="所有分類">- 所有分類 -</option>`;
  articleCategoryData.forEach((i) => {
    str += `
        <option value="${i}">${i}</option>        
        `;
  });
  articleFilter.innerHTML = str;
}
// 篩選文章-2
articleFilter.addEventListener('change', (e) => {
  e.preventDefault();
  const category = e.target.value;
  if (category == "所有分類") {
    getArticles();
    return;
  }
  let str = ``;
  data.forEach((i) => {
    if (i.articleCategory == category) {
      str += renderList(i);
    }
  });
  listItem.innerHTML = str;
});

// 刪除文章
function deleteArticle(dataId) {
  axios.delete(`${api_url}/users/${dataId}`)
    .then(function (res) {
      Swal.fire({
        title: '刪除成功',
        text: '確認後返回列表',
        icon: 'success',
        confirmButtonText: '確認',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success py-3 px-10', // 設置確認按鈕的樣式
        }
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      })

    })
    .catch(error => {
      console.error('刪除失敗︰', error);
    });
}