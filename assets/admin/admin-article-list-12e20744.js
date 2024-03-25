import{a as f}from"../auth-0f4bca45.js";import{a as l}from"../config-f552c1ba.js";let n;function m(){s()}m();const o=document.querySelector(".js-articleList");let c=[];function s(){axios.get(`${l}/articles`).then(function(t){c=t.data;let e="";c.forEach(r=>{e+=d(r)}),o.innerHTML=e,h(t)}).then(function(t){n=document.querySelectorAll(".delete-btn"),n.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const a=e.getAttribute("data-id");g(a)})})}).catch(function(t){console.log(t)})}function d(t){return`<tr>
        <th scope="row">${t.id}</th>
        <td>${t.articleName}</td>
        <td>${t.articleCategory}</td>
        <td>${t.articleAuther}</td>
        <td class="text-center">${t.articleCreatTime}</td>
        <td class="text-center">${t.articlePublic?"公開":"未公開"}</td>
        <td class="text-center">
        <a class="link-primary" data-id="${t.id}" href="admin-article-detail.html?id=${t.id}">查看</a> / 
        <a class="delete-btn link-primary" data-id="${t.id}" href="">刪除</a></td>
    </tr>
    `}const u=document.querySelector(".admin-article-filter .form-select");function h(t){let e=[];c=t.data,c.forEach(i=>{e.push(i.articleCategory)});let r=[...new Set(e)],a='<option value="所有分類">- 所有分類 -</option>';r.forEach(i=>{a+=`
        <option value="${i}">${i}</option>        
        `}),u.innerHTML=a}u.addEventListener("change",t=>{t.preventDefault();const e=t.target.value;if(e=="所有分類"){s();return}let r="";c.forEach(a=>{a.articleCategory==e&&(r+=d(a))}),o.innerHTML=r});function g(t){axios.delete(`${l}/articles/${t}`).then(function(e){f.fire({title:"刪除成功",text:"確認後返回列表",icon:"success",confirmButtonText:"確認",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success py-3 px-10"}}).then(r=>{r.isConfirmed&&location.reload()})}).catch(e=>{console.error("刪除失敗︰",e)})}
