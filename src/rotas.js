const express = require('express');
const { cadastrarUsuario, login, obterPerfil, atualizarUsuario } = require('./controladores/usuarios');
const { verificaEmail, verificaSenha, verificaNome } = require('./intermediarios/intermediarios.js');
const verificarUsuarioLogado = require('./intermediarios/autenticacao');

const rotas = express()

rotas.post('/usuario',verificaNome ,verificaEmail, verificaSenha,cadastrarUsuario)
rotas.post('/login',verificaEmail, verificaSenha, login)

rotas.use(verificarUsuarioLogado)

rotas.get('/usuario', obterPerfil)
rotas.put('/usuario', verificaNome ,verificaEmail, verificaSenha, atualizarUsuario)


module.exports = rotas;