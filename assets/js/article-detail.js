import { api_url } from "./config.js";


// 渲染文章內容
// 取得文章 ID
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
// 渲染位置
const articleDetail = document.querySelector('.article-detail');


axios.get(`${api_url}/articles/${articleId}`)
  .then(function (res) {
    const articleData = res.data;

    // 文章內容渲染
    articleDetail.innerHTML =`
    <h3 class="article-title mb-2 mb-lg-2 fw-bold">${articleData.articleName}</h3>
      <div class="article-category mb-2 text-primary">${articleData.articleCategory}</div>
      <div class="article-create mb-2 d-flex justify-content-between">
        <div class="article-author text-secondary">作者：${articleData.articleAuther}</div>
        <div class="article-time text-secondary">張貼日期：${articleData.articleCreatTime}</div>
      </div>
      <div class="article-article row justify-content-between">       
        
        <div class="article-brief col-12 col-lg-8">
          <p>${articleData.articleBrief}</p>          
        </div>
        <div class="article-img col-12 col-lg-4">
          <img class="w-100 img-fluid mb-4" src="${articleData.articleCoverImg}" alt="article-img">
        </div>
        <div class="article-content col-12">
          <p>${articleData.articleContent}</p>          
        </div>
      </div>

      
    <div class="text-center mt-8">
      <a href="article-list.html" class="btn btn-outline-primary fs-5">返回文章列表</a>
    </div>
    `;
  })
  .catch(function (error) {
    console.log(error);
  })

