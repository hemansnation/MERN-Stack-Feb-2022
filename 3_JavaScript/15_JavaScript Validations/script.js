function validate() {
    var username = document.loginform.user.value;
    var password = document.loginform.pass.value;

    username = username.trim();
    password = password.trim();

    if(username == null  || username == ''){
        alert("Username cannot be empty");
        return false;
    }

    if(password.length < 6){
        alert("Password must be atleast of 6 Character");
        return false
    }
    return true;
}