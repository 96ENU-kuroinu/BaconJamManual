// ページが読み込まれたときに実行される関数
window.onload = function () {
    // URLのハッシュ部分を取得
    const hash = window.location.hash;

    // ハッシュ部分が空でない場合
    if (hash) {
        // ハッシュに対応する要素を取得
        const targetElement = document.getElementById(hash.substring(1));

        // 要素が見つかった場合
        if (targetElement) {
            // 要素のsummary要素を取得
            const summaryElement = targetElement.querySelector('summary');

            // summary要素をクリックしてdetailsを開く
            summaryElement.click();
        } else {
            console.error('not found');
        }
    }
};