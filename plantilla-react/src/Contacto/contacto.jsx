import './contacto.css'
import RedesSociales from './redes_sociales.jsx'
import Ubicación from './ubicacion.jsx'

function Contacto( { enlaces, ubicacion } ){
    return(
        <div className="contenedor_contacto">
            <RedesSociales enlaces={enlaces}/>
            <Ubicación ubicacion={ubicacion}/>
        </div>
    )
}

export default Contacto