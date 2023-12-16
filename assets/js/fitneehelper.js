const fnWelcome = document.querySelector('.fn-welcome');
const fnOnTraning = document.querySelector('.fn-on-traning');
const fitneehelperApp = document.querySelector('.fitneehelper-app');
const renderTraining = document.querySelector('.js-renderTraining');
const dateToday = document.querySelector('.date-today');


// 更新歡迎頁日期
const today = new Date();
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
dateToday.textContent = "今天日期︰" + today.toLocaleDateString('zh-TW', options);

// 歡迎頁面
fnWelcome.addEventListener('click', (e)=>{
    e.preventDefault();
    let getId = e.target.getAttribute('id');
    if(getId === "startBtn"){
        fnWelcome.classList.add('d-none');
        fnOnTraning.classList.remove('d-none');
        fnOnTraning.classList.add('d-block');
        init();
    }    
});

function init(){    
    combineFnAppHTML = ``;
    renderTotoData();      
    renderTraining.innerHTML = combineFnAppHTML;
    setTimeout(() => {
        deleteTrain(renderTraining);
        breakTriggerer(renderTraining);
    }, 0);
    
}

let combineFnAppHTML = ``; // 負責呈現APP內容
// 讀取訓練項目
function startTraining(){
    fitneehelperApp.innerHTML = fnAppHTML;
}
function resetRenderTraining(){
    renderTraining.innerHTML = ``;
}
// 成功新增後渲染在列表
let trainingData = []; // 已儲存在資料庫的訓練項目
let onTrainingData = [ // 在畫面上暫存的項目
    {
        "content":"訓練名稱",
        "target":"訓練部位",
        "weight":"訓練重量",
        "times":"單組訓練次數"
    },{
        "content":"深蹲",
        "target":"腿",
        "weight":"40",
        "times":"10"
    }
];
// 新增訓練項目
const addTrainingBtn = document.querySelector('#addTrainingBtn');

function emptyTrainHint(renderTraining){
    if(trainingData.length == 0 && onTrainingData.length == 0 && !addNewTrain){
        combineFnAppHTML =  `
        <div class="no-train">
            <span class="mb-5 d-block fs-12">沒有儲存的訓練項目</span>
        </div>
        `;}
}

function renderTotoData(){
    onTrainingData.forEach((i,index)=>{
        combineFnAppHTML += renderTotoHTML(i,index);
    });
}
// 點擊新增時增加一組 pattern
const addNewTrain = document.querySelector('.add-new-train');
addTrainingBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    combineFnAppHTML += renderAddingHTML();
    renderTraining.innerHTML = combineFnAppHTML;
    const emptyTrainHinter = document.querySelector('.no-train');
    const cancelAddingTrain = document.querySelector('.cancel-add-train');
    cancelAddingTrain.addEventListener('click',(e)=>{
        e.preventDefault();
        init();
    });
    // 內容渲染完成後設 focus
    setTimeout(() => {
        emptyTrainHinter.classList.add('d-none');
        const trainName = document.querySelector('.js-trainName');
        if (trainName) {
            trainName.focus();
        }
    }, 0);
    submitTrain(renderTraining);
});
// 新增訓練項目
function submitTrain(renderTraining){
    const addTrain = document.querySelector(".js-addTrain");
    const addTrainName = document.querySelector(".js-trainName");
    const addTrainTarget = document.querySelector(".js-addTrainTarget");
    const addTrainWeight = document.querySelector(".js-addTrainWeight");
    const addTrainTimes = document.querySelector(".js-addTrainTimes");
    
    addTrain.addEventListener("click",(e) => {
        if(addTrainName.value == ""){
            alert("請輸入訓練名稱");
            return;
        }
        // 加入資料
        let obj = {};
        obj.content = addTrainName.value;
        obj.target = addTrainTarget.value;
        obj.weight = addTrainWeight.value;
        obj.times = addTrainTimes.value;
        onTrainingData.push(obj);   
        //重新渲染 
        init(); 
    });
}
// 刪除訓練項目
function deleteTrain(renderTraining){    
    const deleteTrain = renderTraining.querySelectorAll(".js-deleteTrain");
    deleteTrain.forEach((item)=>{
        item.addEventListener("click",(e) => {
        e.preventDefault();
        let trainId = e.target.getAttribute("data-id");
        onTrainingData.splice(trainId,1);
        alert("刪除成功！");
        init();
        });
    });
}



