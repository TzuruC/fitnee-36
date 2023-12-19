import { api_url } from "./config.js";


// 取得教練 ID
const urlParams = new URLSearchParams(window.location.search);
const coachId = urlParams.get('id');
const coachDetail = document.querySelector('.render-coach-detail');
console.log(coachDetail);

axios.get(`${api_url}/coaches/${coachId}`)
  .then(function (response) {
    // handle success
    let coachData = response.data;
    console.log(coachData);
    coachDetail.innerHTML = `
    <div class="coach-card mb-5">
    <div class="row align-items-center" href="#">
        <div class="coach-photo col-lg-3 col-4">
        <img src="${coachData.coachPhoto}" alt="coach1" />              
        </div>
        <div class="coach-content col-lg-9 col-8">
        <div class="coach-info d-flex justify-content-between">  
            <div>
            <h4 class="coach-name fs-4 text-right link-dark">${coachData.coachName}</h4>
            <p class="coach-title fs-6">${coachData.coachTitle}</p>
            </div>
            <div class="coach-price">
            <span class="d-block fs-5 text-end link-dark">NT$ ${coachData.coachPricing}</span> 
            <span class="d-block fs-6 text-end link-dark">/ 體驗課</span>
            </div>  
        </div>
        <div class="coach-intro link-dark fs-6">
        ${coachData.coachProfile}
        </div>    
        
        </div>              
    </div>
    </div>
    <div class="coach-card mb-5">
    <div class="row align-items-top" href="#">
        <div class="coach-content col-lg-9 col-8">
        <div class="coach-info d-flex justify-content-between">  
            <div>
                <span class=" mb-4 d-block fs-5 text-start">${coachData.coachExp} 年 執業經驗</span>     
                <p class="m-0 mb-4 fs-6">專長︰${coachData.coachTalent}</p>
                <p class="m-0 mb-4 fs-6">服務地區︰${coachData.coachRegion}</p>
            </div>
            <div class="coach-price">    
            </div>  
        </div>  
        
        </div>   
        
        <div class="coach-photo col-lg-3 col-4">
        合格證照︰
        <img src="${coachData.coachCert}" alt="合格證照" />              
        </div>           
    </div>
    </div>
    `;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })