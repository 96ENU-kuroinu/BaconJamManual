document.addEventListener("DOMContentLoaded", function () {
    var footerElement = document.getElementById('footer');
    footerElement.style.backgroundColor = '#95cf4a';
    footerElement.style.padding = '10px';

    // pタグを作成
    const p = document.createElement('p');
    p.style.justifyContent = 'center';
    p.style.alignItems = 'center';
    p.style.display = 'flex';

    // 最初のテキストノードを作成してpタグに追加
    const text1 = document.createTextNode('©');
    p.appendChild(text1);

    // aタグを作成
    const a = document.createElement('a');
    a.href = 'https://misskey.io/@96ENU'; // リンク先のURLを設定
    a.target = '_blank';

    // imgタグを作成してaタグに追加
    const img = document.createElement('img');
    img.src = './images/falhongcha-logo.png'; // 画像のURLを設定
    img.alt = 'サークルロゴ'; // 代替テキストを設定
    img.style.width = '150px';
    a.appendChild(img);

    // aタグをpタグに追加
    p.appendChild(a);

    // 最後のテキストノードを作成してpタグに追加
    const text2 = document.createTextNode(' 2024');
    p.appendChild(text2);

    footerElement.appendChild(p);

});