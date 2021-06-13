const assert = require('assert');
const createError = require('http-errors');
const { create, read, update, deleteItem, readAll } = require('../../services/mechanicalComponents');

/**
 * @api {post} /addComponent
 * @apiGroup  mechanical-components
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 201:OK
 * {
 *  "id": "uuid id de la autoparte",
 *  "category": "string categoria de la autoparte",  
 *  "description": "string descripcion",
 *  "price": "float precio",
 *  "stock": "integer stock",
 *  "brand": "string marca",
 *  "type": "string auto camioneta camion", 
 *  "title": "string titulo del repuesto",
 *  "pictures": "[string] array de imagenes"
 * }
 *
 * @apiSuccess 201 status OK Se creo la autoparte con exito
 * @apiError 400 status Bad Request faltan campos en el payload
 * @apiError 500 status Internal server error Erro no esperado
 * @apiError 502 status Bad Gateway Error conectadonse con otra api(mongo)
 */
 const addComponent = async (req,res, next)=>{ 
    try {
      const {
        id, 
        category,
        description, 
        price, 
        stock, 
        brand, 
        type, 
        title,
        pictures
      } = req.body

      assert(id, createError.BadRequest());
      assert(category, createError.BadRequest());
      assert(description, createError.BadRequest());
      assert(price, createError.BadRequest());
      assert(stock, createError.BadRequest());
      assert(brand, createError.BadRequest());
      assert(type, createError.BadRequest());
      assert(title, createError.BadRequest());
      assert(pictures, createError.BadRequest());

      await create(id, 
        category,
        description, 
        price, 
        stock, 
        brand, 
        type, 
        title,
        pictures);
      res.status(201).json({"Created":"OK"});
    } catch (error) {
      next(error);
    }
  }

/**
 * @api {get} /getComponent/:id
 * @apiGroup  mechanical-components
 * @apiVersion 1.0.0
 * @apiParam {Number} id Component unique ID.
 * @apiSuccessExample {json} 200:OK
 * {
 *  "id": "uuid id de la autoparte",
 *  "category": "string categoria de la autoparte",  
 *  "description": "string descripcion",
 *  "price": "float precio",
 *  "stock": "integer stock",
 *  "brand": "string marca",
 *  "type": "string auto camioneta camion", 
 *  "title": "string titulo del repuesto",
 *  "pictures": "[string] array de imagenes"
 * }
 *
 * @apiSuccess 200 status OK 
 * @apiError 400 status Bad Request falta id
 * @apiError 404 status articulo no encontrado
 * @apiError 500 status Internal server error Erro no esperado
 * @apiError 502 status Bad Gateway Error conectadonse con otra api(mongo)
 */
 const getComponent = async (req,res, next)=>{ 
    try {
      const { id } = req.params;

      assert(id, createError.BadRequest());

      const item = await read(id);

      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

/**
 * @api {get} /getAllComponents
 * @apiGroup  mechanical-components
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 200:OK
 * [{
 *  "id": "uuid id de la autoparte",
 *  "category": "string categoria de la autoparte",  
 *  "description": "string descripcion",
 *  "price": "float precio",
 *  "stock": "integer stock",
 *  "brand": "string marca",
 *  "type": "string auto camioneta camion", 
 *  "title": "string titulo del repuesto",
 *  "pictures": "[string] array de imagenes"
 * }]
 *
 * @apiSuccess 200 status OK 
 * @apiError 400 status Bad Request algun campo en el payload
 * @apiError 404 status la busqueda no devolvio ningun resultado
 * @apiError 500 status Internal server error Erro no esperado
 * @apiError 502 status Bad Gateway Error conectadonse con otra api(mongo)
 */
 const getAllComponents = async (req,res, next)=>{ 
  try {
    const items = await readAll();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
}

  /**
/**
 * @api {patch} /updateComponent/:id
 * @apiGroup  mechanical-components 
 * @apiVersion 1.0.0
 * @apiParam {Number} id Component unique ID.
 * @apiSuccess  {json} 200: {}
 * @apiParam  {String} category string categoria de la autoparte
 * @apiParam  {String} description string descripcion
 * @apiParam  {Float} price float precio
 * @apiParam  {Integer} tock integer stock
 * @apiParam  {String} brand string marca 
 * @apiParam  {String} type string auto camioneta camion 
 * @apiParam  {String} title string titulo del repuesto 
 * @apiParam  {String} pictures [string] array de imagenes
 * @apiParamExample {json} Request-Example:
 * {
 * category
 * description
 * price
 * stock
 * brand
 * type
 * title
 * pictures
 *
 * }
 * @apiError 500 status Error inesperado
 * @apiError 502 status Error al acceder a la base de dartos
 * @apiError 504 status Timeout
 */
 const updateComponent = async (req,res, next)=>{ 
    try {
      const {
        id
      } = req.params;

      assert(id, createError.BadRequest());

      await update(id, req.body);

      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  }

/**
 * @api {delete} /deleteComponent/:id
 * @apiGroup  mechanical-components
 * @apiVersion 1.0.0
 * @apiParam {Number} id Component unique ID.
 * @apiSuccessExample {json} 200:OK
 * {}
 * @apiSuccess 200 status OK 
 * @apiError 400 status Bad Request falta el clientID
 * @apiError 404 status no se encontro el usuario
 * @apiError 500 status Error inesperado
 * @apiError 502 status Error al acceder a la base de dartos
 * @apiError 504 status Timeout
 */
 const deleteComponent = async (req,res, next)=>{ 
    try {
      const {
        id
      } = req.params;

      assert(id, createError.BadRequest());
      await deleteItem(id);

      res.status(200).json({"Result":"OK"});
    } catch (error) {
      next(error);
    }
  }
  
  module.exports = {
      addComponent,
      getComponent,
      getAllComponents,
      updateComponent,
      deleteComponent
}