import"./main-e394583a.js";import"./animation-2ea199e6.js";import{a as s}from"./config-f552c1ba.js";const i=new URLSearchParams(window.location.search),l=i.get("id"),o=document.querySelector(".render-coach-detail");console.log(o);axios.get(`${s}/coaches/${l}`).then(function(a){let c=a.data;console.log(c),o.innerHTML=`
    <div class="coach-card mb-5">
    <div class="row align-items-center" href="#">
        <div class="coach-photo col-lg-3 col-4">
        <img src="${c.coachPhoto}" alt="coach1" />              
        </div>
        <div class="coach-content col-lg-9 col-8">
        <div class="coach-info d-flex justify-content-between">  
            <div>
            <h4 class="coach-name fs-4 text-right link-dark">${c.coachName}</h4>
            <p class="coach-title fs-6">${c.coachTitle}</p>
            </div>
            <div class="coach-price">
            <span class="d-block fs-5 text-end link-dark">NT$ ${c.coachPricing}</span> 
            <span class="d-block fs-6 text-end link-dark">/ 體驗課</span>
            </div>  
        </div>
        <div class="coach-intro link-dark fs-6">
        ${c.coachProfile}
        </div>    
        
        </div>              
    </div>
    </div>
    <div class="coach-card mb-5">
    <div class="row align-items-top" href="#">
        <div class="coach-content col-lg-9 col-8">
        <div class="coach-info d-flex justify-content-between">  
            <div>
                <span class=" mb-4 d-block fs-5 text-start">${c.coachExp} 年 執業經驗</span>     
                <p class="m-0 mb-4 fs-6">專長︰${c.coachTalent}</p>
                <p class="m-0 mb-4 fs-6">服務地區︰${c.coachRegion}</p>
            </div>
            <div class="coach-price">    
            </div>  
        </div>  
        
        </div>   
        
        <div class="coach-photo col-lg-3 col-4">
        合格證照︰
        <img src="${c.coachCert}" alt="合格證照" />              
        </div>           
    </div>
    </div>
    `}).catch(function(a){console.log(a)});
