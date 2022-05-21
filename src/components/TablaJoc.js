/* eslint-disable no-unused-vars */
import spateCarteImg from '../cardsImages/spate_carte.png';
import jetonValoare_empty from "../cardsImages/jeton_gol.png";
import Carti from './Carti';
import WinInfo from './WinInfo';

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
    estePlayerulPrins,
    esteImpartire,
    sumaCartiJucatorSplit,
    cartiJucatorSplit,
    seteazaCastigatorul,
}) => {

  const reseteazaJoc = () => {
    const resetGame = document.getElementById('reset');
    resetGame.style.display = 'none';
    window.location.reload();
  }


    return (

        <div className="tabla-joc">
       { (esteManaCompleta || esteTuraDealerului)  && <div className="scor-dealer">Suma Carti Dealer - {sumaCartiDealer}</div>}
        <div className="carti-dealer">

            { esteTuraDealerului ? (cartiDealer?.map((carte,index) =>
              <Carti key={carte.id} carte={carte} index={index} />
              ))
              :
              <div className="carti-dealer">
              <img src={cartiDealer[0]?.img} alt="c_d" />
                <img src={spateCarte} alt="spateCarte" />
              </div>
            }

      </div>


      { esteJetonBlocat && <p className="jeton-empty">
        <img src={jetonValoare_empty} alt="jeton_gol" />
      { !esteDublaj && <span className="blockedSum">{blocheazaSumaMiza === 0 ? mizaAnterioara : blocheazaSumaMiza}</span>}
        { esteDublaj && <span className="blockedSum">{mizaAnterioara * 4}</span>}
        <WinInfo castigatorul={castigatorul}
                esteImpartire={esteImpartire}
                mizaAnterioara={mizaAnterioara}
                esteDublaj={esteDublaj}
                esteDealerulPrins={esteDealerulPrins}
                esteBlackJack={esteBlackJack}
                estePlayerulPrins={estePlayerulPrins}
        />
        </p> }


        { castigatorul !== '' && <button className='btn' id="reset" style={{margin:0}} onClick={reseteazaJoc}>Reseteaza Joc</button>}

        {/* carti jucator */}
        <div className="scor-jucator">Suma Carti Jucator - {sumaCartiJucator}
          {esteImpartire && <div className="scor-jucator">Suma Carti Jucator Mana 2 - {sumaCartiJucatorSplit}</div>}
        </div>

          <div className={esteImpartire ? "carti-split" : "carti-jucator"}>
             {cartiJucator.map((carte,index) => <Carti key={carte.id} esteDublaj={esteDublaj} carte={carte} index={index} />)}
               { /* //cartiJucatorSplit */}
              { esteImpartire && <div className='carti-jucator'>
                {cartiJucatorSplit.map((carte,index) => <Carti key={carte.id} carte={carte} index={index}  />)}
            </div>}
          </div>
      </div>
    )
}
export default TablaJoc;