# Estudo nodeJS módulo 01

## Configuração

### clone projeto
Execute os seguintes comando:
- `git clone https://github.com/victorch85/node-modulo-1.git`

### npm install
Execute os seguintes comando:
- `cd node-modulo-1`
- `npm install`

### Configuração DB
- edite o arquivo [`database.js`](https://github.com/victorch85/node-modulo-1/tree/master/config) localizado no diretório `config/`

```js
module.exports = {
    username: 'root',
    password: '123456',
    database: 'snippetfy',
    host: 'localhost',
    dialect: 'mysql',
};
```

### db:migrate
Execute os seguintes comando:
- `sequelize db:migrate`