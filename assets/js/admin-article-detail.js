const api_url="http://localhost:3000";


// 渲染文章內容
// 取得文章 ID
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
// 渲染位置
const articleTitle = document.querySelector('.admin-article-title');
const articleCategory = document.querySelector('.admin-article-category');
const articleAuthor = document.querySelector('.admin-article-author');
const articleTime = document.querySelector('.admin-article-time');
const articleBreif = document.querySelector('.admin-article-breif');
const articleImg = document.querySelector('.admin-article-img');
const articleContent = document.querySelector('.admin-article-content');
const articlePublic = document.querySelector('.admin-article-public');

axios.get(`${api_url}/articles/${articleId}`)
  .then(function (res) {
    const articleData = res.data;
    // 文章內容渲染
    articleTitle.innerHTML = `<span class="fw-bold">文章標題：</span>${articleData.articleName}`;
    articleCategory.innerHTML = `<span class="fw-bold">文章分類：</span>${articleData.articleCategory}`;
    articleAuthor.innerHTML = `<span class="fw-bold">文章作者：</span>${articleData.articleAuther}`;
    articleTime.innerHTML = `<span class="fw-bold">文章發布日期：</span>${articleData.articleCreatTime}`;
    articleBreif.innerHTML = `<span class="fw-bold">文章簡介：</span><p>${articleData.articleName}</p>`;
    articleImg.innerHTML = `<img class="w-100 img-fluid mb-4 rounded" src="${articleData.articleCoverImg}" alt="article-img" />`;
    articleContent.innerHTML = `<span class="fw-bold">文章內容：</span><p>${articleData.articleContent}</p>`;

    if(articleData.articlePublic){
        articlePublic.innerHTML = `<span class="fw-bold">文章狀態：</span><a href="#" class="btn btn-success btn-sm">公開</a>`;
    }else{
        articlePublic.innerHTML = `<span class="fw-bold">文章狀態：</span><a href="#" class="btn btn-secondary btn-sm">未公開</a>`;
    }

    console.log(articleData);
  })
  .catch(function (error) {
    console.log(error);
  })

