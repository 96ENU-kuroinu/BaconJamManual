// 遷移先のURLを配列で定義
const redirectUrls = [
    "https://amzn.to/3AofBob",
    "https://amzn.to/3AZFcnw",
    "https://amzn.to/3B2Dly9",
    "https://amzn.to/3B3xVmL",
    "https://amzn.to/3B619kW",
    "https://amzn.to/3MFx9yV",
    "https://amzn.to/3MHltLN",
    "https://amzn.to/3MIs492",
    "https://amzn.to/3MJVXWp",
    "https://amzn.to/3MRMmgk",
    "https://amzn.to/3TRdpfN",
    "https://amzn.to/3TsdsOB",
    "https://amzn.to/3U32u2B",
    "https://amzn.to/3UNV1VB",
    "https://amzn.to/3XFKFbZ",
    "https://amzn.to/3XGbuwF",
    "https://amzn.to/3XHnUV0",
    "https://amzn.to/3XHt7fK",
    "https://amzn.to/3XIbrAx",
    "https://amzn.to/3XJnu0D",
    "https://amzn.to/3XnrRwM",
    "https://amzn.to/3Xsj0dm",
    "https://amzn.to/3XuB5aN",
    "https://amzn.to/3XXb4Rp",
    "https://amzn.to/3Yhg6tq",
    "https://amzn.to/3ze7GJT",
    "https://amzn.to/3ZiiVeP",
    "https://amzn.to/3ziLAFS",
    "https://amzn.to/3zjjhaw",
    "https://amzn.to/3ZJp2sX",
    "https://amzn.to/3zkigyS",
    "https://amzn.to/3ZmxRII",
    "https://amzn.to/3ZWs0ub",
    "https://amzn.to/47mi8LT",
    "https://amzn.to/47nZGCB",
    "https://amzn.to/47sCL9l",
    "https://amzn.to/47zHhTm",
    "https://amzn.to/481b73x",
    "https://amzn.to/4cYOXja",
    "https://amzn.to/4d6ZyIW",
    "https://amzn.to/4dRv9PX",
    "https://amzn.to/4dX6AkA",
    "https://amzn.to/4dXI5nm",
    "https://amzn.to/4dXvzV6",
    "https://amzn.to/4e0B9pG",
    "https://amzn.to/4e22k3j",
    "https://amzn.to/4eEUcG7",
    "https://amzn.to/4eGskBI",
    "https://amzn.to/4ek7ozV",
    "https://amzn.to/4elHOKC",
    "https://amzn.to/4enSGYO",
    "https://amzn.to/4fh0zQ3",
    "https://amzn.to/4gpfclx",
    "https://amzn.to/4gqijcZ",
    "https://amzn.to/4gqYjXZ",
    "https://amzn.to/4gv3BBB",
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