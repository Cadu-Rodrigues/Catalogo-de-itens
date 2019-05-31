const express = require('express');
const bd = require('../../config/banco.js');
const app = express();

app.get("/",function(req,resp){
    resp.render('index');
});
app.get("/Camisetas",function(req,resp){
    bd.all('Select * From produto where tipoItem = "Camiseta"',function(erro,resultados){
        resp.render('consulta', {data:resultados });
    });

});
app.get("/Moletons",function(req,resp){
    bd.all('Select * From produto where tipoItem = "Moletom"',function(erro,resultados){
        resp.render('consulta', {data:resultados });
    });

});
app.get("/Canecas",function(req,resp){
    bd.all('Select * From produto where tipoItem = "Caneca"',function(erro,resultados){
        resp.render('consulta', {data:resultados });
    });

});
app.get("/Outros",function(req,resp){
    bd.all('Select * From produto where tipoItem = "Outros"',function(erro,resultados){
        resp.render('consulta', {data:resultados });
    });

});
module.exports = app;
return module.exports;