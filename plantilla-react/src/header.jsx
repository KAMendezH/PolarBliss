// IMPORTACIONES
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'


// ANIMACIÓN DE HEADER
function header({ marca }){
    const [visible, serVisible] = useState(true);
    let lastScroll = 0; // INICIALIZADO EN 0 PARA DISTINGUIR "ARRIBA" Y "ABAJO"

    useEffect(()=>{
        const handleScroll = () => {
            let currentScroll = window.scrollY;
            if(currentScroll > lastScroll){   // SI ES MAYOR, EL USUARIO HA SIDO DESPLAZADO HACIA "abajo"
                serVisible(false);
            }
            else{
                serVisible(true);
            }
            lastScroll = currentScroll;  // ASIGNACIÓN DEL ÚLTIMO SCROLL
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
      
    
        
    // USO DE USELOCATION PARA OBTENER LA RUTA ACTUAL
    const location = useLocation(); 

    // RETORNO DEL COMPONENTE HEADER
    return(
                // HEADER
            <header className={`header ${visible ? "header__visible" : "header__invisible"}`}>


                {/* NOMBRE DEL MARCA */}
                <h1 className='h1__marca'> 
                    <span className='h1__marca__inicial'>{marca.slice(0, 5)}</span>{/*CONTENEDOR PARA LETRAS COLOR PRIMARIO*/}
                    {marca.slice(5)}
                </h1>


                {/* NAVEGACIÓN */}
                <nav className='navegacion'>
                    <Link to="/" className={`a__inicio  ${location.pathname === "/" ? "link__activo" : ""}`} >INICIO</Link>
                    <Link to="/menu" className={`a__menu ${location.pathname === "/menu" ? "link__activo" : ""}`} >MENÚ</Link>
                    <Link to="/contacto" className={`a__contacto ${location.pathname === "/contacto" ? "link__activo" : ""}`}>CONTACTO</Link>
                 </nav>



             </header> 
    )
}

export default header

