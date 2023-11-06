function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = showMeText;
    alert("Leen Mobarki: " + showMeText);
  }

  button.addEventListener('click', showMeText);
  }
  
window.addEventListener('load', init);
