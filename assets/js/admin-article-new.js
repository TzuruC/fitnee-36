import { api_url } from "./config.js";
import Swal from 'sweetalert2';


const title = document.querySelector("#articleTitle");
const category = document.querySelector("#articleType");
const author = document.querySelector("#articleAuthor");
const time = document.querySelector("#articleTime");
const brief = document.querySelector("#articleBrief");
const content = document.querySelector("#articleContent");
const newBtn = document.querySelector("#newArticle");



// 取得input內容
let articleData = {};
// post到json

newBtn.addEventListener("click", (e) => {
    e.preventDefault();
    articleData = {
        "articleName": title.value,
        "articleCategory": category.value,
        "articleAuther": author.value,
        "articleCreatTime": time.value,
        "articleBrief": brief.value,
        "articleContent": content.value,
    };
    axios.post(`${api_url}/articles`, articleData)
        .then(function (res) {
            Swal.fire({
                title: '新增成功',
                text: '確認後返回列表',
                icon: 'success',
                confirmButtonText: '確認',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-success py-3 px-10', // 設置確認按鈕的樣式
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'admin-article-list.html';
                }
            })
        })
        .catch(function (error) {
            console.error("發生錯誤:", error);
        });
})

