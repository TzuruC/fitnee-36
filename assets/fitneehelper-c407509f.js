import"./main-82aaa405.js";const n=document.querySelector(".fn-welcome"),l=document.querySelector(".fn-on-traning");document.querySelector(".fitneehelper-app");fnAppHTML="";n.addEventListener("click",e=>{e.preventDefault(),e.target.getAttribute("id")==="startBtn"&&(n.classList.add("d-none"),l.classList.remove("d-none"),l.classList.add("d-block"),o())});function o(){d()}const i=document.querySelector(".js-renderTraining"),s=document.querySelector("#addTrainingBtn");let r=[];function d(){let e="";r.length==0&&(e=`
        <div class="no-train">
            <span class="mb-5 d-block fs-12">沒有儲存的訓練項目</span>
        </div>
        `),i.innerHTML=e}const a=document.querySelector(".add-new-train");s.addEventListener("click",e=>{e.preventDefault(),console.log(a);let t="";if(a){console.log("還有未儲存的訓練");return}else t+=`
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
                <select class="form-select" id="specificSizeSelect">
                    <option selected>選擇訓練部位</option>
                    <option value="1">手部</option>
                    <option value="2">腿部</option>
                    <option value="3">核心</option>
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
                        type="text" maxlength="2"
                        class="form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25" 
                        id="specificSizeInputName"
                        placeholder=""
                    />
                </div>
                <div class="col-2">
                    <label class="form-check-label text-start" for="autoSizingCheck2"> KG </label>
                </div>
                <div class="col-3 px-0">
                    <input
                        type="text" maxlength="2"
                        class="form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25"
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
                        class="mt-3 fs-6 py-2 btn btn-primary rounded-3 col-12"
                        href="index.html"
                    >
                        確定新增
                    </button>
                </div>
            </form>
        </div>
    </div>
        `;i.innerHTML=t;const c=document.querySelector(".js-trainName ");document.querySelector(".cancel-add-train"),c.focus()});