$(document).ready(function(){
  $("#signin").submit(function(event){
    event.preventDefault();

    Parse.initialize("VQpQwojL2wjTuNkUDzV0C2wAiQODWJw90cRKtP3Q", "yR5gVtaYrmMyjzTck1bLuvqRinqUrMnAoPqITysH");
    Parse.User.logIn($('#email').val(), $('#password').val(), {
      success: function(user) {
        // Do stuff after successful login.

        $('#form').hide();
        $('#status').text(user.get('status'));
        $('#code').text(user.get('team'));
        $('#account').show();
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
      }
    });
  });
})
