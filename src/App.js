/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import Nav from "./components/Nav";
import TablaJoc from "./components/TablaJoc";
import Jeton from "./components/Jeton";
import Butons from "./components/Butons";
import { useState, useEffect } from "react";
import doi_inima_neagra from "./cardsImages/2inima_neagra.png";
import doi_inima_rosie from "./cardsImages/2inima_rosie.png";
import doi_romb from "./cardsImages/2romb.png";
import doi_trefla from "./cardsImages/2trefla.png";
import trei_inima_neagra from "./cardsImages/3inima_neagra.png";
import trei_inima_rosie from "./cardsImages/3inima_rosie.png";
import trei_romb from "./cardsImages/3romb.png";
import trei_trefla from "./cardsImages/3trefla.png";
import patru_inima_neagra from "./cardsImages/4inima_neagra.png";
import patru_inima_rosie from "./cardsImages/4inima_rosie.png";
import patru_trefla from "./cardsImages/4trefla.png";
import patru_romb from "./cardsImages/4romb.png";
import cinci_inima_neagra from "./cardsImages/5inima_neagra.png";
import cinci_inima_rosie from "./cardsImages/5inima_rosie.png";
import cinci_trefla from "./cardsImages/5trefla.png";
import cinci_romb from "./cardsImages/5romb.png";
import sase_inima_neagra from "./cardsImages/6inima_neagra.png";
import sase_inima_rosie from "./cardsImages/6inima_rosie.png";
import sase_trefla from "./cardsImages/6trefla.png";
import sase_romb from "./cardsImages/6romb.png";
import sapte_inima_neagra from "./cardsImages/7inima_neagra.png";
import sapte_inima_rosie from "./cardsImages/7inima_rosie.png";
import sapte_trefla from "./cardsImages/7trefla.png";
import sapte_romb from "./cardsImages/7romb.png";
import opt_inima_neagra from "./cardsImages/8inima_neagra.png";
import opt_inima_rosie from "./cardsImages/8inima_rosie.png";
import opt_trefla from "./cardsImages/8trefla.png";
import opt_romb from "./cardsImages/8romb.png";
import noua_inima_neagra from "./cardsImages/9inima_neagra.png";
import noua_inima_rosie from "./cardsImages/9inima_rosie.png";
import noua_trefla from "./cardsImages/9trefla.png";
import noua_romb from "./cardsImages/9romb.png";
import zece_inima_neagra from "./cardsImages/10inima_neagra.png";
import zece_inima_rosie from "./cardsImages/10inima_rosie.png";
import zece_trefla from "./cardsImages/10trefla.png";
import zece_romb from "./cardsImages/10romb.png";
import AS_inima_neagra from "./cardsImages/AS_inima_neagra.png";
import AS_inima_rosie from "./cardsImages/AS_inima_rosie.png";
import AS_trefla from "./cardsImages/AS_trefla.png";
import AS_romb from "./cardsImages/AS_romb.png";
import Dama_inima_neagra from "./cardsImages/Dama_inima_neagra.png";
import Dama_inima_rosie from "./cardsImages/Dama_inima_rosie.png";
import Dama_trefla from "./cardsImages/Dama_trefla.png";
import Dama_romb from "./cardsImages/Dama_romb.png";
import Popa_inima_neagra from "./cardsImages/Popa_inima_neagra.png";
import Popa_inima_rosie from "./cardsImages/Popa_inima_rosie.png";
import Popa_trefla from "./cardsImages/Popa_trefla.png";
import Popa_romb from "./cardsImages/Popa_romb.png";
import Valet_inima_neagra from "./cardsImages/Valet_inima_neagra.png";
import Valet_inima_rosie from "./cardsImages/Valet_inima_rosie.png";
import Valet_trefla from "./cardsImages/Valet_trefla.png";
import Valet_romb from "./cardsImages/Valet_romb.png";

