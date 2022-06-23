<table><tr>
<td align="center" width="99999">

  # API para autenticação

  *API of authentication for your application*
</td>
</tr></table>

## Primeiros passos

Essa API eu criei com o objetivo de ser consumida em aplicações frontend que necessite de algum sistema para se autenticar, no entanto, ela esta sendo consumida atualmente na aplicação localizada no repositório [authenticator-page](https://github.com/Williancc1557/authenticator-page).

**Características**

```ts
{
  author: "Willian Cavalcanti Coelho",
  about: "Api para autenticação",
  framework: "nestjs",
  ORM: "typeorm",
  database: "postgreSQL",
}
```

### Montando o ambiente

Para iniciar a aplicação corretamente, é necessário um arquivo .env fora do src para colocar as variáveis de ambientes,  as chaves necessárias estão localizadas no arquivo `.env.example`.

As variáveis são:

```
DATABASE_URL=
USER_EMAIL=
USER_EMAIL_PASSWORD=
JWT_PRIVATE=
```

- **DATABASE_URL:** É a URL de acesso para o seu banco de dados (postgreSQL);
- **USER_EMAIL:** Esse serve para você passar um email seu disponível para ser utilizado no nodemailer;
- **USER_EMAIL_PASSWORD:** Já esse é a senha do email utilizado;
- **JWT_PRIVATE:** Esse campo vai ser o parâmetro privado do seu jwt.

Após explicado como será organizado suas variáveis de ambiente, vamos para as rotas.

**Existem no total 6 rotas**:

- `sign-in`: [Clique aqui para localizar](https://github.com/Williancc1557/authenticator-api/tree/master/src/api/user/sign-in). Essa rota serve para o usuário se logar gerando um novo token para se autenticar.

- `sign-up`: [Clique aqui para localizar](https://github.com/Williancc1557/authenticator-api/tree/master/src/api/user/sign-up). Essa rota serve para registrar o usuário, gerando o seu primeiro token de acesso e enviando a key de liberação de email para o email do usuário.

- `get`: [Clique aqui para localizar](https://github.com/Williancc1557/authenticator-api/tree/master/src/api/user/get). Essa rota vai servir para pegar os dados do usuário utilizando o email dele.

- `check-email`: [Clique aqui para localizar](https://github.com/Williancc1557/authenticator-api/tree/master/src/api/user/check-email). Já essa rota vai servir para o usuário colocar a key dele para liberar o acesso ao email dele

- `is-verified`: [Clique aqui para localizar](https://github.com/Williancc1557/authenticator-api/tree/master/src/api/user/is-verified). Essa rota verifica se o email do usuário está verificado ou não em formato boleano.

- `is-valid-token`: [Clique aqui para localizar](https://github.com/Williancc1557/authenticator-api/tree/master/src/api/user/is-verified). Essa rota serve para verificar se o token jwt do usuário ainda é válido.


### Entradas e saidas das rotas

#### Rota `sign-in`

`localhost:3000/sign-in`

*Exemplo de entrada (BODY):*

```json
{
  "email": "teste.willian@gmail.com",
  "password": "Teste123"
}
```

*Exemplo de saida positiva*

```json
{
  "statusCode": 200,
  "body": {
    "jwt": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlLndpbGxpYW5AZ21haWwuY29tIiwiaWF0IjoxNjU1OTk2MzE4LCJleHAiOjE2NTYwMzIzMTh9.1cSvczi9rU5xKz1HC0mde1V6qYmgFzkZ3X-Nzl8YL4s",
      "expiresIn": "10h"
    },
    "user": {
      "id": 72,
      "password": "Teste123",
      "contact": {
        "id": 72,
        "email": "teste.willian@gmail.com"
      }
    }
  }
}
```

**Exemplos de saidas com erro**


*Usuário não existe*

```json
{
  "statusCode": 403,
  "message": "this user don't exists"
}
```

*Email inválido (Ou seja, a sintaxe desse email não está válida)*

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email"
  ],
  "error": "Bad Request"
}
```

*Senha inválida (Senha muito grande)*

```json
{
  "statusCode": 400,
  "message": [
    "password must be shorter than or equal to 25 characters"
  ],
  "error": "Bad Request"
}
```

*Senha inválida (Senha muito pequena)*

```json
{
  "statusCode": 400,
  "message": [
    "password must be longer than or equal to 6 characters"
  ],
  "error": "Bad Request"
}
```



###### Documentação em produção . . .