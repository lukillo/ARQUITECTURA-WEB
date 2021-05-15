/**
 * Required modules.
 */
 const health = require('../controller/health');
 const notFound = require('../controller/not-found');
 const { addComponent,getComponent,updateComponent,deleteComponent, getAllComponents } = require('../controller/mechanicalComponents');

 //Bind path with route.
 const bind = app => {
   
   app.get('/health', health);
   app.post('/mechanical-components', addComponent);
   app.get('/mechanical-component/:id', getComponent);
   app.get('/mechanical-component', getAllComponents);
   app.patch('/mechanical-components/:id', updateComponent);
   app.delete('/mechanical-components/:id', deleteComponent);

   app.get('*', notFound);
 
 }
 
 module.exports = {
   bind
 };
 