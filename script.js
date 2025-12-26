function goNext() {
  document.querySelector('.card').style.animation = 'slideIn .2s ease reverse';
  setTimeout(() => {
    window.location = 'password.html';
  }, 200);
}

function togglePassword() {
  const p = document.getElementById('password');
  p.type = p.type === 'password' ? 'text' : 'password';
}