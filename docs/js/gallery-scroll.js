document.querySelectorAll('.gallery-container').forEach(gallery => {
    const galleryWrapper = gallery.querySelector('.gallery-wrapper');
    const prevBtn = gallery.querySelector('.btn-left');
    const nextBtn = gallery.querySelector('.btn-right');
    const items = gallery.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function updateGallery() {
        const width = items[currentIndex].clientWidth;
        galleryWrapper.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // 循環させる場合は0にリセット
        }
        updateGallery();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // 循環させる場合は最後のアイテムへ
        }
        updateGallery();
    });

    window.addEventListener('resize', updateGallery);
});