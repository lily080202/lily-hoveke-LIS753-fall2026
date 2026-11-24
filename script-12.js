const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button) {



button.addEventListener("click", function () {

    // hide all details divs
    details.forEach(function(item) {
      item.hidden = true;
    });


    // Find and show the relevant program details
        const targetId = button.dataset.target;
        document.getElementById.apply(document, [targetId]).hidden = false;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.hidden = false;
      }
  });
  
});

const form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.querySelector("#name").value;
  const program = document.querySelector("#program").value;

  const message = "Thanks " + name + " for registering for " + program + " !"
  
  
  console.log(message);

  
});