function calc() {

  // chiedo quanto lo usa
  var t = document.getElementById('t').value;

  // chiedo qual'è il consumo dichiarato
  var kw = document.getElementById('w').value;

  // quando viene usato?
  var radios = document.getElementsByName('momento');

    for (var i = 0, length = radios.length; i < length; i++)
    {
     if (radios[i].checked)
     {
      // do whatever you want with the checked radio
      // alert(radios[i].value);
      var m = (radios[i].value);

      // only one radio can be logically checked, don't check the rest
      break;
     }
    }

    if (m == 1) {
      var cc = 0.077;
    } else if (m == 0) {
      var cc = 0.064;
    } else {
      alert('Valore non accettato');
    }


  var r = cc * t * kw; // calcolo Costo Corrente x Tempo x KWh

  alert("Spederai " + r + " €"); // notifico l'utente

};
