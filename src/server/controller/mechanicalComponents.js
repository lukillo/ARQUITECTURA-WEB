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
 const addComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
    } catch (error) {
      next(error);
    }
  }

/**
 * @api {get} /getComponent
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
 const getComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
    } catch (error) {
      next(error);
    }
  }

/**
 * @api {post} /getAllComponents
 * @apiGroup  mechanical-components
 * @apiVersion 1.0.0
 * @apiParamExample {json} 200:Success
 * {
 *       "category":"category string",
 *       "brand":"brand string",
 *       "type":"string type"
 *  }
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
 * @apiError 400 status Bad Request algun campo en el payload
 * @apiError 404 status la busqueda no devolvio ningun resultado
 * @apiError 500 status Internal server error Erro no esperado
 * @apiError 502 status Bad Gateway Error conectadonse con otra api(mongo)
 */
 const getAllComponents = (req,res, next)=>{ 
  try {
    res.status(200).json({"health":"OK"});
  } catch (error) {
    next(error);
  }
}

  /**
/**
 * @api {patch} /updateComponent
 * @apiGroup  mechanical-components 
 * @apiVersion 1.0.0
 * @apiSuccess  {json} 201:Created {}
 * @apiParam  {String} id uuid id de la autoparte,
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
 * id
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
 const updateComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
    } catch (error) {
      next(error);
    }
  }

/**
 * @api {delete} /deleteComponent
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
 const deleteComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
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