const fnWelcome = document.querySelector('.fn-welcome');
const fnOnTraning = document.querySelector('.fn-on-traning');
const fitneehelperApp = document.querySelector('.fitneehelper-app');

fnAppHTML = ``; // 負責呈現APP內容

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
    getTrainings();
}

// 讀取訓練項目
function startTraining(){
    fitneehelperApp.innerHTML = fnAppHTML;
}

// 新增訓練項目
const renderTraining = document.querySelector('.js-renderTraining');
const addTrainingBtn = document.querySelector('#addTrainingBtn');

let trainingData = [];
function getTrainings(){
    let str = ``;
    if(trainingData.length == 0){
        str =  `
        <div class="no-train">
            <span class="mb-5 d-block fs-12">沒有儲存的訓練項目</span>
        </div>
        `;
    }
    renderTraining.innerHTML = str;
}

// 點擊新增時增加一組 pattern
const addNewTrain = document.querySelector('.add-new-train');
addTrainingBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(addNewTrain);
    let str = ``;
    if(addNewTrain){
        console.log("還有未儲存的訓練");
        return; // 有一組空 pattern 存在時不要繼續渲染多的空 pattern
    }else{
        str += `
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
        `;
    }
    renderTraining.innerHTML = str;
    const trainName = document.querySelector('.js-trainName ');
    const cancelAddingTrain = document.querySelector('.cancel-add-train')
    trainName.focus();
});

