import Fastify from 'fastify'

import cors from "@fastify/cors";
import { appRoutes } from './routes';
import { notificationRoutes } from './notifications-routes';

const PORT = 3333
const app = Fastify()


app.register(cors)
app.register(appRoutes)
app.register(notificationRoutes)


app.listen({
  port: PORT,
  host: '0.0.0.0', // incluir host para mobile acessar api
}).then(() => { console.log('Server is running on port ' + PORT) })