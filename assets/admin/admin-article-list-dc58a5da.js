import"../main-1f38e6a1.js";const d="http://localhost:3000",u="http://localhost:5173/fitnee-36";function f(){n()}f();const i=document.querySelector(".js-articleList");let c=[];function n(){axios.get(`${d}/articles`).then(function(t){c=t.data;let e="";c.forEach(a=>{e+=o(a)}),i.innerHTML=e,h(t)}).catch(function(t){console.log(t)})}function o(t){return`<tr>
        <th scope="row">${t.id}</th>
        <td>${t.articleName}</td>
        <td>${t.articleCategory}</td>
        <td>${t.articleAuther}</td>
        <td class="text-center">${t.articleCreatTime}</td>
        <td class="text-center">${t.articlePublic?"公開":"未公開"}</td>
        <td class="text-center">
        <a class="link-primary" data-id="${t.id}" href="${u}/pages/admin/admin-article-detail.html">編輯</a> / 
        <a class="link-primary" data-id="${t.id}" href="">刪除</a></td>
    </tr>
    `}const s=document.querySelector(".admin-article-filter .form-select");function h(t){let e=[];c=t.data,c.forEach(l=>{e.push(l.articleCategory)});let a=[...new Set(e)],r='<option value="所有分類">- 所有分類 -</option>';a.forEach(l=>{r+=`
        <option value="${l}">${l}</option>        
        `}),s.innerHTML=r}s.addEventListener("change",t=>{t.preventDefault();const e=t.target.value;if(e=="所有分類"){n();return}let a="";c.forEach(r=>{r.articleCategory==e&&(a+=o(r))}),i.innerHTML=a});
