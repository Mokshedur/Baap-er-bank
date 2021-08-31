document.getElementById('login-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.Value;
  //get user password
  const userPassword = document.getElementById('user-password').Value;
  if (userEmail == 'momin@baap.com' && userPassword == '1234') {
    window.location.href = 'banking.html';

  }
})
