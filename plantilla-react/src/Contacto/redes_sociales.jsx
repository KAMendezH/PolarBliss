import './redes_sociales.css'
import Enlace from './enlace.jsx'

function RedesSociales({ enlaces } ){
    return(
        <div className="redes_sociales">
            
            <div className='div__enlaces'>
                <h1 className='h1__conocenos'>Redes Sociales:</h1>
                <div className='div__redes_sociales'>
                    {enlaces.map((enlace, index) =>(
                    <Enlace key={index} {...enlace} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default RedesSociales