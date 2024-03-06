import { api_url } from "./config.js";
import Swal from 'sweetalert2';

let deleteBtns;

// 畫面初始化
function init() {
  getArticles();
};
init();

// 取得文章列表
const articleListItem = document.querySelector('.js-articleList');
let articleData = [];
function getArticles() {
  axios.get(`${api_url}/articles`)
    .then(function (res) {
      articleData = res.data;
      let str = ``;
      articleData.forEach((i) => {
        str += renderArticleList(i);
      });
      articleListItem.innerHTML = str;
      getArticleCategories(res);
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
function renderArticleList(i) {
  return `<tr>
        <th scope="row">${i.id}</th>
        <td>${i.articleName}</td>
        <td>${i.articleCategory}</td>
        <td>${i.articleAuther}</td>
        <td class="text-center">${i.articleCreatTime}</td>
        <td class="text-center">${i.articlePublic ? "公開" : "未公開"
    }</td>
        <td class="text-center">
        <a class="link-primary" data-id="${i.id}" href="admin-article-detail.html?id=${i.id}">查看</a> / 
        <a class="delete-btn link-primary" data-id="${i.id}" href="">刪除</a></td>
    </tr>
    `;
}

// 篩選文章-1
// 渲染分類項目
const articleFilter = document.querySelector('.admin-article-filter .form-select');
function getArticleCategories(res) {
  // 取得所有分類
  let articleAllCategoryData = [];
  articleData = res.data;
  articleData.forEach((i) => {
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
  articleData.forEach((i) => {
    if (i.articleCategory == category) {
      str += renderArticleList(i);
    }
  });
  articleListItem.innerHTML = str;
});

// 刪除文章
function deleteArticle(dataId) {
  axios.delete(`${api_url}/articles/${dataId}`)
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