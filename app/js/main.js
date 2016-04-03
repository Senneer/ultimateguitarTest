'use strict';

var input = document.getElementsByClassName('login__formFieldInput');
var container = document.getElementsByClassName('container')[0];
var loginSubmit = document.getElementsByClassName('login__formSubmit')[0];
var successmsg = document.getElementsByClassName('successmsg')[0];
var checkmark = document.getElementsByClassName('successmsg__checkmarkImg')[0];
container.addEventListener('click', function (e) {
  return e.stopPropagation();
});

Array.prototype.forEach.call(input, function (item, i, array) {
  item.addEventListener('change', function () {
    if (item.value != '') {
      item.classList.toggle('_notempty');
    } else {
      item.className = item.className.replace(' _notempty', '');
    };
  });
});

var signupToggle = document.getElementsByClassName('_signup')[0];
var loginToggle = document.getElementsByClassName('_login')[0];
var signup = document.getElementsByClassName('signUp')[0];
var login = document.getElementsByClassName('login')[0];

signupToggle.addEventListener('click', function () {
  login.style.display = 'none';
  signup.style.display = 'block';
});

loginToggle.addEventListener('click', function () {
  signup.style.display = 'none';
  login.style.display = 'block';
});

document.getElementsByClassName("signUp__signbtn")[0].addEventListener("click", function (event) {
  event.preventDefault();
});
document.getElementsByClassName("_fb")[0].addEventListener("click", function (event) {
  event.preventDefault();
});
document.getElementsByClassName("_google")[0].addEventListener("click", function (event) {
  event.preventDefault();
});

loginSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  successmsg.classList.toggle('_is-up');
  checkmark.classList.toggle('_animation');
  setTimeout('successmsg.classList.remove("_is-up")', 2000);
});