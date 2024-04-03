import"./auth-99677de4.js";import"./animation-2ea199e6.js";import{a as i}from"./config-f552c1ba.js";function s(){c()}s();const r=document.querySelector(".render-cards");let e=[];function c(){axios.get(`${i}/articles`).then(function(a){e=a.data;let l="";e.forEach(t=>{l+=n(t)}),r.innerHTML=`
    <ul class="article-cards list-unstyled pb-lg-7 row">
    ${l}
    </ul>
        
        <nav aria-label="Page navigation example col-lg-12">
          <ul class="pagination m-lg-0 py-lg-0 py-7 justify-content-end align-items-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span class="material-symbols-outlined align-text-bottom">
                  chevron_left
                  </span>
              </a>
            </li>
            <li class="page-item"><a class="page-link mx-1" href="#">1</a></li>
            <li class="page-item"><a class="page-link mx-1" href="#">2</a></li>
            <li class="page-item"><a class="page-link mx-1" href="#">...</a></li>
            <li class="page-item"><a class="page-link mx-1" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span class="material-symbols-outlined align-text-bottom">
                  chevron_right
                  </span>
              </a>
            </li>
          </ul>
        </nav>`}).catch(function(a){console.log(a)})}function n(a){return`
  <li class="article-card mb-7 aos-init aos-animate col-4" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
  <a href="article-detail.html?id=${a.id}">
    <img class="rounded w-100" src="${a.articleCoverImg}" alt="${a.articleName}">  
    <div class="article-caption mt-6 text-dark link-dark">
        <h4 class="mb-2 fs-4 link-dark">${a.articleName.substring(0,12)}</h4>
        <p class="mb-2 fs-5 text-dark">${a.articleBrief.substring(0,28)}...</p>
        <p class="fs-5 text-dark mb-0">${a.articleCreatTime}</p>            
    </div>          
  </a>
</li>
      `}
