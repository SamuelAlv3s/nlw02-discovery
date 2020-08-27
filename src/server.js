/*function pageLanding(req, res){
    ***sem nunjucks*** return res.sendFile(__dirname + '/views/index.html');
}*/

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

// Configurar nunjucks
nunjucks.configure('./src/views', {
    express: server,
    noCache: true,
});

//receber os dados do req.body
server.use(express.urlencoded({extented: true})); 

// Configurar arquivos estáticos (css, js, imagens)
server.use(express.static('public'));

// Rotas da aplicação
server.get('/', pageLanding);
server.get('/study', pageStudy);
server.get('/give-classes', pageGiveClasses);
server.post('/give-classes', saveClasses)
server.listen(5500);