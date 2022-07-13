const makeApp = require('./makeApp')
const port = 3000;

makeApp()
  .then(app => app.listen(port))
  .then(() => {
    console.log(`App running on port ${port}...`)
  })
  .catch(err => {
    console.error('caught error', err)
  })