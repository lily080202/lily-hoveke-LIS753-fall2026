
const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the relevant program details
        const targetId = button.dataset.target;
        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            return;
        }

        // Check whether the selected details are currently hidden
        const isHidden = targetElement.hidden;

        // Hide all program details
        details.forEach(function(item) {
            item.hidden = true;
        });

        // Only show the selected details if they were previously hidden
        if (isHidden) {
            targetElement.hidden = false;
        }

    });

});


const form = document.querySelector("#registration-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const program = document.querySelector("#program").value;

  const message = "Thanks " + name + " for registering for " + program + " !";

  console.log(message);
  const confirmation = document.querySelector("#confirmation-message");
  
  confirmation.textContent = message;
  
  confirmation.hidden = false;
  
});
