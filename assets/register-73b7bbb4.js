import{S as o}from"./main-76cd2f60.js";import"./animation-2ea199e6.js";import"./auth-4e215fa2.js";import{a as m}from"./config-afd6d7d3.js";const u=document.querySelector("#registMail"),d=document.querySelector("#registName"),f=document.querySelector("#registPhone"),r=document.querySelector("#registPsw"),g=document.querySelector("#registConfirmPsw"),p=document.querySelector("#registBtn"),i=document.querySelector(".register-form"),a=document.querySelectorAll("input[name]"),c={電子信箱:{presence:{message:"為必填欄位"},email:{message:"格式錯誤"}},會員姓名:{presence:{message:"為必填欄位"}},聯絡電話:{presence:{message:"為必填欄位"}},密碼:{presence:{message:"為必填欄位"},length:{minimum:8,message:"需超過 8 碼"}},確認密碼:{presence:{message:"為必填欄位"},equality:{attribute:"密碼",message:"與密碼不符"}}};function s(){r.value="",g.value=""}s();function S(n){n.nextElementSibling.textContent="";let t=validate(i,c)||"";t&&(Object.keys(t).forEach(function(e){document.querySelector(`[data-message="${e}"]`).textContent=t[e]}),s())}a.forEach(n=>{n.addEventListener("change",function(){n.nextElementSibling.textContent="";let t=validate(i,c)||"";t&&Object.keys(t).forEach(function(e){document.querySelector(`[data-message="${e}"]`).textContent=t[e]})})});p.addEventListener("click",function(n){n.preventDefault();const t={email:u.value,password:r.value,name:d.value,contact:f.value,role:"user"};axios.post(`${m}/users`,t).then(function(e){o.fire({title:"註冊成功",text:"請重新登入",icon:"success"}),setTimeout(()=>{window.location.href="member-login.html"},0)}).catch(function(e){console.log(e.response.data),e.response.data=="Email already exists"?(o.fire({title:"註冊失敗",text:"此 Email 已經註冊",icon:"error",confirmButtonText:"確認"}),s()):(e.response.data=="Email and password are required"||e.response.data=="Email format is invalid"||e.response.data=="Password is too short")&&(a.forEach(l=>{S(l)}),o.fire({title:"資料送出失敗",text:"請檢查填寫資料",icon:"warning",confirmButtonText:"確認"}),s())})});
