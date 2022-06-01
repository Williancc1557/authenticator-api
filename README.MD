# The authenticator api

That is a application created by willian for authenticate users in an application.

# Routers

This application have **five routers** for use. They are:
`sign-up`, `sign-in`, `check-email`, `get/user`, `is-valid-token`.


### Sign-up

You need to send request, pass the following body.
```ts
{
    email: string,
    password: string,
}
```
for example:

```json
{
    "email": "teste123@gmail.com",
    "password": "Test123",
}
```
The password must have at least 6 chars and at most 25 chars.

**Example of sign-up's return:**

```json
{
  "statusCode": 201,
  "body": {
    "jwt": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.asdaFdAswbCI6IndpbGxpYW4uY2Fjb2VsaG9AZ21haWwuY29tIiwiaWF0IjoxNjU0MTE4NzQ5LCJleHAiOjETAQBxNWTQ3NDyGxRijPWVWqnZNDl7qnsaQ9jZWgT24SXnhzqg",
      "expiresIn": "10h"
    }
  }
}
```


## Sign-in

You need to send request, pass the following body.
```ts
{
    email: string,
    password: string,
}
```

for example:

```json
{
    "email": "teste123@gmail.com",
    "password": "Test123",
}
```

**Example of sign-in's return:**

```json
{
  "statusCode": 200,
  "body": {
    "jwt": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InASDWGDVGxpYW4uY2Fjb2VsaG9AZ21haWwuY29tIiwiaWF0IjoxNjU0MTE4OTUyLCJleHAiOjE2NTQxNTQ5NTJ9.Jiy4yqQhAASDWAZ1_Do5X9uid3pLooxj0hYsWq0cK1Yk",
      "expiresIn": "10h"
    },
    "user": {
      "id": 1,
      "password": "Test123",
      "contact": {
        "id": 1,
        "email": "teste123@gmail.com",
        "verifyEmail": {
          "id": 1,
          "isVerified": false,
          "confirmationToken": 1234
        }
      }
    }
  }
}
```

### check-email

You need to send request, pass the following body.

```ts
{
    "email": string,
    "confirmationToken": number
}
```

for example:

```json
{
    "email": "test123@gmail.com",
    "confirmationToken": 1234
}
```

**Example check-email's return:**

```json
{
  "statusCode": 202,
  "body": []
}
```

## get/user

You need to send request, pass the following body.

```json
{
    "email": string
}
```

**Example check-email's return:**

```json
{
  "statusCode": 200,
  "body": {
    "id": 12,
    "password": "Teste123",
    "contact": {
      "id": 12,
      "email": "teste123@gmail.com",
      "verifyEmail": {
        "id": 12,
        "isVerified": true,
        "confirmationToken": 5426
      }
    }
  }
}
```


## is-valid-token

You need to send request, pass the following body.

```ts
{
    "jwt": string
}
```

**Example check-email's return:**

```json
{
  "statusCode": 200,
  "body": {
    "email": "willian.cacoelho@gmail.com",
    "iat": 1654120730,
    "exp": 1654156730
  }
}
```