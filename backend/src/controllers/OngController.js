const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqid')
const generateUniquePassword= require('../utilS/generateUniquePassword')

module.exports = {

    async index (request,response) {
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    },

    async create(request, response){
        const {name,email,whatsapp,city,uf,password} = request.body
    const id = generateUniqueId()
    await connection('ongs').insert({
        id,
        password,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({ id })
    },

    async ong (request,response) {
        const {email} = request.params 
        const ong = await connection('ongs').select('*').where("email", email)
        console.log(ong)
    
        return response.json(ong)
    },
}