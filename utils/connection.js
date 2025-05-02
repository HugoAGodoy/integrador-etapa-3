import mongoose from 'mongoose'

const connection = async (uri) => {

    try {
        await mongoose.connect(uri)
        console.log('Conexion a MongoDB OK')
    } catch (error) {
        console.log('Conexion Error', error)
    }
}

export default connection