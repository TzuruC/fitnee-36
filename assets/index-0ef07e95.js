import"./auth-0f4bca45.js";import"./animation-2ea199e6.js";import{a as u}from"./config-f552c1ba.js";const i=document.querySelector(".coach-cards");let o=[];function C(){axios.get(`${u}/coaches`).then(function(t){o=t.data;let e="",a=0;o.forEach(c=>{a<4&&(e+=s(c),a+=1)}),i.innerHTML=e}).catch(function(t){console.log(t)})}function s(t){return`
  <li class="coach-card mb-lg-0 mb-7 px-2" data-aos="flip-left" data-aos-delay="50" data-aos-once="true">
      <a href="coach-detail.html?id=${t.id}">
      <div class="img-gradient">
          <img src="${t.coachPhoto}" alt="${t.coachTitle}" />
      </div>
      <div class="coach-caption mx-4 d-flex flex-row-reverse justify-content-between align-items-center">
          <h4 class="coach-name m-0 text-white fs-3 text-right">${t.coachName}</h4>
      <p class="coach-title m-0 fs-5">${t.coachTitle}</p>    
      </div>
      </a>
  </li>
  `}const L=document.querySelector(".coach-filter-system");L.addEventListener("click",t=>{if(t.preventDefault(),t.target.nodeName=="A"){const e=t.target.textContent;let a="",c=0;o.forEach(r=>{r.coachTalent==e&&c<4&&(a+=s(r),c+=1)}),i.innerHTML=a}});const d=document.querySelectorAll(".coach-filter-system .filter-btn");d.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),d.forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active")})});const h=document.querySelector(".search-coach"),k=document.querySelector(".search-coach input");h.addEventListener("submit",t=>{t.preventDefault();const e=k.value.trim().toLowerCase();let a="",c=0;o.forEach(r=>{let g=r.coachName.toLowerCase().split(""),n=!1;g.forEach(y=>{y.includes(e)&&(n=!0)}),n&&c<4&&(a+=s(r),c+=1),i.innerHTML=a}),h.reset()});const m=document.querySelector(".article-cards");let l=[];function p(){axios.get(`${u}/articles`).then(function(t){l=t.data;let e="",a=0;l.forEach(c=>{a<4&&(e+=v(c),a+=1)}),m.innerHTML=e}).catch(function(t){console.log(t)})}function v(t){return`
  <li class="article-card col-3 px-1 mb-7" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
    <a href="article-detail.html?id=${t.id}">
    <img class="rounded w-100" src="${t.articleCoverImg}" alt="${t.articleName}">  
      <div class="article-caption mt-6 text-dark link-dark">
        <h4 class="mb-2 fs-4 link-dark">${t.articleName}</h4>
        <p class="mb-2 fs-5 text-dark link-dark">${t.articleBrief.substring(0,28)}...</p>
        <p class="fs-5 text-dark mb-0">${t.articleCreatTime}</p>            
      </div>          
    </a>
  </li> 
  `}const E=document.querySelector(".article-filter");E.addEventListener("click",t=>{t.preventDefault();const e=t.target.textContent;if(e=="所有分類"){p();return}let a="",c=0;l.forEach(r=>{r.articleCategory==e&&c<4&&(a+=v(r),c+=1)}),m.innerHTML=a});const f=document.querySelectorAll(".article-filter li");f.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),f.forEach(a=>{a.querySelector("a").classList.remove("link-primary","active")}),e.target.classList.add("link-primary","active")})});function x(){C(),p()}x();
