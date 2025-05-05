import mongoose from "mongoose"


const carritoSchema = mongoose.Schema(
    {
        carrito: Array
    },
    {
        timestamps: true, // createAt | updatedAt
        versionKey: false
    }
)

const CarritoModel = mongoose.model('carritos', carritoSchema)


const crearCarrito = async (carrito) => {

    try {
        const carritoCreado = new CarritoModel( carrito )
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado

    } catch (error) {
        throw error
    }
}





const obtenerCarritos = async () => {
    try {
        const carritos = await CarritoModel.find();
        return carritos;
    } catch (error) {
        throw error;
    }
};

export default {
    crearCarrito,
    obtenerCarritos
};
