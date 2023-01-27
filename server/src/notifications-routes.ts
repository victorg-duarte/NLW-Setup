import { FastifyInstance, } from "fastify";
import { z } from "zod";
import WebPush from "web-push"

// para gerar e pegar a chave publica e privada
/*console.log(WebPush.generateVAPIDKeys())*/

const publicKey = 'BD1sV2AVywLmJJfooQwmD6JHnnKEYvTEc7gs4NcCYH0kceBt8DcnGWU_raenfzrYPrnuPVjrDn1vemTK47ftMw0'
const privateKey = 'N5yYkB8bLrrumc1piNfW1n0IP2bkFaFeoA4iGsnzWMI'

// passar as chaves
WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {

  // rota para frontend receber a chave publica
  app.get('/push/public_key', () => {
    return {
      publicKey
    }
  })

  // associar o id do usaurio que aceitou receber notificacoes com o id do usuario logado
  app.post('/push/register', (request, response) => {
    // conectar essa subscription com o usuario logado EX: UserNotificationSubscription (table) no prisma
    console.log(request.body);
    return response.status(201).send()
  })

  // enviar a notificacao 
  app.post('/push/send', async (request, response) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'HELLO DO BACKEND')
    }, 5000)


    return response.status(201).send()
  })
}



