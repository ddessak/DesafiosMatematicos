function convert(temperatura) {
    var conversor;
    if (temperatura == "C") {
      conversor = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value =  Math.round(conversor);
    }  
    else {
      conversor = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value=  Math.round(conversor);
    }
  }