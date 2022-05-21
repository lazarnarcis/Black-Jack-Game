import { useState } from "react";
import Modal from 'react-modal';



const MyModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
//to open the modal

    const openModal = () =>
    {
        setModalIsOpen(true);
    }


    const closeModal = () =>
    {
        setModalIsOpen(false)
    }


    return (
        <>
    <button className="btn"
      style={{marginLeft:'10% '}}
      onClick={openModal}>Reguli Joc</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        shouldCloseOnOverlayClick={false}
        >
        <button className="close-icon" onClick={closeModal}>X</button>
        <header className="reguli-joc-header">Regulile jocului</header>
        <section>
          <ul className="reguli-joc-ul">
            <li className="reguli_joc_li">Blackjack - o mână cu totalul 21 din primele două cărți, deci formată dintr-un A și o carte cu valoare 10 (10,J,Q,K) (A poate avea valoarea 1 sau 11)</li>
            <li className="reguli_joc_li">Prins - o mână cu total mai mare de 21, automat pierzătoare</li>
            <li className="reguli_joc_li">Dublaj - opțiune prin care jucătorul dublează pariul și pe care o poate folosi o singură dată într-o mână. După dublare, jucătorul mai primește o singură carte și e obligat să se oprească indiferent de totalul obținut</li>
            <li className="reguli_joc_li">Hard hand (Mână hard) - mână care nu conține un as (A)</li>
            <li className="reguli_joc_li">Hit (Cere o carte) - jucătorul mai cere o carte</li>
            <li className="reguli_joc_li">Push (Egalitate) - când jucătorul și dealerul sunt la egalitate și banii mizați sunt returnați</li>
            <li className="reguli_joc_li">Soft hand (Mână soft) - mână care conține un as (A), carte ce poate avea valoarea 11 sau 1</li>
            <li className="reguli_joc_li">Split (Impartire) - când jucătorul are în mână o pereche și poate împărți cele două cărți, repetând miza. În această situaţie, se joacă două mâini simultan, iar dealerul împarte cărți pentru amândouă</li>
        </ul>
        </section>
      </Modal>
        </>
    )
}

export default MyModal;