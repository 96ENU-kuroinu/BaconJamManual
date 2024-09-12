// 曜日リスト
const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

// data-date属性を持つすべての要素を取得
const dateElements = document.querySelectorAll('.formatted-date');

// 各要素に対して処理を行う
dateElements.forEach(element => {
    const yyyymmdd = element.getAttribute("data-date");

    // yyyymmdd形式の文字列をDateオブジェクトに変換
    const year = parseInt(yyyymmdd.substring(0, 4), 10);
    let month = parseInt(yyyymmdd.substring(4, 6), 10);
    let day = parseInt(yyyymmdd.substring(6, 8), 10);

    const date = new Date(year, month - 1, day);

    // 曜日を取得
    const dayOfWeek = daysOfWeek[date.getDay()];

    // 月と日を2桁ゼロ埋め
    month = String(month).padStart(2, '0');
    day = String(day).padStart(2, '0');

    // yyyy年<br>mm月dd日(曜日)形式に変換
    const formattedDate = `${year}年<br>${month}月${day}日(${dayOfWeek})`;

    // 変換結果を要素に表示 (HTML形式として挿入)
    element.innerHTML = formattedDate;
});