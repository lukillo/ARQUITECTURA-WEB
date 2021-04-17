/**
 * addComponent controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
 const addComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
    } catch (error) {
      next(error);
    }
  }

  /**
 * getComponent controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
 const getComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
    } catch (error) {
      next(error);
    }
  }

  /**
 * updateComponent controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
 const updateComponent = (req,res, next)=>{ 
    try {
      res.status(200).json({"health":"OK"});
    } catch (error) {
      next(error);
    }
  }

  /**
 * deleteComponent controller.
 * @param {object} req request object.
 * @param {object} res response object.
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
      updateComponent,
      deleteComponent
}