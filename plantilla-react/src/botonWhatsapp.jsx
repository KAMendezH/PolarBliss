import "./botonWhatsapp.css";
import { FaWhatsapp } from "react-icons/fa6";

function BotonWhatsApp( { tel, mensaje } ) {
    return (
        <a
            href={`https://wa.me/${tel}?text=${mensaje.replace(" ", "%20")}.`}
            className="boton_whatsapp"
            target="_blank"
            rel="noopener noreferrer"
        >
             <FaWhatsapp className="burbuja_icono"/>
        </a>
    );
}

export default BotonWhatsApp;