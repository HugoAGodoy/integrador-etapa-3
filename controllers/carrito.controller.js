import model from '../models/carrito.model.js'

const guardarCarrito = async (req, res) => {
    const carrito = req.body

    try {

        const carritoGuardado = await model.crearCarrito(carrito)
        res.status(201).json(carritoGuardado)
        
    } catch (error) {

          console.log('[guardarCarrito]', error)
          let mensaje = 'No se pudo guardar el carrito'
          res.status(500).json(mensaje)
    }
}



const obtenerCarritos = async (req, res) => {
    try {
        const carritos = await model.obtenerCarritos();
        res.json(carritos);
    } catch (error) {
        console.log('[obtenerCarritos]', error);
        res.status(500).json({ mensaje: 'No se pudieron obtener los carritos' });
    }
};

export default {
    guardarCarrito,
    obtenerCarritos
};
