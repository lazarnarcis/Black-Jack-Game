const Nav = ({sumaMiza, numarJetoane}) => {


   return(
    <header className="game-header">
        <p className="title">Black Jack</p>
         <div className="contoare-pariuJeton">
         <span className="urmatorul-pariu">Miza:{sumaMiza}</span>

          <span className="jetoaneLabel">Jetoane:{numarJetoane}</span>
        </div>
      </header>

   )
}


export default Nav;