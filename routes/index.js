var error = require('./error');
// var usrCtlr = require('../api/controllers/userController');
// var authCtlr = require('../api/controllers/authController');


module.exports = function (app) {

    app.get('/',function(req, res, next) {
                res.render('index.html');
              });

    
   //  app.post('/authenticate', authCtlr.validateCredential);
   //  app.get('/authenticate', authCtlr.testCredential);


   //app.all('*',authCtlr.validateSession);
   //**************** USER BASED API
   //  app.get('/trk/user', usrCtlr.fetchAllUser);
   //  app.get('/trk/user/:user_id', usrCtlr.fetchUser);
   //  app.post('/trk/user', usrCtlr.createNewUser);
   //  app.post('/trk/user/:user_id', usrCtlr.updateUser);
   //  app.delete('/trk/user/:user_id',usrCtlr.deleteUser);

}
