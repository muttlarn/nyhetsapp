import React from 'react' ;
import Nyhetslistal from './Nyhetslista' ;



function Nyhetsartikel() {
    return(
    <article>
      <img src="https://source.unsplash.com/random/300x225/?cat" />
      <h2>Testnyhet</h2>
      <p>Beskrivning av testnyhet</p>
      <a>Läs mer</a>
    </article>
    );
}

export default Nyhetsartikel;