import"../main-9ae5eee9.js";const a="http://localhost:3000";function n(){d()}n();const r=document.querySelector(".js-coachList");let c=[];function d(){axios.get(`${a}/coaches?_expand=user`).then(function(t){c=t.data,console.log(c);let o="";c.forEach(e=>{o+=h(e)}),r.innerHTML=o}).catch(function(t){console.log(t)})}function h(t){return`
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
