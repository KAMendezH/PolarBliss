import './seccionMenu.css'
import FlexConteiner from './flexContainer.jsx'
import { useState } from 'react'


function SeccionMenu(  { productos, tel, secciones } ){
          // Atrapar el estado de los productos
        const [productosState, setProductosState] = useState(productos);
    
        
        // Función para realizar el pedido
        const realizarPedido = ( telefono )=>{
            const productosSeleccionados = productosState.filter(producto => producto.cantidad > 0);
            const mensaje = productosSeleccionados
            .map(producto => ` * ${producto.nombre} - ${producto.cantidad} unidad(es) -  por $${producto.precio * producto.cantidad}. `)
            .join("\n") + " ";

            const msgWhatsapp = `https://wa.me/${telefono}?text=Hola,+quiero+realizar+un+pedido+de:+` + mensaje.replace(" ", "+")
            return msgWhatsapp;
        }


    return(
        <div className="seccion__menu" id="seccionMenu">
            
            <section className="menu__contenedor">
                <h1 className="h1__seccion__menu">MENÚ</h1>
                <h3 className="h3__seccion__menu">{secciones[0]}</h3>
                <FlexConteiner info={ productosState.filter(producto => producto.seccion === secciones[0]) } setProductos={setProductosState}/>
                <h3 className="h3__seccion__menu">{secciones[1]}</h3>
                <FlexConteiner info={ productosState.filter(producto => producto.seccion === secciones[1]) }     setProductos={setProductosState}/>
                <h3 className="h3__seccion__menu">{secciones[2]}</h3>
                <FlexConteiner info={ productosState.filter(producto => producto.seccion === secciones[2]) }     setProductos={setProductosState}/>
            </section>

            <div className='div__realizar__pedido'>
                <h1 className="h1__realizar__pedido">REALIZA TU PEDIDO AQUI</h1>
                <h3 className='h3__total__pedido'>Total de pedidos: ${productosState.reduce((acum, producto) => acum + producto.cantidad * producto.precio, 0)}</h3>
                <a href={realizarPedido(tel)} className="boton__realizar__pedido" target='_blank'>Realizar pedido</a>

            </div>
        </div>
    )
}

export default SeccionMenu