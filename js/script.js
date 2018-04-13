//hamburger menu

$(document).ready(function() {

  $(".cross").hide();
  $(".menu-hamburger").hide();
  $(".hamburger").click(function() {
    $(".menu-hamburger").slideToggle("slow", function() {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function() {
    $(".menu-hamburger").slideToggle("slow", function() {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

});

//show&hide search

const button = document.getElementById("button"),
  search = document.getElementById("search");

button.addEventListener("click", function() {
  if (search.style.display == 'none') {
    search.style.display = 'block';
  } else {
    search.style.display = 'none';
  }
}, false);

//change customer Review
