import Fastify from 'fastify'

import cors from "@fastify/cors";
import { appRoutes } from './routes';

const PORT = 3333
const app = Fastify()


app.register(cors, {
  origin: ['http://localhost:3000']
})
app.register(appRoutes)


app.listen({
  port: PORT
}).then(() => { console.log('Server is running on port ' + PORT) })