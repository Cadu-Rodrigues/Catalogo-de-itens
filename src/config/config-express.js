const express = require('express');
const app = require('../app/rotas/rotas');

app.use(express.static('./src/app/recursos'));

app.set('views','./src/app/views');
app.set('view engine','ejs');

module.exports = app;
return module.exports;