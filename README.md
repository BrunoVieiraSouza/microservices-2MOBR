# 2MOBR / API & MICROSSERVICES DEVELOPMENT / EDILSON JESUS DA SILVA

## Primeiro Serviço (Clientes) rotas:

Estruturas de backend:

Rota em http://localhost:4000/api/clientes

Servico para criar CADASTRAR um usuários e capaz de criptografar a senha e autenticar o usuario. E Também é possível manipular os dados do cliente sendo necessário estar logado. 

Passos:
npm i mongoose
node index.js 

Metodos: 

- GET
/api/clientes - Retorna todos os itens de clientes (lembrando que é necessário estar logado)

- POST
/api/clientes/login - Autentica usuário (e retorna um token)
/api/clientes/cadastro - Cadastro um novo cliente 

- PUT
/api/clientes/atualizar - Atualiza um cliente pelo ID (lembrando que é necessário estar logado)


## Segundo Serviço (Dados bancários):
Rota em http://localhost:5000/api/banco/

- GET
/api/banco - Retorna todos dados dos bancos
<img width="720" alt="buscar-dados-conta" src="https://github.com/BrunoVieiraSouza/microservices-2MOBR/assets/81889362/26e85795-01a7-4989-8012-34f9cf41a175">

- POST
/api/banco/inclusao - Inclui novas informações bancárias
<img width="662" alt="Inclusao-conta" src="https://github.com/BrunoVieiraSouza/microservices-2MOBR/assets/81889362/0d89ff46-a114-4487-a97c-d9a457c64428">

- PUT
/api/banco/atualizar/:id - Atualiza informações bancarias pelo id.
