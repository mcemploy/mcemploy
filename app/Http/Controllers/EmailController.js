'use strict'

const Email = use('App/Model/Email')
const Validator = use('Validator')

class EmailController {

  * register (request, response) {
    const data = request.all()
    const validation = yield Validator.validate(data, Email.rules)

    if (validation.fails()) {
      return response.json(validation.messages())
    }

    const email = yield Email.create({
      email: data.email
    })

    yield response.json({ ok: true })
  }

}

module.exports = EmailController
