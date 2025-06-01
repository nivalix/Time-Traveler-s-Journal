document.querySelectorAll('.info-box').forEach(box => {
    box.addEventListener('click', () => {
        const content = box.nextElementSibling;
        const arrow = box.querySelector('.arrow');

        content.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});