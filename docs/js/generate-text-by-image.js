// Function to update the text content for all span elements based on their data-image attribute
function updateSpanText() {
    // Select all span elements with the class 'hover-text'
    const spanElements = document.querySelectorAll('.hover-text');

    // Loop through each span element and update its text content
    spanElements.forEach(spanElement => {
        // Get the data-image attribute value for the current span element
        const dataImage = spanElement.getAttribute('data-image');

        // Conditional logic to change text based on the data-image value
        let newText = '';
        switch (dataImage) {
            case 'images/display-server-select.png':
                newText = 'Misskeyサーバー選択画面';
                break;
            case 'images/display-setting.png':
                newText = '設定画面';
                break;
            case 'images/display-playlist-detail.png':
                newText = 'プレイリスト詳細画面';
                break;
            case 'images/display-playlists-2.png':
                newText = 'プレイリスト一覧画面';
                break;
            case 'images/display-playlists-1.png':
                newText = 'プレイリスト一覧画面';
                break;
            case 'images/display-main.png':
                newText = 'ホーム画面';
                break;
            case 'images/display-drawer.png':
                newText = 'ドロワー';
                break;
            case 'images/display-channel-select-2.png':
                newText = '投稿先チャンネル検索画面';
                break;
            case 'images/display-channel-select-1.png':
                newText = '投稿先チャンネル検索画面';
                break;
            case 'images/display-app-about.png':
                newText = 'アプリについての画面';
                break;
            case 'images/display-sample-mfm.png':
                newText = '作例画面';
                break;
        }

        // Update the text content of the current span element
        spanElement.textContent = newText;
    });
}

// Call the function to update the span texts on page load
window.onload = updateSpanText;