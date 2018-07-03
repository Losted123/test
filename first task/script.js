
var button = document.querySelector('button');
var textHTML = document.querySelector('h2');
var flagJQ = new Boolean(false);
var flagStandard = new Boolean(false);

button.onclick = function() {
  buttonClicked("standard");
}

var buttonJQ = $( "#button-jq" ).button();
$( "#button-jq" ).on("click", function() { buttonClicked("jq") });


function buttonClicked(buttonType) {
  if (buttonType == "jq") {
    if (flagJQ == false) { 
      textHTML.innerHTML = "JQ button pressed";
      flagJQ = true;
    } else {
      textHTML.innerHTML = "JQ button unpressed";
      flagJQ = false;
    }
  } else if (buttonType == "standard") {
    if (flagStandard == false) { 
      textHTML.innerHTML = "Standard button pressed";
      flagStandard = true;
    } else {
      textHTML.innerHTML = "Standard button unpressed";
      flagStandard = false;
    }
  }
}


