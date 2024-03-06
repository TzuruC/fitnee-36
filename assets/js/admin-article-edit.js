import { api_url } from "./config.js";
import Swal from 'sweetalert2';


// 取得文章 ID
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
// 渲染位置
const title = document.querySelector("#articleTitle");
const category = document.querySelector("#articleType");
const author = document.querySelector("#articleAuthor");
const time = document.querySelector("#articleTime");
const brief = document.querySelector("#articleBrief");
const content = document.querySelector("#articleContent");
const cover = document.querySelector(".admin-article-img img");
const doneEditBtn = document.querySelector("#doneEditBtn");

let editData = {};

// 渲染文章內容
axios.get(`${api_url}/articles/${articleId}`)
  .then(function (res) {
    const articleData = res.data;
    title.value = articleData.articleName;
    category.value = articleData.articleCategory;
    author.value = articleData.articleAuther;
    time.value = articleData.articleCreatTime;
    brief.value = articleData.articleBrief;
    content.value = articleData.articleContent;
    cover.src = articleData.articleCoverImg;
  })
  .catch(function (error) {
    console.log(error);
  })

// 確認修改
editData = {
  "articleName": title.value,
  "articleCategory": category.value,
  "articleAuther": author.value,
  "articleCreatTime": time.value,
  "articleBrief": brief.value,
  "articleContent": content.value,
  "articleCoverImg": cover.src,
};

doneEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(editData);
  axios.patch(`${api_url}/articles/${articleId}`, editData)
    .then(function (res) {
      Swal.fire({
        title: '修改成功',
        text: '確認後返回列表',
        icon: 'success',
        confirmButtonText: '確認',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-success py-3 px-10',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'admin-article-list.html';
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    })
});
