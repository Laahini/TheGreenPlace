$(".checkbox-dropdown").click(function () {
  $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function (e) {
  e.stopPropagation();
});

function showMore() {
  var els = document.getElementsByClassName('hidden');
  while (els[0]) {
    els[0].classList.remove('hidden');
  }
  var button = document.getElementById('showMoreBtn');
  button.classList.add('hidden');
}
