var person = prompt("Welcome. What is your name?");
if (person != null) {
   var body = document.getElementById("user").innerHTML = 
    "Hello " + person + ". " + "How are you today?";
}