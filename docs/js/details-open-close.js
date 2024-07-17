// すべての<details>タグを展開する関数
function openAllDetails() {
    document.querySelectorAll('details').forEach(detail => {
        detail.open = true;
    });
}

// ボタンをクリックしてすべて展開する
document.getElementById('openAllBtn').addEventListener('click', openAllDetails);

// すべての<details>タグを閉じる関数
function closeAllDetails() {
    document.querySelectorAll('details').forEach(detail => {
        detail.open = false;
    });
}

// ボタンをクリックしてすべて閉じる
document.getElementById('closeAllBtn').addEventListener('click', closeAllDetails);