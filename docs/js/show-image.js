const textElements = document.querySelectorAll('.hover-text');
const imageElement = document.getElementById('hover-image');

textElements.forEach(textElement => {
  textElement.addEventListener('mouseover', (event) => {
    // テキストの data-image 属性から画像URLを取得
    const imageUrl = textElement.getAttribute('data-image');
    imageElement.src = imageUrl;

    // 画像を表示
    imageElement.style.display = 'block';

    // テキスト要素の位置を取得し、その位置に画像を表示
    const rect = textElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // 画像の位置をテキストの上に設定
    imageElement.style.top = `${rect.top + scrollTop - imageElement.offsetHeight}px`; // テキストの上に画像を表示
    imageElement.style.left = `${rect.left + scrollLeft}px`; // テキストの左端に合わせる

    // 徐々に画像を表示（透明度を0から1に変更）
    imageElement.style.opacity = '1';
  });

  textElement.addEventListener('mouseout', () => {
    // マウスが離れた時に画像を非表示にする
    imageElement.style.display = 'none';
    // 徐々に画像を非表示（透明度を1から0に変更）
    imageElement.style.opacity = '0';
  });
});
