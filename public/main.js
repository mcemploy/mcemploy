(function($, swal) {
  $(document).ready(function() {
    $('.mail_form').on('submit', function(e) {
      e.preventDefault()

      var form = $(e.target).serialize()
      $.post('/mailing-list', form, function(data) {
        if (Array.isArray(data)) {
          var errors = data.map(function(error) {
            var joiner = error.validation === 'unique' ? ' needs to be ' : ' is '
            return error.field.charAt(0).toUpperCase() + error.field.slice(1) + joiner + error.validation
          })
          return swal(errors.join('\n'))
        }

        if (data.ok) {
          $(e.target).find('#email').val('')
          return swal('Great! You\'ve been signed up and will be notified when beta is released!', null, 'success')
        }
      })
    })
  })
})(jQuery, swal)