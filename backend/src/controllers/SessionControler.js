const connection = require('../database/connection')
module.exports = {
    async create(request, response){
        const { email } = request.body
        const { password } = request.body 

        const ong = await connection('ongs')
        .where('email', email)
        .select('name')
        .first()
        const ong2 = await connection('ongs')
        .where('password', password)
        .select('name')
        .first()
        if(!ong || !ong2){
            return response.status(400).json({error: 'no ONG found with this ID or Password'})
        }
        return response.json(ong,)
    }
}