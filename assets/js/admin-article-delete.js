// 刪除文章
export function deleteArticle(api_url, dataId) {
    axios.delete(`${api_url}/articles/${dataId}`)
        .then(function (res) {
            alert('刪除成功!');
            location.reload();
        })
        .catch(error => {
            console.error('刪除失敗︰', error);
        });
}
