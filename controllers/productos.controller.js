// import models from '../models/productos.model.js'
// import handleMongoId from '../utils/handle-mongo-id.js'


// const getAll = async (req, res) => {

//   try{
//   const productos = await models.obtenerTodosLosProductos()
//     res.json(handleMongoId(productos))
//   } catch (error) {
//        console.log(error)
//   }
// }


//   const getOne = async (req, res) => {
//     const id = req.params.id
    
//     try{
//       const producto = await models.obtenerUnProducto(id)
//       res.json(handleMongoId(producto))
//     } catch (error) {
//        console.log(error)
//        res.status(500).json({ mensaje: 'No se pudo obtener el producto solicitado'})
//     }
//   }


//   const create = async (req, res) => {
//     const productoACrear = req.body

//     try {
//         const productoGuardado = await models.crearUnProducto(productoACrear)
//         res.status(201).json(handleMongoId(productoGuardado))
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ mensaje: 'Algo falló, no se pudo guardar el producto'})
//     }

    
// }


//   const update = async (req, res) => {
//     const id = req.params.id
//     const productoAEditar = req.body
//     productoAEditar.id = id

//     try {
//         const productoEditado = await models.editarUnProducto(productoAEditar)
//         res.json(handleMongoId(productoEditado))
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ mensaje: 'No se pudo editar el producto solicitado'})
//     }
// }


//   const remove = async (req, res) => {
//     const id = req.params.id

//     try {
//         const productoEliminado = await models.eliminarProducto(id)
//         res.json(handleMongoId(productoEliminado))
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ mensaje: 'No se pudo borrar el producto'})
//     }

// }
 

//   export default {
//     getAll,
//     getOne, 
//     create,
//     update,
//     remove
//   }




import models from '../models/productos.model.js';
import handleMongoId from '../utils/handle-mongo-id.js';

const getAll = async (req, res) => {
  try {
    const productos = await models.obtenerTodosLosProductos();
    res.json(handleMongoId(productos));
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'No se pudo obtener la lista de productos' });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;

  try {
    const producto = await models.obtenerUnProducto(id);
    res.json(handleMongoId(producto));
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'No se pudo obtener el producto solicitado' });
  }
};

const create = async (req, res) => {
  const productoACrear = {
    ...req.body,
    precio: Number(req.body.precio),
    stock: Number(req.body.stock)
  };

  try {
    const productoGuardado = await models.crearUnProducto(productoACrear);
    res.status(201).json(handleMongoId(productoGuardado));
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'Algo falló, no se pudo guardar el producto' });
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  const productoAEditar = {
    ...req.body,
    precio: Number(req.body.precio),
    stock: Number(req.body.stock),
    id
  };

  try {
    const productoEditado = await models.editarUnProducto(productoAEditar);
    res.json(handleMongoId(productoEditado));
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'No se pudo editar el producto solicitado' });
  }
};


const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const productoEliminado = await models.eliminarProducto(id);
    res.json(handleMongoId(productoEliminado));
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: 'No se pudo borrar el producto' });
  }
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove
};
