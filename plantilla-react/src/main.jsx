import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './header.jsx'
import Home from './Home/home.jsx'
import Menu from './Menu/menu.jsx'
import Contacto from './Contacto/contacto.jsx'
import Footer from './footer.jsx'
import BotonWhatsApp from './botonWhatsapp.jsx'






// IMAGENES
import logo from "./assets/img/11.png" //Logo de Hero

import paquete_1 from "./assets/img/1.png" //Imagen de Paquete 1
import paquete_2 from "./assets/img/2.png" //Imagen de Paquete 2
import paquete_3 from "./assets/img/7.png" //Imagen de Paquete 3


// IMAGENES DE PRODUCTOS EN MENÚ
import menu__1 from "./assets/img/1.png" //Imagen de Producto 1
import menu__2 from "./assets/img/2.png" //Imagen de Producto 2
import menu__3 from "./assets/img/3.png" //Imagen de Producto 3
import menu__4 from "./assets/img/4.png" //Imagen de Producto 4
import menu__5 from "./assets/img/5.png" //Imagen de Producto 5
import menu__6 from "./assets/img/6.png" //Imagen de Producto 6
import menu__7 from "./assets/img/7.png" //Imagen de Producto 7
import menu__8 from "./assets/img/8.png" //Imagen de Producto 8
import menu__9 from "./assets/img/9.png" //Imagen de Producto 9
import menu__10 from "./assets/img/10.png" //Imagen de Producto 10



// INFORMACION DE ADMINISTRADOR
const telefono = "+525561369256"
const nombreNegocio = "Polar Bliss"
const textoHero = "¡Un helado para cada sonrisa!"
const imgInicio = logo;
const ubicacion = 
" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.528160699546!2d-99.02449706034416!3d19.422596775547383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fcba7a77f861%3A0x729a23faaf13bd51!2sPlaza%20Ciudad%20Jard%C3%ADn!5e0!3m2!1ses!2smx!4v1745511741793!5m2!1ses!2smx";
const enlaces = [
  {
    nombre: "Facebook",
    enlace: "https://www.facebook.com/profile.php?id=61563336665877"
  },
  {
    nombre: "Instagram",
    enlace: "https://www.instagram.com/ki_infinity/"
  }
]

// Sección inicio
const seccionInicio = "Ofertas"

// INFORMACION DE PAQUETES
const informacionPaquetes = [
  {
    nombrePaquete: "Helado mediano 3 sabores",
    precio: 40,
    imagen: paquete_1,
    descripcion: " Vainilla | Chocolate | Fresa",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de esta oferta: "
  },

  {
    nombrePaquete: "Varquillo mediano",
    precio: 25,
    imagen: paquete_2,
    descripcion: "Varquillo mediano | Cubierta de chocolate | Cereal en la cubierta | Sabor de vainilla",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de esta oferta: "
  },

  {
    nombrePaquete: "Agua de frutas",
    precio: 55,
    imagen: paquete_3,
    descripcion: "2 Litros | Trozos de futa | Limon | Manzana | Mandarina | Sandía",
    tel: telefono,
    mensaje: "Quiero realizar el pedido de esta oferta: "
  }

]


// INFORMACIÓN DE PRODUCTOS DE LA SECCIÓN MENÚ
const secciones = ["Helados", "Paletas", "Bebidas"]


const productos = [
  {
    seccion : "Helado",
    id: "1",
    nombre: "Helado mediano de 3 sabores (fresa, vainilla y chocolate)",
    precio: 60,
    imagen: menu__1,
    cantidad: 0
  },
  {
    seccion : "Bebidas",
    id: "2",
    nombre: "Agua de frutas 1 litro",
    precio: 40,
    imagen: menu__7,
    cantidad: 0
  },
  {
    seccion : "Helados",
    id: "3",
    nombre: "Varquillo mediano",
    precio: 25,
    imagen: menu__2,
    cantidad: 0
  },
  {
    seccion : "Helados",
    id: "4",
    nombre: "Helado 7 sabores a elegir (chocolate, vainilla, fresa, galleta, nescafe)",
    precio: 100,
    imagen: menu__3,
    cantidad: 0
  },
  {
    seccion : "Helados",
    id: "5",
    nombre: "1.5 Kg de helado (sabor a elegir)",
    precio: 10,
    imagen: menu__4,
    cantidad: 0
  },
  {
    seccion : "Paletas",
    id: "6",
    nombre: "Paleta sabor vainilla con cubierta de chocolate y nueces",
    precio: 30,
    imagen: menu__5,
    cantidad: 0
  },
  {
    seccion : "Helados",
    id: "7",
    nombre: "Sandwitch con helado (sabores a elegir)",
    precio: 15,
    imagen: menu__6,
    cantidad: 0
  },
  {
    seccion : "Bebidas",
    id: "8",
    nombre: "Agua de 1 Litro sabor a elegir (Limón, manzana, pepino, sandía, piña, horchata) ",
    precio: 30,
    imagen: menu__7,
    cantidad: 0
  },
  {
    seccion : "Bebidas",
    id: "9",
    nombre: "Jugo de 1 Litro sabor a elegir (Naranja, Toronja, Mandarina) ",
    precio: 35,
    imagen: menu__8,
    cantidad: 0
  },
  {
    seccion : "Bebidas",
    id: "10",
    nombre: "Agua de 1/2 Litro sabor a elegir (Limón, manzana, pepino, sandía, piña, horchata) ",
    precio: 20,
    imagen: menu__7,
    cantidad: 0
  },
  {
    seccion : "Paletas",
    id: "11",
    nombre: "Paletas de agua sabor a elegir (Limón, fresa, pepino, sandía, piña, mango) ",
    precio: 10,
    imagen: menu__9,
    cantidad: 0
  },
  {
    seccion : "Paletas",
    id: "12",
    nombre: "Paletas de leche sabor a elegir (vainilla, fresa, galleta, chocolate, rompope) ",
    precio: 15,
    imagen: menu__10,
    cantidad: 0
  }
]



//****** APP  *************
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    {/* CONTENEDOR PRINCIPAL */}
      <div className='contenedor_principal'>

        {/* HEADER */}
        <Header marca={ nombreNegocio } />


        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home logo = {imgInicio} paquetes={informacionPaquetes} textoHero={textoHero} seccionInicio={seccionInicio} marca={nombreNegocio} />} />
          <Route path="/menu" element={<Menu productos={productos} tel={telefono} secciones={secciones} />} />
          <Route path="/contacto" element={<Contacto enlaces={enlaces} ubicacion={ubicacion} />} />
        </Routes>

        {/* BOTON WHATSAPP */}
        <BotonWhatsApp tel={telefono} mensaje="Hola, quiero información sobre tus productos" />
        {/* FOOTER */}
        
      </div>
      <Footer marca={nombreNegocio} año="2025"/>
    </BrowserRouter>
  </StrictMode>
)
