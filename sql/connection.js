const mysql = require('mysql2')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'user',
        password: 'password',
        database: 'db',
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;