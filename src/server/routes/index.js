/**
 * Required modules.
 */
 const health = require('../controller/health');
 const notFound = require('../controller/not-found');
//  const { processEvent } = require('../controller/notifications');
//  const { confirmSubscrition } = require('../../lib/openPassSubscriptor');
 //Bind path with route.
 const bind = app => {
   
   app.get('/health', health);
//    app.post('/events', confirmSubscrition, processEvent);
   app.get('*', notFound);
 
 }
 
 module.exports = {
   bind
 };
 