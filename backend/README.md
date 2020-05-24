# backend

## Prerequisites
- [Node 8.0.0+](https://nodejs.org/en/download/)

## Set the environment variables
As configurações da aplicação são definidas por variáveis ​​de ambiente. Para definir as configurações, faça uma cópia do arquivo .env.example, nomeando .env. Depois disso, abra e edite as configurações conforme necessário. As seguintes variáveis ​​de ambiente estão disponíveis:

| VARIÁVEL | DESCRIÇÃO  | PADRÃO |
|-----|-----|-----|
| `authSecret` | É um segredo conhecido apenas pelo seu aplicativo e pelo servidor de autorização. Ele protege seus recursos concedendo apenas tokens a solicitantes autorizados. | `` |
| `db` | Objeto de configuração do banco de dados Postrgres | `` |
| `host` | URI da máquina onde o banco postgres está sendo executado | `127.0.0.1` |
| `port` | Porta padrão do Postgres | `5432` |
| `database` | Nome do banco de dados Postgres | `` |
| `user` | usuário do postgres | `` |
| `password` | senha do usuário | `` |
| `mongodb_knowledge_stats_url` | URI usada para conexão com o Banco de dados MongoDB de estatísticas da aplicação | `mongodb://localhost/knowledge_stats` |

## Installation and Execution
#### 1. Install dependencies
```sh  
$ npm install    
```
 
#### 2. Run Server
```sh  
$ npm start
```