import imgProducto from '../images/tv32p.avif'
import '../styles/presentacion.css'

let producto = {
    name: 'Television 34 pulgadas',
    descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' +
        ' Nihil fuga ducimus ipsum mollitia pariatur nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    precio: '$' + 239,

}


function Presentacion() {
    return (
        <header  className="header-oferta">
            <h2 className="titulo-oferta">Oferta Irresisitible</h2>
            <section className="container-producto-oferta">
                
                <div className='primer-div'>
                    <p className="titulo-producto-oferta">{producto.name}</p>
                    <p className="descripcion-producto-oferta">{producto.descripcion}</p>
                </div>
                <div className='segundo-div'>
                    <img className="img-producto-oferta" src={imgProducto} alt="imagen del producto en oferta" />
                    <small className="precio-producto-oferta">{producto.precio}</small>
                    <a href="" className="btn-compra-oferta">Comprar</a>
                </div>
            </section>
        </header>
    )
}

export default Presentacion