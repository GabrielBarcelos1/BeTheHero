const express = require('express')
const {celebrate,Segments,Joi} = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentControllers')
const ProfileController = require('./controllers/ProfileControler')
const SessionController = require('./controllers/SessionControler')
const routes = express.Router()

routes.post('/sessions',celebrate({
    [Segments.BODY]:Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.required()
    })
}),SessionController.create)


routes.get('/ongs',OngController.index)


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) , OngController.create)

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileController.index)

routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page: Joi.number()
    })
}) , IncidentController.index)


routes.post('/incidents',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),celebrate({
    [Segments.BODY]: Joi.object().keys({
       title: Joi.string().required(),
       description: Joi.string().required(),
       value: Joi.number().required()
    })
}), IncidentController.create)


routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),IncidentController.delete)

routes.get('/ong/:email',celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required()
    })
}),OngController.ong)

module.exports = routes
