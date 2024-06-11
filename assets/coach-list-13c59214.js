import"./main-76cd2f60.js";import"./animation-2ea199e6.js";import"./auth-4e215fa2.js";import{a as d}from"./config-afd6d7d3.js";function f(){u()}f();const r=document.querySelector(".render-coach-cards");let o=[];function u(){axios.get(`${d}/coaches`).then(function(c){o=c.data,console.log(o);let a="";o.forEach(e=>{a+=i(e)}),r.innerHTML=a}).catch(function(c){console.log(c)})}function i(c){return`
    <li class="coach-card mb-5">
        <a class="row align-items-center" href="coach-detail.html?id=${c.id}">
            <div class="coach-photo col-lg-3 col-4">
            <img src="${c.coachPhoto}" alt="${c.coachName}" />              
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
                ${c.coachProfile.substring(0,100)} ...
            </div>    
            </div>              
        </a>
    </li>
    `}const n=document.querySelector(".aside-search-box"),m=document.querySelector(".aside-search-box input");n.addEventListener("submit",c=>{c.preventDefault();const a=m.value.trim().toLowerCase();console.log(a);let e="";o.forEach(t=>{let l=t.coachName.toLowerCase().split(""),s=!1;l.forEach(h=>{h.includes(a)&&(s=!0)}),s&&(e+=i(t)),r.innerHTML=e}),n.reset()});
