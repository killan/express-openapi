const express = require('express')
const swaggerUi = require("swagger-ui-express");
const SwaggerParser = require('swagger-parser')
const swaggerRoutes = require('swagger-routes-express')
const ctrls = require('./controllers')
const cors = require("cors")

const makeApp = async () => {
  const parser = new SwaggerParser()
  const apiDescription = await parser.validate('./api/openapi.yaml')
  const connect = swaggerRoutes.connector(ctrls, apiDescription)
  const app = express()

  // Options
  app.set("etag", false); //turn off
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(express.json());

  app.use(cors({
    origin: '*'
  }))

  // This is the endpoint that will display the swagger docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDescription));

  // Connect the routes
  connect(app)

  // Add any error handlers last

  return app
}
module.exports = makeApp