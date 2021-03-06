import express from 'express'
import cors from 'cors'
import Categoria from './models/categoria'
import routerCategorias from './routers/categorias'
// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// Endpoint raiz
app.get('/', (req, res) => {
	res.send('EatPay')
})

//Endpoint para listar todas as categorias
app.use('/', routerCategorias)

// Cors
app.use(cors({
	origin: ['http://localhost:3000']
}))

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
	res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})