var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

var form = popup.querySelector("form");


//проверка работы storage
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
};

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
       evt.preventDefault();
       popup.classList.remove("modal-error");
       popup.offsetWidth = popup.offsetWidth;
       popup.classList.add("modal-error");

    } else {
        if (isStorageSupport) {
           localStorage.setItem("login", login.value) 
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.KeyboardEvent === 27) {
        if (popup.classList.contains("modal-show")) {
           evt.preventDefault();
           popup.classList.remove("modal-show");
           popup.classList.remove("modal-error");
        }
    }
})