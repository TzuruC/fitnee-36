import"../sweetalert2.all-90bd8eba.js";import"../auth-2e0db44e.js";import{a as e}from"../config-afd6d7d3.js";function n(){d()}n();const r=document.querySelector(".js-coachList");let c=[];function d(){axios.get(`${e}/coaches?_expand=user`).then(function(t){c=t.data,console.log(c);let o="";c.forEach(a=>{o+=s(a)}),r.innerHTML=o}).catch(function(t){console.log(t)})}function s(t){return`
    <tr>
        <th scope="row">${t.id}</th>
        <td>${t.coachName}</td>
        <td>${t.user.email}</td>
        <td>${t.coachExp} 年</td>
        <td>${t.coachContact}</td>
        <td class="text-center">${t.coachAutherize?"通過":"未通過"}</td>
        <td class="text-center"><a href="admin-coach-detail.html?id=${t.id}" class="link-primary">查看</a></td>
    </tr>
    `}