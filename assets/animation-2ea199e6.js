const e=document.querySelector(".nav-toggler span"),t=document.querySelector("#navGroup"),n=document.querySelector("#transNav");let s=0;const o=document.querySelector(".totop-btn");e.addEventListener("click",()=>{t.classList.toggle("d-none"),t.classList.toggle("fixed-top"),t.classList.add("bg-dark"),t.setAttribute("style","top:58px; height:100vh; transition: top 3s;"),e.textContent=e.textContent==="close"?"menu":"close"});document.addEventListener("scroll",l=>{s=window.scrollY,s>0?(n.classList.add("bg-dark-7"),o.classList.remove("d-none"),o.classList.add("d-fixed")):s==0&&(n.classList.remove("bg-dark-7"),o.classList.add("d-none"))});