// JavaScriptで最終更新日を取得し、日付オブジェクトに変換
let lastModified = new Date(document.lastModified);

// フォーマットされた日付を取得 (例: 2024年9月12日 10時30分)
let formattedDate = lastModified.getFullYear() + '年' +
    (lastModified.getMonth() + 1) + '月' +
    lastModified.getDate() + '日 ' +
    lastModified.getHours() + '時' +
    lastModified.getMinutes() + '分';

// フォーマットした日付を表示
document.getElementById('lastUpdated').innerText = '🆕最終更新：' + formattedDate;
document.getElementById('lastUpdated').style.color = 'white';
document.getElementById('lastUpdated').style.fontWeight = 'bold';