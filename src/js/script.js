$ = require('jquery');

function init() {
  dropMenu()
}

function dropMenu () {
  $(".drop, #dropbox > div").mouseenter ( 
    function () {
    $(".drop").addClass("active");
  });
  $(".drop, #dropbox > div").mouseleave ( 
    function () {
    $(".drop").removeClass("active");
  });
}

$(document).ready(init);