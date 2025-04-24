import './paquete.css'
function Paquete( { nombrePaquete, precio, imagen, descripcion, tel, mensaje } ){
    return(
        <div  className='contenedor_paquete'>
            <div className='content_1'>
                <img className="img_paquete" src={imagen} alt={nombrePaquete} />
            </div>
            <div className='content_2'>
                <p className="nombre_paquete">{nombrePaquete}</p>
                <p className="descripcion_paquete">
                    {descripcion.split("|").map((ingrediente, index) => (
                        <span key={index}>
                            {ingrediente} <br/>
                        </span>
                    ))}
                    </p>
                <p className="precio_paquete">${precio}</p>
                <a className="boton_paquete" href={`https://wa.me/${tel}?text=${mensaje.replace(" ", "+")}${nombrePaquete.replace(" ", "+")} de $${precio}.`} 
                target="_blank"
                rel="noopener noreferrer">
                    Hacer Pedido</a>
            </div>
        </div>
    )
}

export default Paquete