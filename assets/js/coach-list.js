const api_url="http://localhost:3000";

// 畫面初始化
function init(){
    getCoaches();
};
init();


// 取得教練列表
const coachCards = document.querySelector('.render-coach-cards');
let coachData = [];
function getCoaches(){
  axios.get(`${api_url}/coaches`)
  .then(function (res) {
    coachData = res.data;
    console.log(coachData);
    let str=``;    
    coachData.forEach((i) => {
        str += renderCoachHTML(i);
    });
    coachCards.innerHTML = str;
  })
  .catch(function (error) {
    console.log(error);
  })
};
// 渲染教練卡片
function renderCoachHTML(i){
    return `
    <li class="coach-card mb-5">
        <a class="row align-items-center" href="coach-detail.html?id=${i.id}">
            <div class="coach-photo col-lg-3 col-4">
            <img src="${i.coachPhoto}" alt="${i.coachName}" />              
            </div>
            <div class="coach-content col-lg-9 col-8">
            <div class="coach-info d-flex justify-content-between">  
                <div>
                <h4 class="coach-name fs-4 text-right link-dark">${i.coachName}</h4>
                <p class="coach-title fs-6">${i.coachTitle}</p>
                </div>
                <div class="coach-price">
                <span class="d-block fs-5 text-end link-dark">NT$ ${i.coachPricing}</span> 
                <span class="d-block fs-6 text-end link-dark">/ 體驗課</span>
                </div>  
            </div>
            <div class="coach-intro link-dark fs-6">
                ${i.coachProfile.substring(0, 100)} ...
            </div>    
            </div>              
        </a>
    </li>
    `;
};
// 教練搜尋欄功能
const serchCoachForm = document.querySelector('.aside-search-box');
const serchCoachInput = document.querySelector('.aside-search-box input');
serchCoachForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const searchKey = serchCoachInput.value.trim().toLowerCase();
  console.log(searchKey);
  let matchingCoaches = []; // 存储匹配的结果
  let str=``;    
  coachData.forEach((i) => {
    // 將每組單字拆成ary
    let dataCoachNameKey = i.coachName.toLowerCase().split('');
    let matchFound = false;
    // 一個字一個字比對
    dataCoachNameKey.forEach((key)=>{
      if(key.includes(searchKey)){
        matchFound = true;
      }
    });    
    if (matchFound) {
      str += renderCoachHTML(i);
    };
    coachCards.innerHTML = str;
  });  
  serchCoachForm.reset();
});