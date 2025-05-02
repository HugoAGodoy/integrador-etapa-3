import mongoose from "mongoose"


const ProductoEsquema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        pecio: Number,
        stock: Number,
        marca: String,
        categoria: String,
        detalles: String,
        foto: String,
        envio: Boolean
    },
    {
        timestamps: true,
        versionKey: false
    }

)

const ProductoModelo = mongoose.model('productos', ProductoEsquema)




const obtenerTodosLosProductos = async () => {
   try {
        const productos = await ProductoModelo.find()
        return productos  
    } catch (error) {
        throw error
    }
}


const obtenerUnProducto = async (id) => {
  try {
        const producto = await ProductoModelo.findById(id)
        return producto
    } catch (error) {
        throw error
    }  
}



const crearUnProducto = async (productoNuevo) => {

try {
    const productoAGuardar = new ProductoModelo(productoNuevo)
    const productoGuardado = await productoAGuardar.save()
    return productoGuardado
    } catch (error) {
    throw error
    }
}

const editarUnProducto = async (productoAEditar) => {
    try {
        const options = { new: true }
        const productoEditado = await ProductoModelo.findByIdAndUpdate(productoAEditar.id, productoAEditar, options)
        return productoEditado
    } catch (error) {
        throw error
    }
}


const eliminarProducto = async (id) => {
    try {
        const productoEliminado = await ProductoModelo.findByIdAndDelete(id)
        return productoEliminado
    } catch (error) {
        throw error
    }
}


export default {
    obtenerTodosLosProductos,
    obtenerUnProducto,
    crearUnProducto,
    editarUnProducto,
    eliminarProducto
}

