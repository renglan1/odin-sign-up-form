const password = document.querySelector('input#password');
const confirmPassword = document.querySelector('input#confirmpass');
const inputs = [password, confirmPassword];

const noMatch = document.querySelector('div.no-match');

inputs.map((input) => {
  input.addEventListener('change', (e) => {
    console.log('hi');
    if(password.value !== confirmPassword.value) {
      password.classList.add('error');
      confirmPassword.classList.add('error');
      noMatch.style.display = 'block';
    }
    else {
      password.classList.remove('error');
      confirmPassword.classList.remove('error');
      noMatch.style.display = 'none';
    }
  });
});