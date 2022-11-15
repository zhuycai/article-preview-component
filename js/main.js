let share = document.querySelector('.article-share');
let shareContentM = document.querySelector('.share-content-mobile');
let shareContentD = document.querySelector('.share-content-desktop');

share.addEventListener('click', function() {
    share.classList.toggle('dark-mode');
    shareContentM.classList.toggle('pull-up');
    shareContentD.classList.toggle('pull-up');
});
