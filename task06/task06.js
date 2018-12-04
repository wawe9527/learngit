function myFunction01() {
    document.getElementById("myDropdown-1").classList.toggle("show");
}

function myFunction02() {
    document.getElementById("myDropdown-2").classList.toggle("show");
}

function myFunction03() {
    document.getElementById("myDropdown-3").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }