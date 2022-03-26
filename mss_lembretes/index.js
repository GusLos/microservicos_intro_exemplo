const express = require('express')
const app = express()
//estamos aplicando um middleware
app.use((req, res, next) => {
    console.log("oi")
    next()
})
app.use(express.json())


const lembretes = {}
contador = 0


//GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)         //res.statusCode().send()???
})

//POST
//exemplo.com.br/lembretes
app.post('/lembretes', (req, res) => {
    contador++
    //{texto: "Fazer café"}
    const {texto} = req.body
    lembretes[contador] = {contador, texto}         // JSON -> {contador: contador, texto: texto} mas pode ser {contador, texto}
    res.status(201).send(lembretes[contador]) 
})



app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})


