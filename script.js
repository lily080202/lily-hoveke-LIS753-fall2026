const button = document.getElementById("message-button");
const message = document.getElementById("message");

button.addEventListener("click", function() {
message.hidden = !message.hidden;
  if(!message.hidden){
    button.textContent = "Hide Message"
  } else{
    button.textContent = "Show Message"
  }
})