import"../main-76cd2f60.js";import"../auth-4e215fa2.js";import{a as i}from"../config-afd6d7d3.js";const l=new URLSearchParams(window.location.search),a=l.get("id"),o=document.querySelector(".admin-article-title"),s=document.querySelector(".admin-article-category"),d=document.querySelector(".admin-article-author"),m=document.querySelector(".admin-article-time"),u=document.querySelector(".admin-article-breif"),p=document.querySelector(".admin-article-img"),b=document.querySelector(".admin-article-content"),n=document.querySelector(".admin-article-public"),c=document.querySelector("#editArticleBtn");axios.get(`${i}/articles/${a}`).then(function(t){const e=t.data;o.innerHTML=`<span class="fw-bold">文章標題：</span>${e.articleName}`,s.innerHTML=`<span class="fw-bold">文章分類：</span>${e.articleCategory}`,d.innerHTML=`<span class="fw-bold">文章作者：</span>${e.articleAuther}`,m.innerHTML=`<span class="fw-bold">文章發布日期：</span>${e.articleCreatTime}`,u.innerHTML=`<span class="fw-bold">文章簡介：</span><p>${e.articleName}</p>`,p.innerHTML=`<img class="w-100 img-fluid mb-4 rounded" src="${e.articleCoverImg}" alt="article-img" />`,b.innerHTML=`<span class="fw-bold">文章內容：</span><p>${e.articleContent}</p>`,e.articlePublic?n.innerHTML='<span class="fw-bold">文章狀態：</span><a href="#" class="btn btn-success btn-sm">公開</a>':n.innerHTML='<span class="fw-bold">文章狀態：</span><a href="#" class="btn btn-secondary btn-sm">未公開</a>',c.addEventListener("click",r=>{r.preventDefault(),console.log(c),window.location.href=`admin-article-edit.html?id=${a}`})}).catch(function(t){console.log(t)});
