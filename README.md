termenii de baza


- Înainte de a deprinde diferitele strategii ale jocului, e bine să cunoști termenii de bază din Blackjack.

- Asigurare (Insurance) - Un pariu suplimentar pus de jucător, cu valoare 50% din pariul inițial, Această opțiune e disponibilă doar când dealerul arată un as. Dacă plătești asigurarea și dealerul realizează un Blackjack, primești înapoi banii mizați (Asigurare + pariul inițial)

- Blackjack - o mână cu totalul 21 din primele două cărți, deci formată dintr-un A și o carte cu valoare 10 (10,J,Q,K) (A poate avea valoarea 1 sau 11)
- Bust - o mână cu total mai mare de 21, automat pierzătoare
- Dublare (Double Down) - opțiune prin care jucătorul dublează pariul și pe care o poate folosi o singură dată într-o mână. După dublare, jucătorul mai primește o singură carte și e obligat să se oprească indiferent de totalul obținut
- Hard hand (Mână hard) - mână care nu conține un as (A)
- Hit (Cere o carte) - jucătorul mai cere o carte;
- Push (Egalitate) -  când jucătorul și dealerul sunt la egalitate și banii mizați sunt returnați;
- Soft hand (Mână soft) - mână care conține un as (A), carte ce poate valora fie 11, fie 1
- Split - când jucătorul are în mână o pereche și poate împărți cele două cărți, repetând miza. În această situaţie, se joacă două mâini simultan, iar dealerul împarte cărți pentru amândouă
- Surrender - opțiune disponibilă doar în unele variante ale jocului, când ai posibilitatea să te "predai" și să salvezi astfel 50% din miză

logica implementare ----
- creare matrice de obiecte cu fiecare carte care contine numele cartii si imaginea aferenta stocate intr-o constanta
- functie pentru amestecat cartile de joc
- componentele React necesare(Joc,carte,player,Jeton,Pariu,Buton)


//  const containsAce = asCard.filter((card)=> card.name.startsWith("A"))
//  .map(card => {
//   let temp = Object.assign({}, card)
//   if(temp.cardValue === 1)
//   	temp.cardValue = 11;

//   return temp
//   }
//  )


// console.log(containsAce)


 //functia pentru a schimba cartea curenta cu una aleatoare
  // const schimbaCartea = () => {
  //   let randomIndex = Math.floor(Math.random() * carti.length);
  //   setCard({
  //     name: carti[randomIndex].name,
  //     img: carti[randomIndex].img,
  //     cardValue: carti[randomIndex].cardValue
  //   });
  // };

    // const [card, setCard] = useState({
  //   name: "2T",
  //   img: doi_trefla,
  //   cardValue: 2
  // });