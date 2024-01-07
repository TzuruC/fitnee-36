import { api_url } from "./config.js";


// 渲染文章內容
// 取得文章 ID
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
// 渲染位置

// app.js



axios.get(`${api_url}/articles`)
  .then(function (res) {
    
    const articleData = res.data;
    
  })
  .catch(function (error) {
    console.log(error);
  })

