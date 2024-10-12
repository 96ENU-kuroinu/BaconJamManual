document.addEventListener("DOMContentLoaded", function () {
    const versionElements = document.querySelectorAll('#version');
    if (versionElements) {
        versionElements.forEach((versionElement) => {
            versionElement.textContent = "Ver 1.8.1";
        })
    }
});