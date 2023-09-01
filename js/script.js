document.querySelector('.icon-menu').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.menu__body').classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
   console.log('sucsecc');
});

function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();