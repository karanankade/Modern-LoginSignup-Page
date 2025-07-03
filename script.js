const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formTitle = document.getElementById('form-title');
const toggleBtn = document.getElementById('toggleForm');
const submitBtn = document.getElementById('submit-btn');
let isLogin = true;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  alert(isLogin ? 'Logged in successfully!' : 'Signed up successfully!');
  form.reset();
});

toggleBtn.addEventListener('click', () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
  submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
  toggleBtn.textContent = isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login";
});

document.getElementById('signup-link').addEventListener('click', function(e) {
  e.preventDefault();
  isLogin = false;
  formTitle.textContent = 'Sign Up';
  submitBtn.textContent = 'Sign Up';
  toggleBtn.textContent = "Already have an account? Login";
});
