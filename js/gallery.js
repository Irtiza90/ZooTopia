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

modal.querySelector('.close').onclick = () => { 
  modal.style.display = "none";
};

document.querySelectorAll('.img-modal').forEach(img => {
  img.addEventListener('click', function() {
    console.log(this);

    modalImg.src = this.querySelector('.image').src;
    modalCaption.innerHTML = this.querySelector('.modal-overlay').innerHTML;
    modal.style.display = "block";
  });
});