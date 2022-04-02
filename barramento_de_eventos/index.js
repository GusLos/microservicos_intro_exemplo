const express = require ('express')
const axios = require ('axios')
const app = express()
app.use(express.json())

//(app/express) recebe requisição
app.post('/eventos', (req, res) => {
    const evento = req.body     //  {tipo: LembreteCriado, dados: {}}

    //(axios) faz uma requisição
    axios.post('localhost:4000/eventos', evento)
    axios.post('localhost:5000/eventos', evento)
    res.status(200).json({msg: "ok"})
})

app.listen(1000, () => {
    console.log("Barramento de eventos. Porta 1000.")
})

