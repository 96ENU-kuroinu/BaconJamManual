function createTable(releaseDate, installSize) {
    const table = document.createElement('table');
    table.className = 'table-design';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('td');
    headerCell.colSpan = '2';
    headerCell.className = 'title-start title-top-end';
    headerCell.innerText = '基本情報';
    headerRow.appendChild(headerCell);
    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');

    const releaseRow = document.createElement('tr');
    const releaseDateTitle = document.createElement('td');
    releaseDateTitle.className = 'title';
    releaseDateTitle.innerText = 'リリース日';
    const releaseDateDetail = document.createElement('td');
    releaseDateDetail.className = 'detail';
    releaseDateDetail.style.textAlign = 'center';
    const releaseDateDiv = document.createElement('div');
    releaseDateDiv.className = 'formatted-date';
    releaseDateDiv.innerText = formatDate(releaseDate);
    releaseDateDetail.appendChild(releaseDateDiv);
    releaseRow.appendChild(releaseDateTitle);
    releaseRow.appendChild(releaseDateDetail);
    tbody.appendChild(releaseRow);

    const installSizeRow = document.createElement('tr');
    const installSizeTitle = document.createElement('td');
    installSizeTitle.className = 'title-end';
    installSizeTitle.innerText = 'インストールサイズ';
    const installSizeDetail = document.createElement('td');
    installSizeDetail.className = 'detail-end';
    installSizeDetail.style.textAlign = 'center';
    const installSizeCode = document.createElement('code');
    installSizeCode.innerText = installSize;
    installSizeDetail.appendChild(installSizeCode);
    installSizeRow.appendChild(installSizeTitle);
    installSizeRow.appendChild(installSizeDetail);
    tbody.appendChild(installSizeRow);

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

function formatDate(dateStr) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6).padStart(2, '0');
    const day = dateStr.substring(6, 8).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.table-container');

    containers.forEach(container => {
        const releaseDate = container.getAttribute('data-release-date');
        const installSize = container.getAttribute('data-install-size');
        const table = createTable(releaseDate, installSize);
        container.appendChild(table);
    });
});
