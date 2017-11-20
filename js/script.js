var link  = document.querySelector('.login');
var modal = document.querySelector('.auth-window');
var closeModal = document.querySelector('.close-window');

link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle('open');
    document.querySelector('body').classList.toggle('shadow');
});

closeModal.addEventListener('click', function() {
    modal.classList.remove('open');
    document.querySelector('body').classList.remove('shadow');
});