const senhaJwt = require('../senhaJwt')
const knex = require('../conexao')
const jwt = require('jsonwebtoken')

const verificarUsuarioLogado = async (req, res, next) => {
    const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({ mensagem: 'Não autorizado'})
	}
    
	const token = authorization.split(' ')[1]

    try{
        
        const { id } = jwt.verify(token, senhaJwt)
       
        const usuario = await knex('usuarios').where('id', id)

        const verificarUsuario = await knex('usuarios').where('id', id).count()

        if(verificarUsuario < 1){
            
            return res.status(401).json({mensagem: 'Não autorizado'})
        }

        req.usuario = usuario

        next();
    }catch (error) {
        
        return res.status(401).json({mensagem: 'Não autorizado'})
    }
}

module.exports = verificarUsuarioLogado