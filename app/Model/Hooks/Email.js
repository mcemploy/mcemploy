'use strict'

const Email = exports = module.exports = {}
const Mail = use('Mail')

Email.confirmEmail = function * (next) {
  yield Mail.raw([
    'Hey! Thanks for signing up to our mailing list.',
    'You\'ll be one of the first people we email when beta is released!'
  ].join('\n'), message => {
    message.from('noreply@mcemploy.com', 'MCEmploy')
    message.to(this.email)
    message.subject('Mailing list confirmation for MCEmploy')
  })

  yield next
}
