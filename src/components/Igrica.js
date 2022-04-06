import React from 'react'

const Igrica = () => {
    const zamisljeniBroj = Math.floor(Math.random() * 101);
    let brojPokusaja=0;

    function provjeri (e) {
      e.preventDefault();
      if (document.getElementById('broj').value > zamisljeniBroj) {
        brojPokusaja++;
        document.getElementById('feedback').innerHTML = "Zamišljeni broj je manji od unesenog";
        document.getElementById('pokusaji').innerHTML= "Broj pokušaja: " + brojPokusaja;
      } else if (document.getElementById('broj').value < zamisljeniBroj) {
        brojPokusaja++;
        document.getElementById('feedback').innerHTML = "Zamišljeni broj je veći od unesenog";
        document.getElementById('pokusaji').innerHTML= "Broj pokušaja: " + brojPokusaja;
      } else {
        document.getElementById('feedback').innerHTML = `Čestitamo, pogodili ste broj iz ${brojPokusaja} pokušaja`;
        document.getElementById('pokusaji').innerHTML= "Broj pokušaja: " + brojPokusaja;
      }
    }
  return (
    <div>
        <form onSubmit={provjeri}>
            <input 
            type='number'
            id='broj'
            placeholder='Pogodite broj koji sam zamislio (0-100)'></input>
        </form>
        <div id="pokusaji">Broj pokušaja: 0</div>
        <div id="feedback"></div>
    </div>
  );
};

export default Igrica