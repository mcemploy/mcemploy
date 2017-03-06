'use strict'

const Schema = use('Schema')

class EmailsTableSchema extends Schema {

  up () {
    this.create('mailing_list', (table) => {
      table.increments()
      table.string('email').unique()
      table.timestamps()
      table.softDeletes()
    })
  }

  down () {
    this.drop('mailing_list')
  }

}

module.exports = EmailsTableSchema
