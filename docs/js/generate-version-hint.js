// 最初に見つかったsummary要素を取得
const firstSummary = document.querySelector('summary');

// summary要素が見つかった場合
if (firstSummary) {
    // テキストの先頭に🆕を追加
    firstSummary.innerHTML = '<span style="font-size: 1.5em;vertical-align: middle;">🆕</span>' + firstSummary.innerHTML;
}

// すべてのdetails要素を取得
const allDetails = document.querySelectorAll('.details');

// 各details要素をループ処理
allDetails.forEach(details => {
    // summary要素を取得
    const summary = details.querySelector('.summary');

    // 各hr要素を取得
    const newHr     = details.querySelector('.new');
    const changeHr  = details.querySelector('.change');
    const fixHr     = details.querySelector('.fix');

    // 表示用のシンボルを格納する変数
    let symbols = '';

    // 丸のコンテナのスタイル
    const containerStyle = `
        display: inline-flex; /* inline-blockからinline-flexに変更して、要素をフレックスボックスで揃える */
        align-items: center; /* 縦方向のセンタリング */
        background-color: ghostwhite;
        padding: 0 3px; /* 上下のpaddingを0にして左右だけにする */
        border-radius: 20px;
        margin-left: 10px;
        box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
        line-height: 1; /* 行の高さを1にして余白を減らす */
        float: right; /* 右寄せ */
    `;

    // 各シンボルのスタイル
    const circleStyle = 'margin-right: 2px; font-size: 1.5em; text-shadow: 1px 1px 2px #666666;';

    // hrタグの次に要素があればシンボルを追加
    symbols += `<span style="${circleStyle} color: ${newHr.nextElementSibling       && newHr.nextElementSibling.tagName     !== 'HR' ? 'green'  : 'black'};">●</span>`;
    symbols += `<span style="${circleStyle} color: ${changeHr.nextElementSibling    && changeHr.nextElementSibling.tagName  !== 'HR' ? 'orange' : 'black'};">●</span>`;
    symbols += `<span style="${circleStyle} color: ${fixHr.nextElementSibling       && fixHr.nextElementSibling.tagName     !== 'HR' ? 'red'    : 'black'};">●</span>`;

    // シンボルを1つの背景で囲んで追加
    if (symbols) {
        summary.innerHTML += ` <div style="${containerStyle}">${symbols}</div>`;
    }
});
