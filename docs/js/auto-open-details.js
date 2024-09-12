document.addEventListener('DOMContentLoaded', function () {
    // URLからアンカーを取得
    const hash = window.location.hash;

    // アンカーが存在する場合
    if (hash) {
        // すべての<details>タグを閉じる
        document.querySelectorAll('details').forEach(detail => {
            detail.open = false;
        });

        // ハッシュから '#' を取り除く
        const id = hash.substring(1);

        // 対応する details 要素を取得
        const detailsElement = document.getElementById(id);

        // details 要素が存在し、まだ開いていない場合
        if (detailsElement && !detailsElement.open) {
            detailsElement.open = true; // details を開く
        }
    }
});