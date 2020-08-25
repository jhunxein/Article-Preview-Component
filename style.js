const shareBtn = document.getElementById('btn-wrapper');
const popupWrapper = document.getElementById('social-popup');
// change btn color
const btnChange = document.getElementById('btn-share');
const btnChangeSvg = document.getElementById('share');

shareBtn.addEventListener('click', () => {
    popupWrapper.classList.toggle('open');
    btnChange.classList.toggle('btn-share-changed');
    btnChangeSvg.classList.toggle('share-changed');
});