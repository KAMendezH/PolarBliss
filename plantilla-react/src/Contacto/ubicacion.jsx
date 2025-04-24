import './ubicacion.css'


function Ubicación( { ubicacion } ){
    return(
        <div className="ubicacion">
            <h1 className="h1__ubicacion">Ubicación</h1>

          
        <div className="ubicacion-container">
            <h2 className='h2__ubicacion'>Encuéntranos aquí</h2>
            <iframe
                src={ubicacion}
                width="100%"
                height="400"
                style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                allowFullScreen=""
                loading="lazy">

            </iframe>
        </div>
    
        </div>
    )
}

export default Ubicación