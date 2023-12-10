const { forEach } = require("json-server-auth");

const api_url="http://localhost:3000";

// 畫面初始化
function init(){
  getArticles();
};
init();


// 取得教練列表
const coachCards = document.querySelector('.coach-cards');
const coachData = [];
// axios.get(`${api_url}/coaches`)
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// 取得文章列表
const articleCards = document.querySelector('.article-cards');
let articleData = [];
function getArticles(){
  axios.get(`${api_url}/articles`)
  .then(function (res) {
    articleData = res.data;
    let str = ``;
    for (let i = 0; i < 4; i++) {
      str += renderArticleHTML(i);
    }
    articleCards.innerHTML = str;
  })
  .catch(function (error) {
    console.log(error);
  })
}

function renderArticleHTML(i) {
  return `
      <li class="article-card mb-7" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
        <a href="#">
            <img class="" src="${articleData[i].articleCoverImg}" alt="${
    articleData[i].articleName
  }" />  
            <div class="article-caption mt-6">
            <h4 class="mb-2 fs-4 link-dark">${articleData[i].articleName}</h4>
            <p class="mb-2 fs-5 text-dark">${articleData[
              i
            ].articleContent.substring(0, 28)}...</p>
            <p class="fs-5 text-dark mb-0">${
              articleData[i].articleCreatTime
            }</p>            
        </div>          
        </a>
      </li> 
      `;
}

// 篩選文章
const articleFilter = document.querySelector('.article-filter');
articleFilter.addEventListener('click',(e)=>{
  e.preventDefault();
  const category = e.target.textContent;
  if(category == "所有分類"){    
    getArticles();
    return;
  }
  let str = ``;
  for (let i = 0; i < articleData.length; i++) {
    if(articleData[i].articleCategory == category){
      str += renderArticleHTML(i);
    };
  }
  articleCards.innerHTML = str;
});

// 註冊功能

// 登入功能

// 文章篩選動畫效果
articleFilter.addEventListener('click',(e)=>{
    e.preventDefault();
    let str = ``;
    articleData.forEach((i) => {
      console.log(i.articleCategory);

    });
    // console.log(e.target.nodeName);
    // if(e.target.className == "link-primary active"){
    //   e.target.classList.remove("link-primary");
    //   e.target.classList.remove("active");
    // }else{      
    //   e.target.classList.add("link-primary");
    //   e.target.classList.add("active");
    // }

  });