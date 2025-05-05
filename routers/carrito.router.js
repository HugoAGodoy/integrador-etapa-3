import express from 'express'
const routerCarrito = express.Router()
import controller from '../controllers/carrito.controller.js'


// ! GetAll
routerCarrito.get('/', controller.obtenerCarritos)

// ! Hacer un post (Create) para que se efectue la compra.
routerCarrito.post('/', controller.guardarCarrito)

export default routerCarrito