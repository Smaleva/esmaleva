var link  = document.querySelector('.login');
var modal = document.querySelector('.auth-window');
var closeModal = document.querySelector('.close-window');

link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle('open');
});

closeModal.addEventListener('click', function() {
    modal.classList.remove('open');
});