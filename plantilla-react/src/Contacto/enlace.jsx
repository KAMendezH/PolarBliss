import './enlace.css'

function Enlace( { nombre, enlace } ){
    return(
        <a className="a__redes_sociales" href={enlace} target="_blank" rel="noopener noreferrer">
            {nombre}
        </a>
    )
}

export default Enlace