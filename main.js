// referenze
var hambur = $(`.fa-bars`);
var mobileM = $(`.hamburger-menu`);
var xSimbol = $(`.fa-times`);

console.log(hambur);

hambur.click(() => {
  mobileM.addClass('show');
});

xSimbol.click(() => {
  mobileM.removeClass('show');
});
