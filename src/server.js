const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})

server
//Configurar arquivos estaticos(css,scripts,imagens)
.use(express.static("public"))
//Receber os dados do req.body 
.use(express.urlencoded({ extended: true }))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Inicia o servidor
.listen(5500)