const intialCards = [
  { name: "2IN", img: doi_inima_neagra, cardValue: 2 },
  { name: "2IR", img: doi_inima_rosie, cardValue: 2 },
  { name: "2T", img: doi_trefla, cardValue: 2 },
  { name: "2R", img: doi_romb, cardValue: 2 },
  { name: "3IN", img: trei_inima_neagra, cardValue: 3 },
  { name: "3IR", img: trei_inima_rosie, cardValue: 3 },
  { name: "3T", img: trei_trefla, cardValue: 3 },
  { name: "3R", img: trei_romb, cardValue: 3 },
  { name: "4IN", img: patru_inima_neagra, cardValue: 4 },
  { name: "4IR", img: patru_inima_rosie, cardValue: 4 },
  { name: "4T", img: patru_trefla, cardValue: 4 },
  { name: "4R", img: patru_romb, cardValue: 4 },
  { name: "5IN", img: cinci_inima_neagra, cardValue: 5 },
  { name: "5IR", img: cinci_inima_rosie, cardValue: 5 },
  { name: "5T", img: cinci_trefla, cardValue: 5 },
  { name: "5R", img: cinci_romb, cardValue: 5 },
  { name: "6IN", img: sase_inima_neagra, cardValue: 6 },
  { name: "6IR", img: sase_inima_rosie, cardValue: 6 },
  { name: "6T", img: sase_trefla, cardValue: 6 },
  { name: "6R", img: sase_romb, cardValue: 6 },
  { name: "7IN", img: sapte_inima_neagra, cardValue: 7 },
  { name: "7IR", img: sapte_inima_rosie, cardValue: 7 },
  { name: "7T", img: sapte_trefla, cardValue: 7 },
  { name: "7R", img: sapte_romb, cardValue: 7 },
  { name: "8IN", img: opt_inima_neagra, cardValue: 8 },
  { name: "8IR", img: opt_inima_rosie, cardValue: 8 },
  { name: "8T", img: opt_trefla, cardValue: 8 },
  { name: "8R", img: opt_romb, cardValue: 8 },
  { name: "9IN", img: noua_inima_neagra, cardValue: 9 },
  { name: "9IR", img: noua_inima_rosie, cardValue: 9 },
  { name: "9T", img: noua_trefla, cardValue: 9 },
  { name: "9R", img: noua_romb, cardValue: 9 },
  { name: "10IN", img: zece_inima_neagra, cardValue: 10 },
  { name: "10IR", img: zece_inima_rosie, cardValue: 10 },
  { name: "10T", img: zece_trefla, cardValue: 10 },
  { name: "10R", img: zece_romb, cardValue: 10 },
  { name: "VIN", img: Valet_inima_neagra, cardValue: 10 },
  { name: "VIR", img: Valet_inima_rosie, cardValue: 10 },
  { name: "VT", img: Valet_trefla, cardValue: 10 },
  { name: "VR", img: Valet_romb, cardValue: 10 },
  { name: "DIN", img: Dama_inima_neagra, cardValue: 10 },
  { name: "DIR", img: Dama_inima_rosie, cardValue: 10 },
  { name: "DT", img: Dama_trefla, cardValue: 10 },
  { name: "DR", img: Dama_romb, cardValue: 10 },
  { name: "PIN", img: Popa_inima_neagra, cardValue: 10 },
  { name: "PIR", img: Popa_inima_rosie, cardValue: 10 },
  { name: "PT", img: Popa_trefla, cardValue: 10 },
  { name: "PR", img: Popa_romb, cardValue: 10 },
  { name: "AIN", img: AS_inima_neagra, cardValue: 1 },
  { name: "AIR", img: AS_inima_rosie, cardValue: 1 },
  { name: "AT", img: AS_trefla, cardValue: 1 },
  { name: "AR", img: AS_romb, cardValue: 1 }
];

