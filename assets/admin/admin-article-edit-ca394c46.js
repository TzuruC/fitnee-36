import{a as f}from"../auth-5ce1de3b.js";import{a as o}from"../config-afd6d7d3.js";const v=new URLSearchParams(window.location.search),i=v.get("id"),S=document.querySelector("#articleTitle"),g=document.querySelector("#articleType"),h=document.querySelector("#articleAuthor"),q=document.querySelector("#articleTime"),C=document.querySelector("#articleBrief"),p=document.querySelector("#articleContent"),a=document.querySelector(".admin-article-img img"),T=document.querySelector("#doneEditBtn");let c={};axios.get(`${o}/articles/${i}`).then(function(t){const e=t.data;S.value=e.articleName,g.value=e.articleCategory,h.value=e.articleAuther,q.value=e.articleCreatTime,C.value=e.articleBrief,p.value=e.articleContent,a.src=e.articleCoverImg}).catch(function(t){console.log(t)});T.addEventListener("click",t=>{t.preventDefault();const e=document.querySelector("#articleTitle").value,l=document.querySelector("#articleType").value,n=document.querySelector("#articleAuthor").value,u=document.querySelector("#articleTime").value,s=document.querySelector("#articleBrief").value,m=document.querySelector("#articleContent").value,d=document.querySelector(".admin-article-img img").src;c={articleName:e,articleCategory:l,articleAuther:n,articleCreatTime:u,articleBrief:s,articleContent:m,articleCoverImg:d},console.log(c),axios.patch(`${o}/articles/${i}`,c).then(function(r){console.log(a.src),f.fire({title:"修改成功",text:"確認後返回列表",icon:"success",confirmButtonText:"確認",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success py-3 px-10"}}).then(y=>{y.isConfirmed&&(window.location.href="admin-article-list.html")})}).catch(function(r){console.log(r)})});
