/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useEffect, useState } from "react";

const Butons = ({

  blocheazaSumaMiza,
  seteazaBlocheazaMiza,
  seteazaSumaMiza,
  numarJetoane,
  sumaMiza,
  seteazaTuraDealerului,
  seteazaManaCompleta,
  seteazaNumarJetoane,
  esteManaCompleta,
  imparteCartile,
  esteTuraDealerului,
  seteazaCastigatorul,
  seteazaBlocareJeton,
  seteazaMizaAnterioara,
  seteazaEsteBlackJack,
  seteazaEsteDealerulPrins,
  seteazaEstePlayerulPrins,
  seteazaEsteDublaj,
  sumaCartiJucator,
  generarePachetRandomCarti,
  seteazaCartiJucator,
  esteBlackJack,
  castigatorul,
  cartiJucator,
  esteDealerulPrins,
  seteazaInceputJoc
}) => {

  const startMana = () => {
    if(esteManaCompleta && blocheazaSumaMiza > 0) {
      imparteCartile();
      seteazaTuraDealerului(false); // setam tura dealerului in false
      seteazaMizaAnterioara(blocheazaSumaMiza);
      seteazaEsteBlackJack(false);
      seteazaInceputJoc(true);
      seteazaManaCompleta(false); //mana completa devine false in momentul in care jocul incepe
      seteazaNumarJetoane(numarJetoane - blocheazaSumaMiza); //numarul de jetoane este dedus din Miza
      seteazaCastigatorul(""); //initializare castigator cu string gol
      seteazaEsteDealerulPrins(false); // verificam daca dealerul este busted cartile au valoare > 21
      seteazaEstePlayerulPrins(false);  // verificam daca playerul este busted cartile au valoare > 21
      seteazaBlocheazaMiza(0);
      seteazaEsteDublaj(false);
    }
  }

  const gestioneazaMiza = () => {
    //daca sumaMizei este mai mare ca 0 blocam miza pe suma curenta
    if(sumaMiza > 0 && sumaMiza <= numarJetoane) {
      seteazaBlocheazaMiza(sumaMiza);
      seteazaSumaMiza(0);
      seteazaBlocareJeton(true);
    }else if(sumaMiza === 0) {
      window.alert("Jocul nu poate incepe fara a seta o miza!");
    }else {
      window.alert("Miza nu poate fi mai mare decat numarul de jetoane");
    }
  }

  const gestioneazaHit = () => {
    //verificam daca sumaCartilorJucatorului este mai mica de 21 si daca nu este tura dealerului si daca castigatorul nu este dealerul si daca nu este blackjack
    if(sumaCartiJucator < 21
      && !esteTuraDealerului
      && castigatorul !== 'dealer'
      && !esteBlackJack) {
      setTimeout(() => {
        const pachetRandomCarti = generarePachetRandomCarti();
        let pachetcartiCurent = [...pachetRandomCarti]
        let urmatoareaCarte = pachetcartiCurent.slice(0,1)[0];
        seteazaCartiJucator([...cartiJucator, urmatoareaCarte]);
      },300);
    }
  }

  const gestioneazaStay = () => {
   if(!esteDealerulPrins && !esteTuraDealerului){
    seteazaTuraDealerului(true);
   }
  }

  const gestioneazaDublaj = () => {
    console.log("Dublaj button hit!");
  }


    return (
      <>
   { esteManaCompleta ? <div className="btn-beforePlay">
      <button className={blocheazaSumaMiza > 0 ? 'btn-disabled' : 'btn' }
        onClick={blocheazaSumaMiza === 0 ? gestioneazaMiza : () => {return 0}}>
          Plaseaza Miza
        </button>
        <button className={blocheazaSumaMiza > 0 ? 'btn' : 'btn-disabled'}
        onClick={startMana}
        >Start mana</button>
        <button className="btn">Acceasi miza</button>
        <button className={sumaMiza > 0 ? 'btn': 'btn-disabled'} onClick={() => seteazaSumaMiza(0)}>Resetare Miza</button>
        </div>
        :
        <div className="btn-play">
        <button  className='btn' onClick={gestioneazaHit}>hit</button>
        <button  className='btn' onClick={gestioneazaStay}>stay</button>
        <button  className='btn' onClick={gestioneazaDublaj}>double</button>
      </div>
        }


      </>
    )

  }

export default Butons;
