import "./flexContainer.css"
import ItemMenu from './itemMenu.jsx'
function FlexConteiner( { info, setProductos } ){
    return(
        <div className="flex__container">
           <ItemMenu info={info} setProductos={setProductos}/>
        </div>
    )
}

export default FlexConteiner