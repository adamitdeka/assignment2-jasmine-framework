
const formHandle = document.forms[0];

formHandle.onsubmit = ()=>{
    var username = document.getElementById("loginBox__username");
    var password = document.getElementById("loginBox__password");
    var output = document.getElementById("output");
    output.innerHTML = "";
    var valResult = validate(username.value,password.value);
    
    if(valResult && valResult !== true){
        output.innerHTML += "<div>" + valResult + "</div>";
        return false;
    }
    else{
        output.innerHTML += "<div>Password:" + md5Encrypt(password.value) + "</div>"; 
    }
    //to prevent from submitting the form
    return false;
}




