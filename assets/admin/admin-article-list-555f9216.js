import"../main-9ae5eee9.js";const s="http://localhost:3000";function u(){n()}u();const l=document.querySelector(".js-articleList");let c=[];function n(){axios.get(`${s}/articles`).then(function(t){c=t.data;let e="";c.forEach(a=>{e+=o(a)}),l.innerHTML=e,f(t)}).catch(function(t){console.log(t)})}function o(t){return`<tr>
        <th scope="row">${t.id}</th>
        <td>${t.articleName}</td>
        <td>${t.articleCategory}</td>
        <td>${t.articleAuther}</td>
        <td class="text-center">${t.articleCreatTime}</td>
        <td class="text-center">${t.articlePublic?"公開":"未公開"}</td>
        <td class="text-center">
        <a class="link-primary" data-id="${t.id}" href="admin-article-detail.html?id=${t.id}">編輯</a> / 
        <a class="link-primary" data-id="${t.id}" href="">刪除</a></td>
    </tr>
    `}const d=document.querySelector(".admin-article-filter .form-select");function f(t){let e=[];c=t.data,c.forEach(i=>{e.push(i.articleCategory)});let a=[...new Set(e)],r='<option value="所有分類">- 所有分類 -</option>';a.forEach(i=>{r+=`
        <option value="${i}">${i}</option>        
        `}),d.innerHTML=r}d.addEventListener("change",t=>{t.preventDefault();const e=t.target.value;if(e=="所有分類"){n();return}let a="";c.forEach(r=>{r.articleCategory==e&&(a+=o(r))}),l.innerHTML=a});
