const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button) {



button.addEventListener("click", function () {

    // hide all details divs
    details.forEach(function (item) {
      item.hidden = true;
    });


    // Find and show the relevant program details
      const targetId = button.dataset.target;
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.hidden = false;
      }

  });
  
});