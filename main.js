// referenze
var hambur = $(`.fa-bars`);
var mobileM = $(`.hamburger-menu`);
var xSimbol = $(`.fa-times`);
// tutti i link mobile
var linksMob = $(`.linkMob`);

// METODO SENZA ANIMAZIONI

// hambur.click(() => {
//     mobileM.addClass('show');
//   });

//   xSimbol.click(() => {
//     mobileM.removeClass('show');
//   });

// METODO CON SLIDE IN
hambur.click(() => {
  mobileM.addClass('show slide-left');
  mobileM.removeClass('slide-back');
});

xSimbol.click(() => {
  mobileM.removeClass('slide-left');
  mobileM.addClass('slide-back');
});

// FAR SI CHE IL CLICK SU UN QUALSIASI LINK MOBILE FACCIA CHIUDERE IL MENU
linksMob.click(() => {
  mobileM.removeClass('slide-left');
  mobileM.addClass('slide-back');
});
