const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

//POST
//host:porta/lembrete/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    //const texto = req.body      //funciona por causa da linha: app.use(express.json())    
    const { texto } = req.body      //desestruturação - mesma coisa q o de cima 
    const observacoesDoLembrete = observacoesPorLembreteId [req.params.id] ||/*ou*/  []     //verifica se é undefined, se for acontece o outro lado
    observacoesDoLembrete.push({id: idObs, texto: texto})// ou .push({id: idObs, texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})


//GET
app.get('/lembrete/:id/observacoes', (req, res) => {
    //
})


app.listen(5000, () => {
    console.log('Observacoes. Porta 5000.')
})