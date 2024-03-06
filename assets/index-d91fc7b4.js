import"./main-aa134d7c.js";import"./animation-2ea199e6.js";import{a as g}from"./config-afd6d7d3.js";const m=localStorage.getItem("userLoginToken"),l=document.querySelector("#logUI"),C=()=>{console.log(l),m?(console.log("is_login"),l.innerHTML=`
        <a class="btn ms-lg-4 mb-lg-0 mb-6 btn-outline-primary rounded-1 fs-4 col-10"
            href="member-login.html"
            type="button"
            >登出</a
        >`):m||(l.innerHTML=`
        <a class="btn ms-lg-4 mb-lg-0 mb-6 btn-outline-primary rounded-1 fs-4 col-5"
            href="member-login.html"
            type="button"
            >登入</a
        >
        <a class="btn ms-lg-4 btn-outline-primary rounded-1 fs-4 col-5" href="register.html" type="button"
            >註冊</a
        >
        `)};function k(){C(),E(),y()}k();const s=document.querySelector(".coach-cards");let o=[];function E(){axios.get(`${g}/coaches`).then(function(t){o=t.data;let e="",a=0;o.forEach(c=>{a<4&&(e+=i(c),a+=1)}),s.innerHTML=e}).catch(function(t){console.log(t)})}function i(t){return`
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
  `}const x=document.querySelector(".coach-filter-system");x.addEventListener("click",t=>{if(t.preventDefault(),t.target.nodeName=="A"){const e=t.target.textContent;let a="",c=0;o.forEach(r=>{r.coachTalent==e&&c<4&&(a+=i(r),c+=1)}),s.innerHTML=a}});const h=document.querySelectorAll(".coach-filter-system .filter-btn");h.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),h.forEach(a=>{a.classList.remove("active")}),e.target.classList.add("active")})});const u=document.querySelector(".search-coach"),T=document.querySelector(".search-coach input");u.addEventListener("submit",t=>{t.preventDefault();const e=T.value.trim().toLowerCase();let a="",c=0;o.forEach(r=>{let v=r.coachName.toLowerCase().split(""),d=!1;v.forEach(L=>{L.includes(e)&&(d=!0)}),d&&c<4&&(a+=i(r),c+=1),s.innerHTML=a}),u.reset()});const p=document.querySelector(".article-cards");let n=[];function y(){axios.get(`${g}/articles`).then(function(t){n=t.data;let e="",a=0;n.forEach(c=>{a<4&&(e+=b(c),a+=1)}),p.innerHTML=e}).catch(function(t){console.log(t)})}function b(t){return`
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
  `}const $=document.querySelector(".article-filter");$.addEventListener("click",t=>{t.preventDefault();const e=t.target.textContent;if(e=="所有分類"){y();return}let a="",c=0;n.forEach(r=>{r.articleCategory==e&&c<4&&(a+=b(r),c+=1)}),p.innerHTML=a});const f=document.querySelectorAll(".article-filter li");f.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),f.forEach(a=>{a.querySelector("a").classList.remove("link-primary","active")}),e.target.classList.add("link-primary","active")})});
