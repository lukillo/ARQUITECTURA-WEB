define({ "api": [
  {
    "type": "delete",
    "url": "/deleteComponent/:id",
    "title": "",
    "group": "mechanical-components",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Component unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200:OK",
          "content": "{}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>status Bad Request falta el clientID</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>status no se encontro el usuario</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>status Error inesperado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>status Error al acceder a la base de dartos</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "504",
            "description": "<p>status Timeout</p>"
          }
        ]
      }
    },
    "filename": "src/server/controller/mechanicalComponents.js",
    "groupTitle": "mechanical-components",
    "name": "DeleteDeletecomponentId"
  },
  {
    "type": "get",
    "url": "/getAllComponents",
    "title": "",
    "group": "mechanical-components",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "200:OK",
          "content": "[{\n \"id\": \"uuid id de la autoparte\",\n \"category\": \"string categoria de la autoparte\",  \n \"description\": \"string descripcion\",\n \"price\": \"float precio\",\n \"stock\": \"integer stock\",\n \"brand\": \"string marca\",\n \"type\": \"string auto camioneta camion\", \n \"title\": \"string titulo del repuesto\",\n \"pictures\": \"[string] array de imagenes\"\n}]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>status Bad Request algun campo en el payload</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>status la busqueda no devolvio ningun resultado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>status Internal server error Erro no esperado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>status Bad Gateway Error conectadonse con otra api(mongo)</p>"
          }
        ]
      }
    },
    "filename": "src/server/controller/mechanicalComponents.js",
    "groupTitle": "mechanical-components",
    "name": "GetGetallcomponents"
  },
  {
    "type": "get",
    "url": "/getComponent/:id",
    "title": "",
    "group": "mechanical-components",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Component unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "200:OK",
          "content": "{\n \"id\": \"uuid id de la autoparte\",\n \"category\": \"string categoria de la autoparte\",  \n \"description\": \"string descripcion\",\n \"price\": \"float precio\",\n \"stock\": \"integer stock\",\n \"brand\": \"string marca\",\n \"type\": \"string auto camioneta camion\", \n \"title\": \"string titulo del repuesto\",\n \"pictures\": \"[string] array de imagenes\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>status OK</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>status Bad Request falta id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>status articulo no encontrado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>status Internal server error Erro no esperado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>status Bad Gateway Error conectadonse con otra api(mongo)</p>"
          }
        ]
      }
    },
    "filename": "src/server/controller/mechanicalComponents.js",
    "groupTitle": "mechanical-components",
    "name": "GetGetcomponentId"
  },
  {
    "type": "patch",
    "url": "/updateComponent/:id",
    "title": "",
    "group": "mechanical-components",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Component unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>string categoria de la autoparte</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>string descripcion</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>float precio</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "tock",
            "description": "<p>integer stock</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>string marca</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>string auto camioneta camion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>string titulo del repuesto</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pictures",
            "description": "<p>[string] array de imagenes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\ncategory\ndescription\nprice\nstock\nbrand\ntype\ntitle\npictures\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "200:",
            "description": "<p>{}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>status Error inesperado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>status Error al acceder a la base de dartos</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "504",
            "description": "<p>status Timeout</p>"
          }
        ]
      }
    },
    "filename": "src/server/controller/mechanicalComponents.js",
    "groupTitle": "mechanical-components",
    "name": "PatchUpdatecomponentId"
  },
  {
    "type": "post",
    "url": "/addComponent",
    "title": "",
    "group": "mechanical-components",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "201:OK",
          "content": "{\n \"id\": \"uuid id de la autoparte\",\n \"category\": \"string categoria de la autoparte\",  \n \"description\": \"string descripcion\",\n \"price\": \"float precio\",\n \"stock\": \"integer stock\",\n \"brand\": \"string marca\",\n \"type\": \"string auto camioneta camion\", \n \"title\": \"string titulo del repuesto\",\n \"pictures\": \"[string] array de imagenes\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "201",
            "description": "<p>status OK Se creo la autoparte con exito</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>status Bad Request faltan campos en el payload</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>status Internal server error Erro no esperado</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "502",
            "description": "<p>status Bad Gateway Error conectadonse con otra api(mongo)</p>"
          }
        ]
      }
    },
    "filename": "src/server/controller/mechanicalComponents.js",
    "groupTitle": "mechanical-components",
    "name": "PostAddcomponent"
  }
] });
