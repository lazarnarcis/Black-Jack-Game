const Carti = ({index,carte,esteDublaj}) => {
//set some states

    return (
        <>
        <div className={esteDublaj && index === 2 ? 'carte-dublaj' : ''}>
            <img src={carte.img} alt="noPic" />
        </div>
        </>
    )
}

export default Carti;