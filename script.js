// Show the Signup form and hide the Login form
function showSignup() {
    document.getElementById('loginFormContainer').classList.add('hidden');
    document.getElementById('signupFormContainer').classList.remove('hidden');
  }
  
  // Show the Login form and hide the Signup form
  function showLogin() {
    document.getElementById('signupFormContainer').classList.add('hidden');
    document.getElementById('loginFormContainer').classList.remove('hidden');
  }
  
  // Toggle Password Visibility
  function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
  