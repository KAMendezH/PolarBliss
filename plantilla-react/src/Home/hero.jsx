import './hero.css'
function Hero( {textoHero, logo, marca }){
    return(
        <div className='contenedor_hero'>
            <main className='main__hero'>
                <div className='animated-content div__animate'>
                    <h1>
                        {textoHero.slice(0, 4).toUpperCase()}
                        <span className='h1__hero'>{` ${textoHero.slice(4, 11).toUpperCase()}`}</span>
                        {textoHero.slice(11).toUpperCase()}
                    </h1>
                </div>
            </main>
            <div className='div__hero'>
                <img className="logo__hero animated-img" src={logo} alt={`Logo ${marca}`} />
            </div>
        </div>
    )
}

export default Hero