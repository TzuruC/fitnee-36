import"../main-aa134d7c.js";import{a as r}from"../config-afd6d7d3.js";import{S as f}from"../sweetalert2.all-e5a31434.js";const v=new URLSearchParams(window.location.search),a=v.get("id"),o=document.querySelector("#articleTitle"),i=document.querySelector("#articleType"),l=document.querySelector("#articleAuthor"),n=document.querySelector("#articleTime"),u=document.querySelector("#articleBrief"),s=document.querySelector("#articleContent"),m=document.querySelector(".admin-article-img img"),h=document.querySelector("#doneEditBtn");let c={};axios.get(`${r}/articles/${a}`).then(function(t){const e=t.data;o.value=e.articleName,i.value=e.articleCategory,l.value=e.articleAuther,n.value=e.articleCreatTime,u.value=e.articleBrief,s.value=e.articleContent,m.src=e.articleCoverImg}).catch(function(t){console.log(t)});c={articleName:o.value,articleCategory:i.value,articleAuther:l.value,articleCreatTime:n.value,articleBrief:u.value,articleContent:s.value,articleCoverImg:m.src};h.addEventListener("click",t=>{t.preventDefault(),console.log(c),axios.patch(`${r}/articles/${a}`,c).then(function(e){f.fire({title:"修改成功",text:"確認後返回列表",icon:"success",confirmButtonText:"確認",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success py-3 px-10"}}).then(d=>{d.isConfirmed&&(window.location.href="admin-article-list.html")})}).catch(function(e){console.log(e)})});
