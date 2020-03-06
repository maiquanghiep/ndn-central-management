const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, '../src/route');
const createError = require('http-errors');
const addRoute = async (app) => {
  const files = await readDir()
  files.forEach(function (file) {
    const baseUrl = file.split(".").shift()
    const router = require('../src/route/' + file)
    app.use("/" + baseUrl, router)
  })


  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
}
  
const readDir = () => {
  return new Promise((resolve, reject) => {
      fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        reject(err)
      } 
        resolve(files)
      });
  })
}

module.exports = addRoute