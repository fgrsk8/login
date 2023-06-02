var A = document.getElementById('hero')
var B = document.getElementById('login_form')
var C = document.getElementById('register_form')
var D = document.getElementById('login_btn')
var E = document.getElementById('register_btn')
/* login function*/
function login() {
    A.style.height = "272";
    B.style.left = "0px";
    C.style.left = "300px";
    D.style.background = "ad1deb";
    D.style.color = "#fff";
    E.style.background = "#ececec";
    E.style.color = "#000";

}
function register() {
    A.style.height = "320px";
    B.style.left = "300px";
    C.style.left = "0px";
    D.style.background = "#ececec";
    D.style.color = "0000";
    E.style.background = "ad1deb";
    E.style.color = "#fff";
}