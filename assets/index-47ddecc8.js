import"./main-edd445a5.js";const l="http://localhost:3000";function r(){s()}r();document.querySelector(".coach-cards");const i=document.querySelector(".article-cards");let a=[];function s(){axios.get(`${l}/articles`).then(function(e){a=e.data;let c="";for(let t=0;t<4;t++)c+=`
      <li class="article-card mb-7" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
        <a href="#">
            <img class="" src="${a[t].articleCoverImg}" alt="${a[t].articleName}" />  
            <div class="article-caption mt-6">
            <h4 class="mb-2 fs-4 link-dark">${a[t].articleName}</h4>
            <p class="mb-2 fs-5 text-dark">${a[t].articleContent.substring(0,28)}...</p>
            <p class="fs-5 text-dark mb-0">${a[t].articleCreatTime}</p>            
        </div>          
        </a>
      </li> 
      `;i.innerHTML=c}).catch(function(e){console.log(e)})}
