const input = document.getElementsByClassName('login__formFieldInput');
const notempty = ' _notempty';
function notemptyInput() {
  input.className = input.className.replace(notempty, '');
  input.className = input.className + notempty;
}
function emptyInput() {
  input.className = input.className.replace(notempty, '');
}

const container = document.getElementsByClassName('container')[0];
container.addEventListener('click', e => e.stopPropagation());

Array.prototype.forEach.call(input, function (item, i, array) {
  item.addEventListener ('change', function() {
    if (item.value != '') {
      item.className = item.className.replace(notempty, '');
      item.className = item.className + notempty;
    } else {
      item.className = item.className.replace(notempty, '');
    };
  })
});

const signupBtn = document.getElementsByClassName('_signup')[0];
const loginBtn = document.getElementsByClassName('_login')[0];
const signup = document.getElementsByClassName('signUp')[0];
const login = document.getElementsByClassName('login')[0];

signupBtn.addEventListener ('click', function () {
  login.style.display = 'none';
  signup.style.display = 'block';
});

loginBtn.addEventListener ('click', function () {
  signup.style.display = 'none';
  login.style.display = 'block';
});