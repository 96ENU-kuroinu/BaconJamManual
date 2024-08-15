// すべてのdetails要素を取得
const allDetails = document.querySelectorAll('.details');

// 各details要素をループ処理
allDetails.forEach(details => {
    // summary要素を取得
    const summary = details.querySelector('.summary');

    // 各hr要素を取得
    const newHr = details.querySelector('.new');
    const changeHr = details.querySelector('.change');
    const fixHr = details.querySelector('.fix');

    // 表示用のシンボルを格納する変数
    let symbols = '';

    // hrタグの次に要素があればシンボルを追加
    if (newHr.nextElementSibling && newHr.nextElementSibling.tagName !== 'HR') symbols += '<span style="color: green;">●</span>';
    if (changeHr.nextElementSibling && changeHr.nextElementSibling.tagName !== 'HR') symbols += '<span style="color: orange;">●</span>';
    if (fixHr.nextElementSibling && fixHr.nextElementSibling.tagName !== 'HR') symbols += '<span style="color: red;">●</span>';

    // シンボルがあればsummaryに追加
    if (symbols) {
        summary.innerHTML += ' ' + symbols;
    }
});