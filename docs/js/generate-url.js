// 遷移先のURLを配列で定義
const redirectUrls = [
    "https://amzn.to/4dXvzV6",
    "https://amzn.to/3MFx9yV",
    "https://amzn.to/4enSGYO",
    "https://amzn.to/3MIs492",
    "https://amzn.to/47mi8LT",
    "https://amzn.to/3AZFcnw",
    "https://amzn.to/4dRv9PX",
    "https://amzn.to/4e22k3j",
    "https://amzn.to/4elHOKC",
    "https://amzn.to/3B3xVmL",
    "https://amzn.to/3ZiiVeP",
    "https://amzn.to/3MHltLN",
    "https://amzn.to/4cYOXja",
    "https://amzn.to/4dX6AkA",
    "https://amzn.to/4gqYjXZ",
];

// ランダムな遷移先URLを取得する関数
function getRandomRedirectUrl() {
    const randomIndex = Math.floor(Math.random() * redirectUrls.length);
    return redirectUrls[randomIndex];
}

// 画像をクリックした時の処理
function redirectToRandomUrl() {
    const randomUrl = getRandomRedirectUrl();
    window.open(randomUrl, '_blank'); // 新しいタブで開く
    // window.location.href = randomUrl; // 現在のページを遷移させる
}