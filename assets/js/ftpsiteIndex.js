function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabsM");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  console.log( tablinks);
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


function openLink(evt, animName) {
  var i, x, tablinks2;
  x = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablink2");
  for (i = 0; i < x.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" w3-red", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


