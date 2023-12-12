const api_url="http://localhost:3000";


// 渲染文章內容
// 取得文章 ID
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
// 渲染位置
const articleTitle = document.querySelector('.article-title');
const articleCategory = document.querySelector('.article-category');
const articleAuthor = document.querySelector('.article-author');
const articleTime = document.querySelector('.article-time');
const articleBreif = document.querySelector('.article-breif');
const articleImg = document.querySelector('.article-img');
const articleContent = document.querySelector('.article-content');

axios.get(`${api_url}/articles/${articleId}`)
  .then(function (res) {
    const articleData = res.data;
    // 文章內容渲染
    articleTitle.textContent = articleData.articleName;
    articleAuthor.textContent = "作者：" + articleData.articleAuther;
    articleCategory.textContent = articleData.articleCategory;
    articleTime.textContent = "張貼日期：" + articleData.articleCreatTime;
    articleBreif.innerHTML = `<p>${articleData.articleName}</p>`;
    articleImg.innerHTML = `<img class="w-100 img-fluid mb-4" src="${articleData.articleCoverImg}" alt="article-img" />`;
    articleContent.innerHTML = `<p>${articleData.articleContent}</p>`;
    console.log(articleData);
  })
  .catch(function (error) {
    console.log(error);
  })

