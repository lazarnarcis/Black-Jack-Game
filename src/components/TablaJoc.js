import spateCarteImg from '../cardsImages/spate_carte.png';
import jetonValoare_empty from "../cardsImages/jeton_gol.png";

const spateCarte = spateCarteImg;

const TablaJoc = (
   {sumaCartiDealer,
    cartiDealer,
    esteTuraDealerului,
    blocheazaSumaMiza,
    sumaCartiJucator,
    cartiJucator,
    esteManaCompleta,
    castigatorul,
    esteJetonBlocat,
    mizaAnterioara
}) => {


    return (
        <div className="tabla-joc">
       { (esteManaCompleta || esteTuraDealerului) && <div className="scor-dealer">Carti Dealer - {sumaCartiDealer}</div>}
          <div className="carti-dealer">

            { esteTuraDealerului ? (cartiDealer?.map(carte =>
            <div key={carte.name} className="card">
            <img src={carte.img} alt="noPic" />
            </div>))
            :
            <div className="carti-dealer">
            <img src={cartiDealer[0]?.img} alt="c_d" />
              <img src={spateCarte} alt="spateCarte" />
            </div>
            }

      </div>

      { esteJetonBlocat && <p className="jeton-empty">
        <img src={jetonValoare_empty} alt="jeton_gol" />
        <span className="blockedSum">{blocheazaSumaMiza === 0 ? mizaAnterioara : blocheazaSumaMiza}</span>
        </p>}

        <p className="info-win">
            Anunt Castigator / pierzator
        </p>

      <div className="scor-dealer">Carti Jucator - {sumaCartiJucator}</div>
          <div className="carti-dealer">

            {cartiJucator?.map(carte =>
            <div key={carte.name} className="card">
            <img src={carte.img} alt="noPic"/>
            </div>)}

          </div>

      </div>

    )
}

export default TablaJoc;