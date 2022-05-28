/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import Nav from "./components/Nav";
import TablaJoc from "./components/TablaJoc";
import Jeton from "./components/Jeton";
import Butons from "./components/Butons";
import { useState, useEffect } from "react";
import { intialCards } from "./pachetCarti";
import noua_inima_rosie from "./cardsImages/9inima_rosie.png";
import noua_trefla from "./cardsImages/9trefla.png";
import sase_trefla from "./cardsImages/6trefla.png";
import sase_romb from "./cardsImages/6romb.png";
import { v4 as uuidv4 } from 'uuid';
import MyModal from "./components/MyModal";



const App = () => {
  const [carti, seteazaCarti] = useState(intialCards);
  const [inceputJoc, seteazaInceputJoc] = useState(false);
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
  const [cartiJucatorSplit, seteazaCartiJucatorSplit] = useState([]);
  const [esteImpartire, seteazaEsteImpartire] = useState(false);
  const [sumaCartiJucatorSplit,seteazaSumaCartiJucatorSplit] = useState(0);

  const amestecaCartile = (carti) => {
    //se parcurg cartile de joc de la ultima carte pana la prima
    for (let i = carti.length - 1; i >= 0; i--)
    {
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
    if((verificaAS()
    && suma < 11) ||
     (verificaAS() && carti.length === 2 && suma === 11))
    {
     return suma += 10;
    }
      return suma;
  }


  const generarePachetRandomCarti = () => {
    return amestecaCartile(carti);
  }

  const imparteCartile = () => {
    generarePachetRandomCarti();
    const extrageCarti = carti.slice(0, 6);
    seteazaCartiJucator([
      {
        id:uuidv4(),
        name: extrageCarti[0].name,
        img: extrageCarti[0].img,
        cardValue: extrageCarti[0].cardValue
      },
      {
        id:uuidv4(),
        name: extrageCarti[1].name,
        img: extrageCarti[1].img,
        cardValue: extrageCarti[1].cardValue
      }
    ]);
    seteazaCartiDealer([
      {
        id:uuidv4(),
        name: extrageCarti[2].name,
        img: extrageCarti[2].img,
        cardValue: extrageCarti[2].cardValue
      },
      {
        id:uuidv4(),
        name: extrageCarti[3].name,
        img: extrageCarti[3].img,
        cardValue: extrageCarti[3].cardValue
      }
    ]);
    seteazaCartiJucatorSplit([
      {
        id:uuidv4(),
        name: extrageCarti[4].name,
        img: extrageCarti[4].img,
        cardValue: extrageCarti[4].cardValue
      },
      {
        id:uuidv4(),
        name: extrageCarti[5].name,
        img: extrageCarti[5].img,
        cardValue: extrageCarti[5].cardValue
      }
    ])
  };


  const extrageCarte = () => {
      const pachetRandomCarti = generarePachetRandomCarti();
      let pachetCartiCurent = [...pachetRandomCarti];
      let urmatoareaCarte = pachetCartiCurent.slice(0,1)[0];
      if(esteTuraDealerului)
      {
        seteazaCartiDealer([...cartiDealer, urmatoareaCarte]);
        scorMana(cartiDealer);
      }
      else
      {
        seteazaCartiJucator([...cartiJucator, urmatoareaCarte]);
        scorMana(cartiJucator);
      }
  }

  // const imparteCartileTest = () => {
  //   seteazaCartiJucator(
  //     [
  //     { id:uuidv4(), name: "9IR", img: noua_inima_rosie, cardValue: 9 },
  //     { id:uuidv4(), name: "9T", img: noua_trefla, cardValue: 9 }
  //   ]
  //   );
  //   seteazaCartiDealer([
  //     { id:uuidv4(), name: "6T", img: sase_trefla, cardValue: 6 },
  //     { id:uuidv4(), name: "6R", img: sase_romb, cardValue: 6 },
  //   ]);
  // }


  const cartiJ = scorMana(cartiJucator);
  const cartiD = scorMana(cartiDealer);
  const cartiJSp = scorMana(cartiJucatorSplit);

 // console.log("sumaCartiDealer", cartiD);
//use effectul initial va executa functia imparteCartile() in pasul initial

  useEffect(() => {
    imparteCartile();
  }, []);

//use efect pentru a verifica daca exista blakJack in startul Jocului
useEffect(() => {
  console.log("Check for BlackJack");
  //daca suma cartilor jucatorului este 21 si a dealerului nu atunci castigatorul este jucatorul
  if(cartiJucator.length === 2
    && sumaCartiJucator === 21
    && sumaCartiDealer !== 21)
    {
      seteazaEsteBlackJack(true);
      seteazaCastigatorul("Jucatorul 1");
      seteazaManaCompleta(true);
      seteazaTuraDealerului(true);
    }
  //verificam daca Dealerul a castigat
  if(cartiDealer.length === 2
    && sumaCartiDealer === 21
    && sumaCartiJucator !== 21)
    {
      seteazaEsteBlackJack(true);
      seteazaCastigatorul("Dealerul");
      seteazaManaCompleta(true);
      seteazaTuraDealerului(true);
    }
  //verificam daca e scor egal
  if(cartiDealer.length === 2
    && cartiJucator.length === 2
    && sumaCartiJucator === 21
    && sumaCartiDealer === 21)
    {
     seteazaCastigatorul("egalitate");
     seteazaManaCompleta(true);
     seteazaTuraDealerului(true);
    }
})
//useEffect pentru randul jucatorului
useEffect(() => {

  //daca suma cartilor jucatorului este > 21 acesta a pierdut. Functia useEffect se apeleaza de fiecare data cand variabila sumaCartiJucator este actualizata

 if(sumaCartiJucator > 21)
 {
    seteazaCastigatorul("Dealerul");
    seteazaEstePlayerulPrins(true);
    seteazaManaCompleta(true);
    seteazaTuraDealerului(true);
    scorMana(cartiJucator)
 }
},[sumaCartiJucator]);

useEffect(() => {
  let timeOut;
  console.count("Dealer's turn useEffect run");
  if(inceputJoc)
  {
  if(esteTuraDealerului
    && sumaCartiDealer < 17
    && !estePlayerulPrins
    && castigatorul !== 'Jucatorul 1'){
      console.count("extrage carte esteTuraDealerului useEffect");
      timeOut = setTimeout(() => {
        extrageCarte();
      },500);
    }
    if(esteTuraDealerului && sumaCartiDealer >= 17 && sumaCartiDealer <= 21 && !estePlayerulPrins){
      if(esteImpartire && (sumaCartiJucator || sumaCartiJucatorSplit) > sumaCartiDealer) {
        seteazaCastigatorul("Jucatorul 1");
        seteazaManaCompleta(true);
      }else
      {
        seteazaCastigatorul("Dealerul");
        seteazaManaCompleta(true);
      }

      if(esteImpartire && (sumaCartiJucator || sumaCartiJucatorSplit) === sumaCartiDealer
      && !estePlayerulPrins)
      {
        seteazaCastigatorul("egalitate");
        seteazaManaCompleta(true);
      }

        if(sumaCartiDealer > sumaCartiJucator)
        {
          seteazaCastigatorul("Dealerul");
          seteazaManaCompleta(true);
        }
        if(sumaCartiDealer < sumaCartiJucator)
        {
          seteazaCastigatorul("Jucatorul 1");
          seteazaManaCompleta(true);
        }
        if(sumaCartiDealer === sumaCartiJucator)
        {
          seteazaCastigatorul("egalitate");
          seteazaManaCompleta(true);
        }
      }
    }
    return () =>
    {
      clearTimeout(timeOut);
    }
},[esteTuraDealerului])

useEffect(() => {
  let timeOut;
  console.count("Suma cartiDealer useEffect run");
    if(sumaCartiDealer > 21)
    {
      seteazaEsteDealerulPrins(true);
      seteazaCastigatorul("Jucatorul 1");
      seteazaManaCompleta(true);
    }

    if(sumaCartiDealer >= 17 && sumaCartiDealer < 22 && esteTuraDealerului)
    {
      if(esteImpartire && (sumaCartiJucator || sumaCartiJucatorSplit) > sumaCartiDealer
      && !estePlayerulPrins){
        seteazaCastigatorul("Jucatorul 1");
        seteazaManaCompleta(true);
      }
      else
      {
        seteazaCastigatorul("Dealerul");
        seteazaManaCompleta(true);
      }

      if(esteImpartire && (sumaCartiJucator || sumaCartiJucatorSplit) === sumaCartiDealer
      && !estePlayerulPrins)
      {
        seteazaCastigatorul("egalitate");
        seteazaManaCompleta(true);
      }

      if(sumaCartiDealer > sumaCartiJucator)
      {
        seteazaCastigatorul("Dealerul");
        seteazaManaCompleta(true);
      }
      if(sumaCartiDealer < sumaCartiJucator && !estePlayerulPrins)
      {
        seteazaCastigatorul("Jucatorul 1");
        seteazaManaCompleta(true);
      }

      if(sumaCartiDealer === sumaCartiJucator && !estePlayerulPrins)
      {
        seteazaCastigatorul("egalitate");
        seteazaManaCompleta(true);
        }
  }

    if(sumaCartiDealer < 17 && esteTuraDealerului && !estePlayerulPrins && inceputJoc)
    {
      console.count("extrage carte sumaCartiDealer useEffect");
      timeOut = setTimeout(() =>
      {
        extrageCarte();
      },500)
    }
  return () => {
    clearTimeout(timeOut);
  }
},[sumaCartiDealer]);




  //use effect care se va executa de fiecare data cand se scorul se va schimba pt jucator
  useEffect(() => {
    seteazaSumaCartiJucator(cartiJ);
  }, [cartiJ]);

  //use effect care se va executa de fiecare data cand se scorul se va schimba pt dealer
  useEffect(() => {
    seteazaSumaCartiDealer(cartiD);
  }, [cartiD]);

  useEffect(() => {
    seteazaSumaCartiJucatorSplit(cartiJSp);
  }, [cartiJSp]);

  //useEffect pentru castig
  useEffect(() => {
    if(castigatorul === 'Dealerul')
    {
      seteazaSumaMiza(0);
    }
    //daca jucatorul 1 este castigator si nu este blackjack atunci facem miza * 2
    if(castigatorul === 'Jucatorul 1' && !esteBlackJack)
    {
    if(esteDublaj)
    {
      //daca este dublaj atunci facem miza * 4
      seteazaNumarJetoane(numarJetoane + mizaAnterioara * 4);
    }else
    {
      seteazaNumarJetoane(numarJetoane + mizaAnterioara * 2);
    }
    if(esteImpartire && castigatorul === 'Jucatorul 1' && !esteBlackJack)
    {
      seteazaNumarJetoane(numarJetoane + mizaAnterioara);
    }
  }
    //daca jucatorul 1 este castigator si este blackjack atunci facem miza * 2.5
    if(castigatorul === 'Jucatorul 1' && esteBlackJack)
    {
       seteazaNumarJetoane(numarJetoane + mizaAnterioara * 2.5);
    }
    //daca este meci egal se va returna dublul mizei anterioare
    if(castigatorul === 'egalitate')
    {
       if(esteDublaj)
       {
         seteazaNumarJetoane(numarJetoane + mizaAnterioara * 2);
       }else
       {
         //daca nu se va returna fix miza anterioara
         seteazaNumarJetoane(numarJetoane + mizaAnterioara);
       }
    }
  },[castigatorul]);


  return (
    <>
      {/* navigation component */}
      <Nav sumaMiza={sumaMiza} numarJetoane={numarJetoane}
      />
      <MyModal />
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
          esteBlackJack={esteBlackJack}
          esteDublaj={esteDublaj}
          esteDealerulPrins={esteDealerulPrins}
          estePlayerulPrins={estePlayerulPrins}
          esteImpartire={esteImpartire}
          sumaCartiJucatorSplit={sumaCartiJucatorSplit}
          cartiJucatorSplit={cartiJucatorSplit}
          seteazaCastigatorul={seteazaCastigatorul}
        />

        {/* jetoane component */}
        <div className="jetoane-butoane-container">
          <Jeton
            esteManaCompleta={esteManaCompleta}
            seteazaSumaMiza={seteazaSumaMiza}
            sumaMiza={sumaMiza}
            blocheazaSumaMiza={blocheazaSumaMiza}
          />
          {/* butoane component */}
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
              extrageCarte={extrageCarte}
              mizaAnterioara={mizaAnterioara}
              seteazaEsteImpartire={seteazaEsteImpartire}
              cartiJucatorSplit={cartiJucatorSplit}
            // imparteCartileTest={imparteCartileTest}
             seteazaCartiJucatorSplit={seteazaCartiJucatorSplit}
             esteImpartire={esteImpartire}
            />
        </div>
      </div>
    </>
  );
}

export default App;
