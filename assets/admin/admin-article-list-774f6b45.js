import"../main-e394583a.js";import{a as s}from"../config-f552c1ba.js";function u(){n()}u();const l=document.querySelector(".js-articleList");let i=[];function n(){axios.get(`${s}/articles`).then(function(t){i=t.data;let e="";i.forEach(a=>{e+=o(a)}),l.innerHTML=e,f(t)}).catch(function(t){console.log(t)})}function o(t){return`<tr>
        <th scope="row">${t.id}</th>
        <td>${t.articleName}</td>
        <td>${t.articleCategory}</td>
        <td>${t.articleAuther}</td>
        <td class="text-center">${t.articleCreatTime}</td>
        <td class="text-center">${t.articlePublic?"公開":"未公開"}</td>
        <td class="text-center">
        <a class="link-primary" data-id="${t.id}" href="admin-article-detail.html?id=${t.id}">查看</a> / 
        <a class="link-primary" data-id="${t.id}" href="">刪除</a></td>
    </tr>
    `}const d=document.querySelector(".admin-article-filter .form-select");function f(t){let e=[];i=t.data,i.forEach(c=>{e.push(c.articleCategory)});let a=[...new Set(e)],r='<option value="所有分類">- 所有分類 -</option>';a.forEach(c=>{r+=`
        <option value="${c}">${c}</option>        
        `}),d.innerHTML=r}d.addEventListener("change",t=>{t.preventDefault();const e=t.target.value;if(e=="所有分類"){n();return}let a="";i.forEach(r=>{r.articleCategory==e&&(a+=o(r))}),l.innerHTML=a});
