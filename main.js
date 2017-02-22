//initialize parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

//this handles the scroll when you click on a menu item
$(document).ready(function(){
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//this hides and reveals the back to top button on desktop
$(document).ready(function() {
  //this is the height of the screen they are using, and will be a different value depending on their window size
  let windowHeight = window.innerHeight;
  var duration = 1000;


  $(window).scroll(function(){
    if ($(this).scrollTop() > windowHeight) {
      $('.homeButton').fadeIn(duration);
    } else {
      $('.homeButton').fadeOut(duration);
    }
  });
});
