import SeccionMenu from './seccionMenu.jsx'
import './menu.css'

function Menu( {  productos, tel, secciones } ){
  

    return(
        <div className="menu" >
            <div className="div__info__menu">
                <p className='div__info__menu_p animacion__menu'>- Añade 1 articulo usando "+" en el contador de cada producto</p>
                <p className='div__info__menu_p animacion__menu'>- Elimina 1 articulo usando "-" en el contador de cada producto</p>
                <p className='div__info__menu_p animacion__menu'>- Después de seleccionar los productos que quieres comprar, pulsa el boton "Realizar pedido" al final de la sección</p>
                <a className='enlace__menu animacion__menu' href='#seccionMenu'>Ir al Menú</a>
            </div>
          
                <SeccionMenu productos={productos} tel={tel} secciones={secciones}/>
           
            
        </div>
    )
}

export default Menu