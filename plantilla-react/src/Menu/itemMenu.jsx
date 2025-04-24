import "./itemMenu.css"
import React from "react"
function ItemMenu(  { info, setProductos }  ){

    const incrementarCantidad = (id)=>{
        console.log(info)
        setProductos(prevProductos =>
            prevProductos.map(producto =>
                producto.id === id
                ? { ...producto, cantidad: producto.cantidad + 1 } 
                : producto
            )
        );
    };
    

    const decrementarCantidad = (id)=>{
        console.log("decrementar")
        setProductos(prevProductos =>
            prevProductos.map(producto =>
                producto.id === id
                ? { ...producto, cantidad: producto.cantidad - 1 } 
                : producto
            )
        );
    }



    return(
        
            <>
            {
                info.map(producto =>(

                    
                    <React.Fragment key={producto.id}>
                        <div className="item__menu">
                        <div  className="div__menu__img">
                            <img className="menu__img" src={producto.imagen} alt={producto.nombre}/>
                        </div>
                        <p className="menu__item__p menu__nombre__producto">{ producto.nombre }</p>
                        <h4 className="h4__menu">${ producto.precio }</h4>
                        <div className="div__item__contador">
                            <button 
                                className="boton__contador__menu"
                                onClick={()=> decrementarCantidad(producto.id)}
                                >
                                    -
                                </button>
                            <p className="menu__item__p">{ producto.cantidad }</p>
                            <button 
                                className="boton__contador__menu"
                                onClick={()=> incrementarCantidad(producto.id)}
                            >
                                +
                                </button>
                        </div>
                        </div>
                    </React.Fragment>
                     



                ))
             
            }

            </>



        
    )
}

export default ItemMenu 

