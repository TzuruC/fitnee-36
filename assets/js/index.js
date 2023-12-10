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
      str += `
      <li class="article-card mb-7" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
        <a href="#">
            <img class="" src="${articleData[i].articleCoverImg}" alt="${articleData[i].articleName}" />  
            <div class="article-caption mt-6">
            <h4 class="mb-2 fs-4 link-dark">${articleData[i].articleName}</h4>
            <p class="mb-2 fs-5 text-dark">${articleData[i].articleContent.substring(0,28)}...</p>
            <p class="fs-5 text-dark mb-0">${articleData[i].articleCreatTime}</p>            
        </div>          
        </a>
      </li> 
      `;
    }
    articleCards.innerHTML = str;
  })
  .catch(function (error) {
    console.log(error);
  })
}


// 註冊功能

// 登入功能