const App = () => {
  const [carti, seteazaCarti] = useState(intialCards);
  const [cartiJucator, seteazaCartiJucator] = useState([]);
  const [cartiDealer, seteazaCartiDealer] = useState([]);
  const [esteManaCompleta, seteazaManaCompleta] = useState(true);
  const [esteTuraDealerului, seteazaTuraDealerului] = useState(true);
  const [numarJetoane, seteazaNumarJetoane] = useState(1500);
  const [sumaMiza, seteazaSumaMiza] = useState(0);
  const [blocheazaSumaMiza, seteazaBlocheazaMiza] = useState(0);
  const [sumaCartiDealer, seteazaSumaCartiDealer] = useState(null);
  const [sumaCartiJucator, seteazaSumaCartiJucator] = useState(0);
  const [castigatorul, seteazaCastigatorul] = useState("");
  const [esteJetonBlocat, seteazaBlocareJeton] = useState(false);
  const [mizaAnterioara, seteazaMizaAnterioara] = useState(0);
  const [esteDealerulPrins, seteazaEsteDealerulPrins] = useState(false);
  const [estePlayerulPrins, seteazaEstePlayerulPrins] = useState(false);
  const [esteBlackJack, seteazaEsteBlackJack] = useState(false);
  const [esteDublaj, seteazaEsteDublaj] = useState(false);
  const [esteTuraJucatorului, seteazaTuraJucatorului] = useState(true);
  const [inceputJoc, seteazaInceputJoc] = useState(false);


  const amestecaCartile = (carti) => {
    //se parcurg cartile de joc de la ultima carte pana la prima
    for (let i = carti.length - 1; i > 0; i--) {
      //se creaza un index j care va stoca un nr intreg intre 0 si 51
      let j = Math.floor(Math.random() * i); // pp = 2
      let temp = carti[i]; //temp=51
      carti[i] = carti[j]; // cartea de pe poz 51 = cartea de pe poz 2
      carti[j] = temp; //cartea de pe poz 2 primeste cartea de pe 51
    }
    return carti;
  };


  const scorMana = (carti) => {
    //verifica daca e un AS in carti
    const verificaAS = () => {
      return carti.some((myCard) => myCard.cardValue === 1);
    };
    //calculeaza suma cartilor

    let suma = carti.reduce((prevCard, currentCard) => {
      return (prevCard += currentCard.cardValue);
    }, 0);
    //daca exista un ACE cu valoarea 1 si suma cartilor este < 11 adauga 10
    if (verificaAS() && suma < 11) {
      return (suma += 10);
    } else if (verificaAS() && suma > 21) {
      //daca exista un ACE cu valoarea 1 si suma cartilor este > 21 scade 10 -> (ex pt 3 carti cu suma 27 + un as cu val 1-> total 28 se scade 10)
      return (suma -= 10);
    } else {
      //daca nu exista AS in carti returneaza doar suma
      return suma;
    }
  };

  const generarePachetRandomCarti = () => {
    return amestecaCartile(carti);
  }

  const imparteCartile = () => {
    generarePachetRandomCarti();
    const extrageCarti = carti.slice(0, 4);
    seteazaCartiJucator([
      {
        name: extrageCarti[0].name,
        img: extrageCarti[0].img,
        cardValue: extrageCarti[0].cardValue
      },
      {
        name: extrageCarti[2].name,
        img: extrageCarti[2].img,
        cardValue: extrageCarti[2].cardValue
      }
    ]);
    seteazaCartiDealer([
      {
        name: extrageCarti[1].name,
        img: extrageCarti[1].img,
        cardValue: extrageCarti[1].cardValue
      },
      {
        name: extrageCarti[3].name,
        img: extrageCarti[3].img,
        cardValue: extrageCarti[3].cardValue
      }
    ]);
  };

  const cartiJ = scorMana(cartiJucator);
  const cartiD = scorMana(cartiDealer);
//use effectul initial va executa functia imparteCartile() in pasul initial
  useEffect(() => {
    imparteCartile();
  }, []);

//use efect pentru a verifica daca exista blakJack in startul Jocului
useEffect(() => {
  if(inceputJoc){
  //daca suma cartilor jucatorului este 21 si a dealerului nu atunci castigatorul este jucatorul
  if(cartiJucator.length === 2
    && sumaCartiJucator > 10
    && sumaCartiDealer !== 21){
      seteazaEsteBlackJack(true);
      seteazaCastigatorul("Jucatorul 1");
      seteazaManaCompleta(true);
      seteazaTuraDealerului(true);
    }
  //verificam daca Dealerul a castigat
  if(cartiDealer.length === 2
    && sumaCartiDealer === 21
    && sumaCartiJucator !== 21) {
      seteazaEsteBlackJack(true);
      seteazaCastigatorul("Dealer");
      seteazaManaCompleta(true);
      seteazaTuraDealerului(true);
    }
  //verificam daca e scor egal
  if(cartiDealer.length === 2
    && cartiJucator === 2
    && sumaCartiJucator === 21
    && sumaCartiDealer === 21){
     seteazaCastigatorul("meci egal");
     seteazaManaCompleta(true);
     seteazaTuraDealerului(true);
    }
}
}, [inceputJoc])

  //use effect care se va executa de fiecare data cand se scorul se va schimba pt jucator
  useEffect(() => {
    seteazaSumaCartiJucator(cartiJ);
    console.log("Castigatorul este: ", castigatorul);
  }, [cartiJ]);

  //use effect care se va executa de fiecare data cand se scorul se va schimba pt dealer
  useEffect(() => {
    seteazaSumaCartiDealer(cartiD);
  }, [cartiD]);

  useEffect(() => {
    console.log(`este tura dealerului:${esteTuraDealerului}`)
  },[esteTuraDealerului])


  return (
    <>
      {/* navigation component */}
      <Nav sumaMiza={sumaMiza} numarJetoane={numarJetoane} />

      {/* GameTable component */}
      <div className="App">
        <TablaJoc
          sumaCartiDealer={sumaCartiDealer}
          cartiDealer={cartiDealer}
          esteTuraDealerului={esteTuraDealerului}
          imparteCartile={imparteCartile}
          blocheazaSumaMiza={blocheazaSumaMiza}
          sumaCartiJucator={sumaCartiJucator}
          cartiJucator={cartiJucator}
          esteManaCompleta={esteManaCompleta}
          castigatorul={castigatorul}
          esteJetonBlocat={esteJetonBlocat}
          mizaAnterioara={mizaAnterioara}
        />
        {/* Chips component */}
        <div className="jetoane-butoane-container">
          <Jeton
            esteManaCompleta={esteManaCompleta}
            seteazaSumaMiza={seteazaSumaMiza}
            sumaMiza={sumaMiza}
            blocheazaSumaMiza={blocheazaSumaMiza}
          />
          {/* buttons component */}
            <Butons
              imparteCartile={imparteCartile}
              blocheazaSumaMiza={blocheazaSumaMiza}
              seteazaBlocheazaMiza={seteazaBlocheazaMiza}
              seteazaSumaMiza={seteazaSumaMiza}
              numarJetoane={numarJetoane}
              sumaMiza={sumaMiza}
              esteManaCompleta={esteManaCompleta}
              seteazaTuraDealerului={seteazaTuraDealerului}
              seteazaManaCompleta={seteazaManaCompleta}
              seteazaNumarJetoane={seteazaNumarJetoane}
              seteazaSumaCartiJucator={seteazaSumaCartiJucator}
              esteTuraDealerului={esteTuraDealerului}
              seteazaCastigatorul={seteazaCastigatorul}
              seteazaBlocareJeton={seteazaBlocareJeton}
              seteazaMizaAnterioara={seteazaMizaAnterioara}
              seteazaEstePlayerulPrins={seteazaEstePlayerulPrins}
              seteazaEsteDealerulPrins={seteazaEsteDealerulPrins}
              seteazaEsteDublaj={seteazaEsteDublaj}
              seteazaEsteBlackJack={seteazaEsteBlackJack}
              sumaCartiJucator={sumaCartiJucator}
              generarePachetRandomCarti={generarePachetRandomCarti}
              seteazaCartiJucator={seteazaCartiJucator}
              esteBlackJack={esteBlackJack}
              castigatorul={castigatorul}
              cartiJucator={cartiJucator}
              esteDealerulPrins={esteDealerulPrins}
              seteazaInceputJoc={seteazaInceputJoc}
            />
        </div>
      </div>
    </>
  );
}

export default App;
