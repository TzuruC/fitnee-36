import { api_url } from "./config.js";
import Swal from "sweetalert2";

// 判斷是否有登入
let is_login = localStorage.getItem("userLoginToken");

console.log(is_login ? "is login" : "logout");
// AUTH
// export const
const header = (is_login) => {
  const loginLink = document.querySelector(".loginLink");
  const registLink = document.querySelector(".registLink");
  const logoutBtn = document.querySelector(".logoutBtn");
  if (is_login) {
    loginLink.classList.add("d-none");
    registLink.classList.add("d-none");
    logoutBtn.classList.remove("d-none");
  } else if (!is_login) {
    loginLink.classList.remove("d-none");
    registLink.classList.remove("d-none");
    logoutBtn.classList.add("d-none");
  }
}


// 登入

// 登出
const logoutBtns = document.querySelectorAll(".logoutBtn");

logoutBtns.forEach(logoutBtn => {
  logoutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    localStorage.removeItem("userLoginToken");
    Swal.fire({
      title: '已登出！',
      icon: 'success',
      confirmButtonText: '確認',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success py-3 px-10',
      }
    });
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 0);
  });
});

// 取得教練列表
const coachCards = document.querySelector('.coach-cards');
let coachData = [];
function getCoaches() {
  axios.get(`${api_url}/coaches`)
    .then(function (res) {
      coachData = res.data;
      let str = ``;
      let strCount = 0;
      coachData.forEach((i) => {
        if (strCount < 4) {
          str += renderCoachHTML(i);
          strCount += 1;
        };
      });
      coachCards.innerHTML = str;
    })
    .catch(function (error) {
      console.log(error);
    })
};
// 渲染教練卡片
function renderCoachHTML(i) {
  return `
  <li class="coach-card mb-lg-0 mb-7 px-2" data-aos="flip-left" data-aos-delay="50" data-aos-once="true">
      <a href="coach-detail.html?id=${i.id}">
      <div class="img-gradient">
          <img src="${i.coachPhoto}" alt="${i.coachTitle}" />
      </div>
      <div class="coach-caption mx-4 d-flex flex-row-reverse justify-content-between align-items-center">
          <h4 class="coach-name m-0 text-white fs-3 text-right">${i.coachName}</h4>
      <p class="coach-title m-0 fs-5">${i.coachTitle}</p>    
      </div>
      </a>
  </li>
  `;
};
// 篩選教練
const coachFilter = document.querySelector('.coach-filter-system');
coachFilter.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName == "A") {
    const category = e.target.textContent;
    let str = ``;
    let strCount = 0;
    coachData.forEach((i) => {
      if (i.coachTalent == category && strCount < 4) {
        str += renderCoachHTML(i);
        strCount += 1;
      };
    });
    coachCards.innerHTML = str;
  }
});
// 教練篩選動畫效果
const coachFilterItems = document.querySelectorAll('.coach-filter-system .filter-btn');
coachFilterItems.forEach((i) => {
  i.addEventListener('click', (e) => {
    e.preventDefault();
    coachFilterItems.forEach((i) => {
      i.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});
// 教練搜尋欄功能
const serchCoachForm = document.querySelector('.search-coach');
const serchCoachInput = document.querySelector('.search-coach input');
serchCoachForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchKey = serchCoachInput.value.trim().toLowerCase();
  // console.log(searchKey);
  let matchingCoaches = []; // 存储匹配的结果
  let str = ``;
  let strCount = 0;
  coachData.forEach((i) => {
    // 將每組單字拆成ary
    let dataCoachNameKey = i.coachName.toLowerCase().split('');
    let matchFound = false;
    // 一個字一個字比對
    dataCoachNameKey.forEach((key) => {
      if (key.includes(searchKey)) {
        matchFound = true;
      }
    });
    if (matchFound && strCount < 4) {
      str += renderCoachHTML(i);
      strCount += 1;
    };
    coachCards.innerHTML = str;
  });
  serchCoachForm.reset();
});

// 取得文章列表
const articleCards = document.querySelector('.article-cards');
let articleData = [];
function getArticles() {
  axios.get(`${api_url}/articles`)
    .then(function (res) {
      articleData = res.data;
      let str = ``;
      let strCount = 0;
      articleData.forEach((i) => {
        if (strCount < 4) {
          str += renderArticleHTML(i);
          strCount += 1;
        };
      });
      articleCards.innerHTML = str;
    })
    .catch(function (error) {
      console.log(error);
    })
}
// 渲染文章卡片
function renderArticleHTML(i) {
  return `
  <li class="article-card col-3 px-1 mb-7" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
    <a href="article-detail.html?id=${i.id}">
    <img class="rounded w-100" src="${i.articleCoverImg}" alt="${i.articleName}">  
      <div class="article-caption mt-6 text-dark link-dark">
        <h4 class="mb-2 fs-4 link-dark">${i.articleName}</h4>
        <p class="mb-2 fs-5 text-dark link-dark">${i.articleBrief.substring(0, 28)}...</p>
        <p class="fs-5 text-dark mb-0">${i.articleCreatTime}</p>            
      </div>          
    </a>
  </li> 
  `;
}
// 篩選文章
const articleFilter = document.querySelector('.article-filter');
articleFilter.addEventListener('click', (e) => {
  e.preventDefault();
  const articleCategory = e.target.textContent;
  if (articleCategory == "所有分類") {
    getArticles();
    return;
  }
  let str = ``;
  let strCount = 0;
  articleData.forEach((i) => {
    if (i.articleCategory == articleCategory && strCount < 4) {
      str += renderArticleHTML(i);
      strCount += 1;
    };
  });
  articleCards.innerHTML = str;
});
// 文章篩選動畫效果
const articleFilterItems = document.querySelectorAll('.article-filter li');
articleFilterItems.forEach((i) => {
  i.addEventListener('click', (e) => {
    e.preventDefault();
    articleFilterItems.forEach((i) => {
      i.querySelector('a').classList.remove('link-primary', 'active');
    });
    e.target.classList.add('link-primary', 'active');
  });
});



// 畫面初始化
function init() {
  getCoaches();
  getArticles();
  setTimeout(() => {
    header(is_login);
  }, 0);
};
init();