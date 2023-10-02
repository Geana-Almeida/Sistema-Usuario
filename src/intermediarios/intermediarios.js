const verificaEmail = (req, res, next) => {
    const {email} = req.body

    if(!email){
        return res.status(401).json({ mensagem: 'E-mail é obrigatório' })
    }
    next()
}

const verificaSenha = (req, res, next) => {
    const {senha} = req.body

    if(!senha){
    return res.status(401).json({ mensagem: 'Senha é obrigatória' })
    }
    next()
}

const verificaNome = (req, res, next) => {
    const {nome} = req.body

    if(!nome){
    return res.status(401).json({ mensagem: 'Senha é obrigatória' })
    }
    next()
}


module.exports={
verificaEmail,
verificaSenha,
verificaNome
}