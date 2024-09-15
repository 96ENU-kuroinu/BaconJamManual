document.addEventListener("DOMContentLoaded", function () {
    const tocList = document.getElementById('toc-list');
    const h2Elements = document.querySelectorAll('h2');

    if (h2Elements) {
        h2Elements.forEach((h2, index) => {
            // 各h2にIDを追加
            const id = `section-${index + 1}`;
            h2.id = id;

            // リストアイテムとリンクを生成
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = '(' + (index + 1) + ') ' + h2.textContent;

            // リストアイテムにリンクを追加し、目次に追加
            li.appendChild(a);
            tocList.appendChild(li);

        });
    }
});