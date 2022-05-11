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
    mizaAnterioara,
    esteBlackJack,
    esteDublaj,
    esteDealerulPrins,
    estePlayerulPrins
}) => {


    return (
        <div className="tabla-joc">
       { (esteManaCompleta || esteTuraDealerului)  && <div className="scor-dealer">Carti Dealer - {sumaCartiDealer}</div>}
          <div className="carti-dealer">

            { esteTuraDealerului ? (cartiDealer?.map((carte,index) =>
            <div key={index} className="card">
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
      {castigatorul && <span className="info-win">
        {castigatorul === "Jucatorul 1" && esteBlackJack ? `BlackJack! Jucatorul 1 castiga ${mizaAnterioara + mizaAnterioara * 1.5} jetoane`
        : castigatorul === "Jucatorul 1" && esteDublaj ? `Jucatorul 1 a dublat si castiga ${mizaAnterioara * 4} jetoane`
        :castigatorul === "Jucatorul 1" && esteDealerulPrins ? `Dealer prins! Jucatorul 1 castiga ${mizaAnterioara * 2} jetoane`
        :castigatorul === "Dealerul" && esteDublaj ? `Jucatorul 1 a dublat si a pierdut ${mizaAnterioara * 2} jetoane`
        :castigatorul === "Dealerul" && esteBlackJack ? `Dealer BlackJack! Jucatorul 1 a pierdut ${mizaAnterioara} jetoane`
        :castigatorul === "Dealerul" && estePlayerulPrins && esteDublaj ? `Jucatorul 1 prins pe dublaj. Pierde ${mizaAnterioara * 2} jetoane`
        :castigatorul === "Dealerul" && estePlayerulPrins ? `Jucatorul 1 prins. Pierde ${mizaAnterioara} jetoane`
        :castigatorul === "Dealerul" ? `Jucatorul 1 pierde ${mizaAnterioara} jetoane`
        :castigatorul === "Jucatorul 1" ? `Jucatorul 1 castiga ${mizaAnterioara * 2} jetoane`
        :castigatorul === "egalitate" && esteDublaj ? `Egalitate! Se primesc inapoi ${mizaAnterioara * 2} jetoane`
        :castigatorul === "egalitate" ? `Egalitate! Se primesc inapoi ${mizaAnterioara} jetoane`
        :null
        }
        </span>}
        </p> }
        { castigatorul && <button className='btn' style={{margin:0}} onClick={() => window.location.reload()}>Reseteaza Joc</button>}

{/* carti jucator */}
      <div className="scor-dealer">Carti Jucator - {sumaCartiJucator}</div>
          <div className="carti-dealer">

            {cartiJucator?.map((carte,index) =>
            <div key={index} className="card">
            <img src={carte.img} alt="noPic"/>
            </div>)}

          </div>

      </div>

    )
}

export default TablaJoc;