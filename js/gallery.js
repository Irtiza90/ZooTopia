function mobileMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const modal = document.getElementById("img-gallery-modal");
const modalImg = modal.querySelector('img');
const modalCaption = modal.querySelector('#caption');

function closeModal() {
  modal.style.display = "none";
  document.body.setAttribute('galley-open', false);
}

modal.querySelector('.close').onclick = closeModal;

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.querySelectorAll('.img-modal').forEach(img => {
  img.addEventListener('click', function() {
    modalImg.src = this.querySelector('.image').src;
    modalCaption.innerHTML = this.querySelector('.modal-overlay').innerHTML;
    modal.style.display = "block";

    document.body.setAttribute('galley-open', true);
  });
});
