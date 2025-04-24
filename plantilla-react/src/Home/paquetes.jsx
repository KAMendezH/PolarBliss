import './paquetes.css'
import Paquete from './paquete.jsx'
function SeccionPaquetes( { paquetesInfo, seccionInicio } ){
    return(
        <div className='contenedor_paquetes'>
            <h1 className='h1__paquetes'>{seccionInicio}</h1>
            <section className='section__paquetes'>


{/* USAR () Despues de que se declarqa la función flecha, en lugar de usar {} ayuda a retornar los valores */}
                {paquetesInfo.map((paquete, index) =>(
                    <Paquete key={index} {...paquete} />
                ))}
                                
            </section>
        </div>
    )
}

export default SeccionPaquetes