const { cms } = require('@tensei/cms')
const { auth } = require('@tensei/auth')
const { media } = require('@tensei/media')
// const { graphql } = require('@tensei/graphql')
const { tensei, welcome, cors } = require('@tensei/core')
const assignee = require('./models/assignee')
const comment = require('./models/comment')
const tags = require('./models/tags')
const task = require('./models/task')
const { rest } = require('@tensei/rest')
const analyticsRoute = require('./routes/analytic')

tensei()
  .root(__dirname)
  .plugins([
    welcome(),
    cms().plugin(),
    // media().plugin(),
    auth().plugin(),
    rest().plugin(),
    // graphql().plugin(),
    cors()
  ])
  .databaseConfig({
    type: "mongo",
    dbName: "drug-stoc",
    user:'jona',
    password:'jona',
    clientUrl: 'mongodb+srv://jona:jona@cluster0.xznle.mongodb.net?retryWrites=true&w=majority'
  })
  .resources([
    assignee, comment, tags, task
  ])
  .routes([analyticsRoute])
  .start()
  .catch(console.error)
