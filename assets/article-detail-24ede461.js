import"./main-82aaa405.js";const i="http://localhost:3000",a=new URLSearchParams(window.location.search),c=a.get("id"),l=document.querySelector(".article-detail");axios.get(`${i}/articles/${c}`).then(function(e){const t=e.data;l.innerHTML=`
    <h3 class="article-title mb-2 mb-lg-2 fw-bold">${t.articleName}</h3>
      <div class="article-category mb-2 text-primary">${t.articleCategory}</div>
      <div class="article-create mb-2 d-flex justify-content-between">
        <div class="article-author text-secondary">作者：${t.articleAuther}</div>
        <div class="article-time text-secondary">張貼日期：${t.articleCreatTime}</div>
      </div>
      <div class="article-article row justify-content-between">       
        
        <div class="article-brief col-12 col-lg-8">
          <p>${t.articleBrief}</p>          
        </div>
        <div class="article-img col-12 col-lg-4">
          <img class="w-100 img-fluid mb-4" src="${t.articleCoverImg}" alt="article-img">
        </div>
        <div class="article-content col-12">
          <p>${t.articleContent}</p>          
        </div>
      </div>

      
    <div class="text-center mt-8">
      <a href="article-list.html" class="btn btn-outline-primary fs-5">返回文章列表</a>
    </div>
    `}).catch(function(e){console.log(e)});
