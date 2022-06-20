
const WinInfo = ({
    castigatorul,
    esteImpartire,
    mizaAnterioara,
    esteDublaj,
    esteDealerulPrins,
    esteBlackJack,
    estePlayerulPrins
}) => {


   return (
       <>
 {castigatorul && <span className="info-win">
        {castigatorul === "Jucatorul 1" && esteImpartire ?
        `Jucatorul 1 castigat prin impartirea cartilor ${mizaAnterioara} jetoane`
        :castigatorul === "Dealerul" && esteImpartire ?
        `Jucatorul 1 pierde prin impartirea cartilor ${mizaAnterioara} jetoane`
        :castigatorul === "Jucatorul 1" && esteBlackJack ?
        `BlackJack! Jucatorul 1 castiga ${mizaAnterioara + mizaAnterioara * 1.5} jetoane`
        :castigatorul === "Dealerul" && esteBlackJack ?
        `Dealer BlackJack! Jucatorul 1 a pierdut ${mizaAnterioara} jetoane`
        :castigatorul === "egalitate" ?
        `Egalitate!Se primesc inapoi ${mizaAnterioara} jetoane`
        :castigatorul === "Jucatorul 1" && esteDublaj ?
        `Jucatorul 1 a dublat si castiga ${mizaAnterioara * 4} jetoane`
        :castigatorul === "Jucatorul 1" && esteDealerulPrins ?
        `Dealer prins! Jucatorul 1 castiga ${mizaAnterioara * 2} jetoane`
        :castigatorul === "Dealerul" && esteDublaj ?
        `Jucatorul 1 a dublat si a pierdut ${mizaAnterioara * 2} jetoane`
        :castigatorul === "Dealerul" && estePlayerulPrins && esteDublaj ?
        `Jucatorul 1 prins pe dublaj. Pierde ${mizaAnterioara * 2} jetoane`
        :castigatorul === "Dealerul" && estePlayerulPrins ?
        `Jucatorul 1 prins. Pierde ${mizaAnterioara} jetoane`
        :castigatorul === "Dealerul" ?
        `Jucatorul 1 pierde ${mizaAnterioara} jetoane`
        :castigatorul === "Jucatorul 1" ?
        `Jucatorul 1 castiga ${mizaAnterioara * 2} jetoane`
        :castigatorul === "egalitate" && esteDublaj ? `Egalitate! Se primesc inapoi ${mizaAnterioara * 2} jetoane`
        :castigatorul === "egalitate" ?
        `Egalitate! Se primesc inapoi ${mizaAnterioara} jetoane`
        :null
        }
        </span>}
       </>
   )
}

export default WinInfo;