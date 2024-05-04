
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });


  // Collapsable ribon in roles page
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
    

// JavaScript function
function toggleMore(sectionId, buttonTexts = {show: "More", hide: "Less"}, resetTime = 1000) {
  var moreText = document.getElementById(sectionId);
  var buttonText = document.querySelector('button[onclick^="toggleMore(\'' + sectionId + '\'"]');

  // Check the current state and toggle accordingly
  if (moreText.style.display === "none") {
      moreText.style.display = "block";
      buttonText.textContent = buttonTexts.hide; // Use "hide" text when showing content
      buttonText.style.backgroundColor = '#dc3545';
  } else {
      moreText.style.display = "none";
      buttonText.textContent = buttonTexts.show; // Use "show" text when hiding content
      buttonText.style.backgroundColor = '#dc3545';
  }

  // Optional: Reset the button color after a specified time
  setTimeout(function() {
      buttonText.style.backgroundColor = ''; // Remove the color style
      buttonText.blur(); // Optionally remove focus from the button
  }, resetTime); // Default 1000 milliseconds = 1 second
}

//press email
$(document).ready(function() {
  $('#submitEmail').click(function(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    console.log('Button clicked!');  // Debug: Log when the button is clicked
    var email = $('#emailInput').val();  // Get the email address from the input
    console.log('Email entered: ' + email);  // Debug: Log the email entered

    if (email) {  // Check if the email is not empty
      var apiUrl = 'https://mafia.mafiaenigma.com/mafia_game/v1/set_press/' + encodeURIComponent(email);
      $.ajax({
        url:  '/Home/ValidatePostcode',
        type: "GET",
        async: false,
        // data: JSON.stringify({ email_address: email }),
        contentType: 'application/json; charset=utf-8',
        success: function(response) {
          alert('Email submitted successfully!');
          $('#emailInput').val('');  // Clear the input field
        },
        error: function(xhr, status, error) {
          var errorMessage = xhr.status + ': ' + xhr.statusText
          console.log(xhr, status, error);
          alert('Error - ' + errorMessage);
      }
      });
    } else {
      alert('Please enter a valid email address.');
    }
  });
});
