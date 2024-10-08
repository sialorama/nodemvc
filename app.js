const express = require('express');
const app = express();

// middleware, s'exécute à chaque requête http
app.use(function(req, res, next) {
    console.log(Date.now());
    next(); // continue sur les routes.
})

app.use(express.json())

app.set("views", __dirname + '/views') // donne le répertoire des vues
app.set("view engine", "ejs")


app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/about', (req, res) => {
    res.send('framework de developpement créé par les DEVWEB')
})

app.get('/json', (req, res) => {
    res.json({ nom: 'Tomi' , age: 5   })
})

// mode MVC . le html est produit par le rendu template/datas et renvoyé au client. 
app.get('/essaiejs' , (req, res) => {
    res.render('essai.ejs', { nom: 'Tomi', age: 5 } )
})


app.listen(3030,()=>console.log('listening on port 3030 '))

