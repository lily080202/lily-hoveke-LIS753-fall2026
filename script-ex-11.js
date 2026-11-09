const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button) {



button.addEventListener("click", function () {

    // hide all details divs
    details.forEach(function (item) {
      item.hidden = true;
    });


    // Find and show the relevant program details
      // Find and show the relevant clicked program
        const targetId = button.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.hidden = false;
      }

      else {
        document.querySelector(".program-details").textContent = "Show Message";
      }

  });
  
});