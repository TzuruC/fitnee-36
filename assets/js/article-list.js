const api_url="http://localhost:3000";

// 畫面初始化
function init(){
  getArticles();
};
init();

// 取得文章列表
const rendercards = document.querySelector('.render-cards');
let articleData = [];
function getArticles(){
  axios.get(`${api_url}/articles`)
  .then(function (res) {
    articleData = res.data;
    let str = ``;
    articleData.forEach((i) => {
        str += renderArticleHTML(i);
    });
    rendercards.innerHTML = `
    <ul class="article-cards list-unstyled pb-lg-7 row">
    ${str}
    </ul>
        
        <nav aria-label="Page navigation example col-lg-12">
          <ul class="pagination m-lg-0 py-lg-0 py-7 justify-content-end align-items-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span class="material-symbols-outlined align-text-bottom">
                  chevron_left
                  </span>
              </a>
            </li>
            <li class="page-item"><a class="page-link mx-1" href="#">1</a></li>
            <li class="page-item"><a class="page-link mx-1" href="#">2</a></li>
            <li class="page-item"><a class="page-link mx-1" href="#">...</a></li>
            <li class="page-item"><a class="page-link mx-1" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span class="material-symbols-outlined align-text-bottom">
                  chevron_right
                  </span>
              </a>
            </li>
          </ul>
        </nav>`;
  })
  .catch(function (error) {
    console.log(error);
  })
}

function renderArticleHTML(i) {
  return `
  <li class="article-card mb-7 aos-init aos-animate col-4" data-aos="flip-left" data-aos-delay="250" data-aos-once="true">
  <a href="article-detail.html?id=${i.id}">
    <img class="rounded w-100" src="${i.articleCoverImg}" alt="${i.articleName}">  
    <div class="article-caption mt-6 text-dark link-dark">
        <h4 class="mb-2 fs-4 link-dark">${i.articleName.substring(0, 12)}</h4>
        <p class="mb-2 fs-5 text-dark">${i.articleBrief.substring(0, 28)}...</p>
        <p class="fs-5 text-dark mb-0">${i.articleCreatTime}</p>            
    </div>          
  </a>
</li>
      `;
}