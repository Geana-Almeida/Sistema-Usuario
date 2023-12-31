<h1 align="center">:file_cabinet: Sistema Usuário</h1>

## :memo: Descrição
Este sistema é responsável por gerenciar dados do usuário para realizar o login e fazer alteração no mesmo.

## :books: Funcionalidades
* <b>Cadastro do usuário</b>: Irá realizar o cadastro do usuário contendo o nome, email e senha onde a senha será criptografada. Esses dados irão ser encaminhado para o banco de dados.
* <b>Login de usuário</b>: Irá verificar se o email e a senha está de acordo com oque foi cadastrado no banco de dados, se for será gerado um token de verificação para permiter que seja feito alteração no mesmo.
* <b>Verificar os dados do usuário logado</b>: Verifica se o usuário esta logado através do token e se estiver, exibi os dados dele menos a senha.
* <b>Alterar os dados do usuário logado</b>: Verifica se o usuário esta logado através do token e se estiver, permite alterar os dados verificando se o email é unico.
## :wrench: Tecnologias utilizadas
* Node.js, Express, pg, postgresql, nodemon, bcrypt, jsonwebtoken

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
npm install express,
npm install -D nodemon,
npm install bcrypt,
npm install jsonwebtoken,
npm install pg,
npm install knex

```

## :soon: Implementação futura
* O que será implementado na próxima sprint?
*   [ ] Será inserido o front-end do projeto

## :handshake: Colaboradores
<table>
  <tr>
   <td align="center">
      <a href="http://github.com/Geana-Almeida">
        <img src="Avatar.png" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
        <sub>
          <b>GeanaAlmeida</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
