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

Após explicado como será organizado suas variáveis de ambiente, vamos para as rotas