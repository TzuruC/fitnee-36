const api_url="http://localhost:3000";
const page_rul="http://localhost:5173/fitnee-36"

// 畫面初始化
function init(){
    getArticles();
  };
  init();

// 取得文章列表
const articleListItem = document.querySelector('.js-articleList');
let articleData = [];
function getArticles(){
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
  .catch(function (error) {
    console.log(error);
  })
}

function renderArticleList(i){
    return `<tr>
        <th scope="row">${i.id}</th>
        <td>${i.articleName}</td>
        <td>${i.articleCategory}</td>
        <td>${i.articleAuther}</td>
        <td class="text-center">${i.articleCreatTime}</td>
        <td class="text-center">${
            i.articlePublic ? "公開" : "未公開"
        }</td>
        <td class="text-center">
        <a class="link-primary" data-id="${i.id}" href="admin-article-detail.html?id=${i.id}">編輯</a> / 
        <a class="link-primary" data-id="${i.id}" href="">刪除</a></td>
    </tr>
    `;
}

// 篩選文章-1
// 渲染分類項目
const articleFilter = document.querySelector('.admin-article-filter .form-select');
function getArticleCategories(res){
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
    articleCategoryData.forEach((i)=>{
        str += `
        <option value="${i}">${i}</option>        
        `;
    });
    articleFilter.innerHTML = str;
}
// 篩選文章-2
articleFilter.addEventListener('change',(e)=>{
  e.preventDefault();
  const category = e.target.value;
  if(category == "所有分類"){    
    getArticles();
    return;
  }
  let str = ``;
  articleData.forEach((i)=>{
    if(i.articleCategory == category){
        str += renderArticleList(i);
    }
  });
  articleListItem.innerHTML = str;
});

