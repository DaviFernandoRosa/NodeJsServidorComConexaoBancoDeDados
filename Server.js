const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes =  require('./routes');

const app = express();
const port = process.env.PORT || 5000;

//CONEXAO COM BANCO DE DADOS MONGO DB
mongoose.connect('mongodb://localhost:27017/Teste',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
   
},function (err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port,function(){
    console.log(`Servidor rodando na porta: ${port}`)
});
