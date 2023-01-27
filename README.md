# NLW-Setup - Habits ✔️

## Índice
* [Índice](#índice)
* [Projeto](#projeto)
* [Tecnologias](#tecnologias)
* [Rotas da aplicação (API)](#rotas-da-aplicação)
* [After NLW Setup](#after-nlw-setup)
* [Anexos](#anexos)

## Projeto
Desenvolvimento backend, frontend e mobile com as principais stacks do mercado pela [Rocketseat](https://app.rocketseat.com.br/) no evento NLW (Next Level Week). O projeto (Habits) é uma aplicação para criar e checar seus hábitos se foram completados ou não.

## Tecnologias
* Back-end
  * __NodeJS__
  * __Fastify__ Lidar com requisições HTTP. (api RESTFUL)
  * __SQLite__ Banco de dados
  * __Prisma__ ORM
  * __Cors__ para liberar acesso à API (npm i @fastify/cors)
  * __Zod__ Tipar os dados vindo da requisição
  * __dayjs__ lib para trabalhar com datas

* Front-end
  * __ReactJS__
  * __Vite__ ferramenta de construção para front-end
  * __TailwindCSS__ para estilização
  * __Phosphor-React__ para ícones
  * __dayjs__ lib para trabalhar com datas
  * __radix-ui__ lib de componentes sem qualquer estilização (necessário estilizar-lo) com foco em acessibilidade
  * __clsx__ lib para condicionar classes css
  * __Axios__ para acessar API
* Mobile
    * __React-Native__
    * __Expo__ framework de desenvolvimento mobile
    * __dayjs__ lib para trabalhar com datas
    * __nativewind__ lib para usar o tailwind no react-native
    * __react-native-svg__ lib para lidar com svg no react-native
    * __react-native-svg-transformer__ lib para usar svg como componente
    * __React-Navigation__ lib para navegação de telas
    * __Axios__ para acessar API
    * __clsx__ lib para condicionar classes css
    * __react-native-reanimated__ lib para animações

## Rotas da aplicação

| Método | Caminho da Rota | Descrição da Rota |
|---|---|---|
| POST | http://localhost:3333/habits | Criar hábito |
| GET | http://localhost:3333/day?date=2023-01-20T14:00:00.000Z | Buscar os hábitos completos e incompletos pela data passada na query da requisição  |
| PATCH | http://localhost:3333/habits/:id/toogle | Atualizar se o hábito foi concluído ou não, passando o habitId como parâmetro na requisição |
| GET | http://localhost:3333/summary | Buscar os hábitos de cada data + quantidade de recorrência deles no dia (amount) + quantidade de hábitos completados no dia (completed)  |
## After NLW Setup
#### Usando o __Push Notifications__
- Push Notifications - Basicamente envia uma notificação para usuário da aplicação 
- Service Workers
  - Basicamente	são scripts que pode manter executando na nossa aplicação quando ela tiver fechada ou mesmo quando o usuário tiver offline, sem conexão com a internet.
  -	São scripts que rodam por “baixos do panos” em background enquanto estiver aberto no navegador do usuário, sendo a nossa aplicação aberta ou não.
  -	Muito utilizado em PWAs (Progressive Web App)

Na web/server
-	npm i web-push: instalação no backend para lidar com as push notifications
-	npm i @types/web-push -D: É preciso instalar as tipagens do web-push como dependência de desenvolvimento

No mobile
- npx expo install expo-notifications: lib para lidar com notificações no mobile
- No expo pode agendar uma notificação local, diferente da web que é necessário o backend para agendar
## Anexos
* [Projeto no figma](https://www.figma.com/community/file/1195326661124171197)
* [After NLW Setup - video aula](https://www.youtube.com/watch?v=nNvxERiVb_s)




