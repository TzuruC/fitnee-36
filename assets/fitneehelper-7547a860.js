import"./main-aa134d7c.js";import"./animation-2ea199e6.js";const g=document.querySelector(".fn-welcome"),b=document.querySelector(".fn-on-traning");document.querySelector(".fitneehelper-app");const u=document.querySelector(".js-renderTraining"),T=document.querySelector(".date-today"),h=new Date,x={year:"numeric",month:"2-digit",day:"2-digit"};T.textContent="今天日期︰"+h.toLocaleDateString("zh-TW",x);g.addEventListener("click",e=>{e.preventDefault(),e.target.getAttribute("id")==="startBtn"&&(g.classList.add("d-none"),b.classList.remove("d-none"),b.classList.add("d-block"),m())});function m(){s="",k(),u.innerHTML=s,setTimeout(()=>{j(u),E(u)},0)}let s="",f=[{content:"訓練名稱",target:"訓練部位",weight:"訓練重量",times:"單組訓練次數"},{content:"深蹲",target:"腿",weight:"40",times:"10"}];const S=document.querySelector("#addTrainingBtn");function k(){f.forEach((e,n)=>{s+=L(e,n)})}document.querySelector(".add-new-train");S.addEventListener("click",e=>{e.preventDefault(),s+=q(),u.innerHTML=s;const n=document.querySelector(".no-train");document.querySelector(".cancel-add-train").addEventListener("click",t=>{t.preventDefault(),m()}),setTimeout(()=>{n.classList.add("d-none");const t=document.querySelector(".js-trainName");t&&t.focus()},0),w()});function w(e){const n=document.querySelector(".js-addTrain"),a=document.querySelector(".js-trainName"),t=document.querySelector(".js-addTrainTarget"),o=document.querySelector(".js-addTrainWeight"),l=document.querySelector(".js-addTrainTimes");n.addEventListener("click",i=>{if(a.value==""){alert("請輸入訓練名稱");return}let r={};r.content=a.value,r.target=t.value,r.weight=o.value,r.times=l.value,f.push(r),m()})}function j(e){e.querySelectorAll(".js-deleteTrain").forEach(a=>{a.addEventListener("click",t=>{t.preventDefault();let o=t.target.getAttribute("data-id");f.splice(o,1),alert("刪除成功！"),m()})})}function q(){return`
    <div class="add-new-train mb-3 p-3 border border-secondary rounded-3">
    <div class="add-or-na mb-3 d-flex justify-content-between align-items-center">
        <span class="d-flex fs-6 text-start">
            <span class="material-symbols-outlined"> add </span> 
            <span class="">新的訓練項目</span>
        </span>
        <a href="#" class="cancel-add-train material-symbols-outlined link-dark"> close </a>
    </div>
    <!-- 名稱 -->
    <input class="js-trainName mb-3 form-control border-primary border-4" type="text" placeholder="訓練項目名稱" />
    <!-- 訓練部位 -->
    <div class="row justify-content-center">
        <div class="col-9 mb-3">
            <label class="visually-hidden" for="specificSizeSelect">Preference</label>
            <select class="js-addTrainTarget form-select" id="specificSizeSelect">
                <option selected>選擇訓練部位</option>
                <option value="手部">手部</option>
                <option value="腿部">腿部</option>
                <option value="核心">核心</option>
            </select>
        </div>
        <div class="col-3 py-1 text-primary">
            
        </div>

        <form class="row gx-3 gy-2 align-items-center">
            <div class="col-2 px-0">
                <label class="form-check-label text-end" for="autoSizingCheck2"> 每組 </label>
            </div>
            <div class="col-3 px-0">
                <input
                    type="text" maxlength="2" onkeyup="value=value.replace(/[^0-9]/g,'')" onpaste="value=value.replace(/[^0-9]/g,'')" oninput="value=value.replace(/[^0-9]/g,'')"
                    class="js-addTrainWeight add-new-weight form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25" 
                    id="specificSizeInputName"
                    placeholder=""
                />
            </div>
            <div class="col-2">
                <label class="form-check-label text-start" for="autoSizingCheck2"> KG </label>
            </div>
            <div class="col-3 px-0">
                <input
                    type="text" maxlength="2" onkeyup="value=value.replace(/[^0-9]/g,'')" onpaste="value=value.replace(/[^0-9]/g,'')" oninput="value=value.replace(/[^0-9]/g,'')"
                    class="js-addTrainTimes add-new-times form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25"
                    id="specificSizeInputName"
                    placeholder=""
                />
            </div>
            <div class="col-2">
                <label class="form-check-label text-start" for="autoSizingCheck2"> 次 </label>
            </div>
            <div class="text-center">
                <button
                    type="button"
                    class="js-addTrain mt-3 fs-6 py-2 btn btn-primary rounded-3 col-12"
                    href="index.html"
                >
                    確定新增
                </button>
            </div>
        </form>
    </div>
</div>
    `}function L(e,n){return`    
        <div class="training-unit mb-3 border border-secondary rounded-3">
            <div class="add-or-na p-3 d-flex justify-content-between align-items-center">
                <span class="d-flex fs-6 text-start">
                <span class="trainig-toggler material-symbols-outlined"> stat_minus_1 </span><span class="">${e.content}</span>
                </span>                           
                <a class="js-deleteTrain delete-training-btn link-dark trainig-toggler material-symbols-outlined pe-auto" data-id="${n}"> DELETE </a> 
                </a>
            </div>
            <div class="row justify-content-center">
                <form class="row align-items-center">
                    <div class="squad-unit squad-finished p-3 d-flex justify-content-between align-items-center">
                        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <a class="js-finishedTrain js-startTimerBtn material-symbols-outlined text-primary">
                                radio_button_unchecked
                            </a>
                        </div>
                        <label class="form-check-label text-end" for="autoSizingCheck2"> 1 </label>
                        <input
                            type="text" maxlength="2"
                            class="form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25" 
                            id="specificSizeInputName"
                            placeholder="${e.weight}"
                        />
                        <label class="form-check-label text-start" for="autoSizingCheck2"> KG </label>
                        <input
                            type="text" maxlength="2"
                            class="form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25"
                            id="specificSizeInputName"
                            placeholder="${e.times}"
                        />
                        <label class="form-check-label text-start" for="autoSizingCheck2"> 次 </label>
                    </div>                    
                    <!-- 訓練組按鈕 -->
                    <div class="action-btns d-flex text-center p-3 justify-content-between">
                        <button
                            type="button"
                            class="fs-6 btn btn-primary rounded-3"
                            href="index.html"
                        >
                            完成訓練
                        </button>
                        <button
                            type="button"
                            class="fs-6 btn btn-outline-primary rounded-3"
                            href="index.html"
                        >
                            + 增加組數
                        </button>
                    </div>
                </form>
            </div>
        </div>
        `}function E(e){const n=e.querySelectorAll(".js-finishedTrain");e.querySelector(".js-breakModal"),n.forEach(a=>{a.addEventListener("click",t=>{t.preventDefault(),console.log(t.target),t.target.textContent="radio_button_checked"}),z()})}let d,I=30;function z(e){const n=document.querySelectorAll(".js-startTimerBtn"),a=document.querySelector("#defaultTime"),t=document.querySelector("#endBreak"),o=document.querySelector(".mathTimeBtn");function l(i){const r=parseInt(i),v=Date.now()+r*1e3;clearInterval(d),d=setInterval(function(){const p=Math.floor((v-Date.now())/1e3);if(p>=0){const y=Math.floor(p/60);let c=p%60;c=c<10?"0"+c:c,a.innerText=`${y}:${c}`}else a.innerText="0:00",clearInterval(d)},16)}n.forEach(i=>{i.addEventListener("click",()=>{l(I)})}),t.addEventListener("click",i=>{clearInterval(d),l(0)}),o.addEventListener("click",i=>{const r=parseInt(a.innerText.split(":")[0])*60+parseInt(a.innerText.split(":")[1]);i.target.textContent=="+5 秒"?l(r+5):i.target.textContent=="-5 秒"&&l(Math.max(r-5,0))})}
