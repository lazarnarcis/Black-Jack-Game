import jetonValoare_5 from "../cardsImages/5-jeton.png";
import jetonValoare_25 from "../cardsImages/25-jeton.png";
import jetonValoare_100 from "../cardsImages/100-jeton.png";
import jetonValoare_500 from '../cardsImages/500-jeton.png';
import jetonValoare_1000 from "../cardsImages/1000-jeton.png";
import jetonValoare_10k from "../cardsImages/10k-jeton.png";

const Jeton = ({
  esteManaCompleta,
  seteazaSumaMiza,
  sumaMiza,
  blocheazaSumaMiza
}) => {

  const gestioneazaValoareJeton = (valJeton) => {
    seteazaSumaMiza(sumaMiza + valJeton);
}

  return(
  <>
          { blocheazaSumaMiza === 0 && esteManaCompleta ? (<div className="jetoane">
              <img src={jetonValoare_5}
              alt="jeton_5"
              onClick={() => gestioneazaValoareJeton(5)} />
              <img src={jetonValoare_25}
              alt="jeton_25"
              onClick={() => gestioneazaValoareJeton(25)}/>
              <img src={jetonValoare_100}
              alt="jeton_100"
              onClick={() => gestioneazaValoareJeton(100)}/>
              <img src={jetonValoare_500}
              alt="jeton_500"
              onClick={() => gestioneazaValoareJeton(500)}/>
              <img src={jetonValoare_1000}
              alt="jeton_1000"
              onClick={() => gestioneazaValoareJeton(1000)} />
              <img src={jetonValoare_10k}
              alt="jeton_10000"
              onClick={() => gestioneazaValoareJeton(10000)}/>
            </div>) : null
          }
  </>
      );
}

export default Jeton;