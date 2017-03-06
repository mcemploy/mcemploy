'use strict'

const Lucid = use('Lucid')

class Email extends Lucid {

  static boot () {
    super.boot()
    this.addHook('afterCreate', 'Email.confirmEmail')
  }

  static get table () {
    return 'mailing_list'
  }

  static get rules () {
    return {
      email: 'required|email|unique:mailing_list'
    }
  }

}

module.exports = Email
