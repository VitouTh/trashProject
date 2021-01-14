'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewtrashSchema extends Schema {
  up () {
    this.table('newtrashes', (table) => {
      // alter table
    })
  }

  down () {
    this.table('newtrashes', (table) => {
      // reverse alternations
    })
  }
}

module.exports = NewtrashSchema
