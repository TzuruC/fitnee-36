import"./main-b8f35602.js";const o="http://localhost:3000";function d(){n()}d();document.querySelector(".coach-cards");const i=document.querySelector(".article-cards");let a=[];function n(){axios.get(`${o}/articles`).then(function(t){a=t.data;let e="";for(let r=0;r<4;r++)e+=s(r);i.innerHTML=e}).catch(function(t){console.log(t)})}function s(t){return`<li class="article-card mb-7" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
        <a href="#">
            <img class="rounded" src="${a[t].articleCoverImg}" alt="${a[t].articleName}" />  
            <div class="article-caption mt-6">
            <h4 class="mb-2 fs-4 link-dark">${a[t].articleName}</h4>
            <p class="mb-2 fs-5 text-dark">${a[t].articleContent.substring(0,28)}...</p>
            <p class="fs-5 text-dark mb-0">${a[t].articleCreatTime}</p>            
        </div>          
        </a>
      </li> 
      `}const u=document.querySelector(".article-filter");u.addEventListener("click",t=>{t.preventDefault();const e=t.target.textContent;if(e=="所有分類"){n();return}let r="";for(let c=0;c<4;c++)a[c].articleCategory==e&&(r+=s(c));i.innerHTML=r});const l=document.querySelectorAll(".article-filter li");l.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),l.forEach(r=>{r.querySelector("a").classList.remove("link-primary","active")}),e.target.classList.add("link-primary","active")})});
