// referenze
var hambur = $(`.fa-bars`);
var mobileM = $(`.hamburger-menu`);
var xSimbol = $(`.fa-times`);
// tutti i link mobile
var linksMob = $(`.linkMob`);

// // METODO 1
// // METODO CHE AGISCE DIRETTAMENTE SU STYLE IN-LINE DISPLAY SENZA PASSARE DALLE CLASSI

// hambur.click(() => {
//   mobileM.show();
// });

// xSimbol.click(() => {
//   mobileM.hide();
// });

// // METODO 2
// // METODO SENZA ANIMAZIONI AGGIUNGENDO E TOGLIENDO CLASSI

// hambur.click(() => {
//     mobileM.addClass('show');
//   });

//   xSimbol.click(() => {
//     mobileM.removeClass('show');
//   });

// // METODO 3
// // UTILIZZARE LE TRANSIZIONI CHE PORTA Jquery IN SLIDE (inguardabile)
// hambur.click(() => {
//   mobileM.slideDown(2000);
//   mobileM.show();
// });

// xSimbol.click(() => {
//   mobileM.slideUp(2000);
// });

// // METODO 4
// // UTILIZZARE LE TRANSIZIONI CHE PORTA Jquery IN OPACITY

// hambur.click(() => {
//   mobileM.fadeIn();
//   mobileM.show();
// });

// xSimbol.click(() => {
//   mobileM.fadeOut();
// });

// METODO 5
// METODO CON SLIDE IN ATTRAVERSO CLASSI
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
