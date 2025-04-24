import './home.css'
import Hero from './hero.jsx'
import SeccionPaquetes from './paquetes.jsx'
function Home( {logo, paquetes, textoHero, seccionInicio, marca } ){
    return(
        <div className='contenedor_home'>
            <Hero textoHero={textoHero} logo={logo} marca={marca}/>
            <SeccionPaquetes  paquetesInfo={paquetes} seccionInicio={seccionInicio}/>
        </div>
    )
}
export default Home