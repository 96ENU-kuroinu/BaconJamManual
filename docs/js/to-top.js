// ボタンの要素を取得
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// ボタンをクリックしたときにページを上にスクロールする
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // スムーズにスクロール
  });
};
