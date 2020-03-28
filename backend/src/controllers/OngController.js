const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqid')
const generateUniquePassword= require('../utilS/generateUniquePassword')

module.exports = {

    async index (request,response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response){
        const {name,email,whatsapp,city,uf} = request.body
    const id = generateUniqueId()
    const password = generateUniquePassword()
    await connection('ongs').insert({
        id,
        password,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    

    return response.json({ id,password })
    }
}