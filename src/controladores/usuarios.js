const knex = require('../conexao');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt =  require('../senhaJwt')

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha} = req.body
    
    try{
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        
        const Usuariocadastrado = {
            nome: nome,
            email: email,
            senha: senhaCriptografada
        }
    

        const novoUsuario = await knex('usuarios').insert(Usuariocadastrado).returning('*')
        console.log("aqui")
        return res.json(novoUsuario)
    }catch(error) {
        return res.status(403).json({mensagem: "Erro interno do servidor"})
    }
}

const login = async (req, res) => {
    const {email, senha} = req.body

    try{
        const usuario = await knex('usuarios').where('email', email)

        const verificarUsuario = await knex('usuarios').where('email', email).count()

        if(parseInt(verificarUsuario[0].count) < 1){//Verifica se o usuario digitado existe
            return res.status(404).json({mensagem:'E-mail ou senha inválido'})
        }

        const senhaValida = await bcrypt.compare(senha, usuario[0].senha)

        if(!senhaValida){//verifica se a senha digitada é igual a que foi cadastrada
            return res.status(404).json({mensagem:'senha inválido'})
        }

        const token = jwt.sign({ id: usuario[0].id }, senhaJwt, {
			expiresIn: '8h',
		})//gera o token para verificar se o usuario ja esta logado ou nao

        const {  senha: _, ...usuarioLogado } = usuario[0]


        return res.json({ usuario: usuarioLogado, token })
    }catch (error){
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

const obterPerfil = async (req, res) => {
    const {senha: _, ...Teste} = req.usuario[0]
    return res.status(201).json({usuario: Teste})
}

const atualizarUsuario = async(req, res) => {
    const id = req.usuario[0].id
    
    const { nome, email, senha } = req.body

    try{
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        
        await knex('usuarios').update({ nome, email, senha:senhaCriptografada }).where('id', id);//na senha foi preciso colocar o nome da propriedade senha pois n é o mesmo que esta no objeto ou seja ta senhaCriptografada e a propriedade é senha
        
        return res.json('Atualizado com sucesso!')
    }catch(error) {
        return res.status(403).json({mensagem: "Já existe usuário cadastrado com o e-mail informado."})
    }
    return res.json(id);
}
module.exports = {
    cadastrarUsuario,
    login,
    obterPerfil,
    atualizarUsuario
}