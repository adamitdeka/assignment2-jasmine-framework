//function to validate- takes username and password text fields as arguments.
function validate(uField, pField){
    var msg = "";
    //Known username
    var validUsername = "amit";
    //known password
    var validPassword = "deka";

    //empty field validation for username
    if (uField === ""){
        msg = "No username entered";
        return msg;
    } 
    //empty field validation for password
    if (pField === "") {
        msg = "No password entered";
        return msg;
    } 
    //matching username and password with known values
    if(uField !== validUsername || pField !== validPassword){
        msg = "Invalid username or password";
        return msg;
    }
    else{
        return true;
    }
}