//---以下是渲染架構---
function renderAddingHTML(){
    return `
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
    `;
}
function renderTotoHTML(i,index){
    return `    
        <div class="training-unit mb-3 border border-secondary rounded-3">
            <div class="add-or-na p-3 d-flex justify-content-between align-items-center">
                <span class="d-flex fs-6 text-start">
                <span class="trainig-toggler material-symbols-outlined"> stat_minus_1 </span><span class="">${i.content}</span>
                </span>                           
                <a class="js-deleteTrain delete-training-btn link-dark trainig-toggler material-symbols-outlined pe-auto" data-id="${index}"> DELETE </a> 
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
                            placeholder="${i.weight}"
                        />
                        <label class="form-check-label text-start" for="autoSizingCheck2"> KG </label>
                        <input
                            type="text" maxlength="2"
                            class="form-control rounded-pill input-bg-25 text-center fw-bold bg-primary bg-opacity-25"
                            id="specificSizeInputName"
                            placeholder="${i.times}"
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
        `;
}
function renderBreakModalHTML(){
    return `
    <div class="js-breakModal m-0 modal fade modal-dialog modal-dialog-centered d-none" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog fixed-top">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">組間休息倒數</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center justify-content-between">
            <span id="defaultTime" class="js-countdown fs-1 fw-bold">
                1:00
            </span>
        </div>
        <div class="mathTimeBtn modal-footer text-center justify-content-between">
            <button type="button" id="breakPlus5" class="btn btn-outline-primary">-5 秒</button>
            <button type="button" id="endBreak" class="btn btn-primary" data-bs-dismiss="modal">結束休息</button>
            <button type="button" id="breakMinus5" class="btn btn-outline-primary">+5 秒</button>
        </div>
    </div>
    </div>
    </div>
    `;
}

// 觸發休息計時
function breakTriggerer(renderTraining){
    // 核取動畫
    const finishedTrain = renderTraining.querySelectorAll(".js-finishedTrain");
    const breakModal = renderTraining.querySelector(".js-breakModal");
    
    finishedTrain.forEach((item)=>{
        item.addEventListener("click",(e) => {
            e.preventDefault();
            console.log(e.target);
                e.target.textContent = 'radio_button_checked';
        });
        // 跳出計時器
        countdownBreak(renderTraining);
    });
    
};
let timer;
let defaultCD = 10;
function countdownBreak(renderTraining){
    const startTimerBtn = document.querySelectorAll(".js-startTimerBtn");
    const defaultTime = document.querySelector("#defaultTime");
    const endBreak = document.querySelector("#endBreak");
    const mathTimeBtn = document.querySelector(".mathTimeBtn");

    function setTimer(time) {
    // 帶入開始的總秒數
    const sec = parseInt(time);
    // 開始倒數
    const now = Date.now();
    const end = now + sec * 1000;
    // 倒數計時
    clearInterval(timer);  

    timer = setInterval(function() {
    const secLeft = Math.floor((end - Date.now()) / 1000);
    if (secLeft >= 0) {      
        const displayMin = Math.floor(secLeft / 60);
        let displaySec = secLeft % 60;
        displaySec = displaySec < 10 ? "0" + displaySec : displaySec;
        defaultTime.innerText = `${displayMin}:${displaySec}`;
    } else {
        defaultTime.innerText = `0:00`;
        clearInterval(timer);
    }
    }, 16); //16=偵數  
    };

    startTimerBtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            setTimer(defaultCD);
          }); 
    });   

    // //結束休息
    endBreak.addEventListener('click',(e)=>{
        clearInterval(timer);
        setTimer(0);
    });

    // +5, -5 按鈕
    mathTimeBtn.addEventListener("click", (e)=>{
    const currentValue = parseInt(defaultTime.innerText.split(":")[0]) * 60 +
                        parseInt(defaultTime.innerText.split(":")[1]);
    if(e.target.textContent == "+5 秒"){
        setTimer(currentValue + 5);
    }else if(e.target.textContent == "-5 秒"){
        setTimer(Math.max(currentValue - 5, 0)); // 確保計時器不會低於0
    }
    });
}