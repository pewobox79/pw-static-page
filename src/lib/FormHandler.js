import hash from "object-hash";
import bcrypt from 'bcryptjs';


export function decryptHash(){
    const localValue = localStorage.getItem("user");
    const readableValue = hash(localValue, {encoding: 'base64'})


}

export function beCryptPassword(userData){

    let hashedUserObject = {}
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(userData.password, salt);
    hashedUserObject ={
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: hash
    }

    return hashedUserObject
}


export function comparePassword(userPassword, hashedPassword){
    let response;
    const check = bcrypt.compareSync(userPassword, hashedPassword);
    if(check){
        response = true
    }else{
        response = false
    }

    return response
}

export function checkEmail(storedEmail, email){

    let emailResponse

    if(storedEmail === email){
        emailResponse = true
    }else{
        emailResponse = false
    }

    return emailResponse
}

export function checkLocalStorage(){
    let responseValue
    const localUser = localStorage.getItem("user");
    const userData = JSON.parse(localUser);

    if(localUser === "undefined"){
        responseValue = "empty"
    }else{
        responseValue = userData
    }

   return responseValue

}


export function authenticate(username, password){
    let response
    if(username && password){
        response = "authenticated"
    }else{
        response = "access denied"
    }

    return response
}

export function setUserLogged(){
    let localValue = localStorage.getItem("user");
    const user = JSON.parse(localValue)

    const loggedUserData = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        logged: true
    }

    localStorage.setItem("user", JSON.stringify(loggedUserData))
}


export function userLogoutOnly(){
    const storageData = localStorage.getItem("user")
    const userData = JSON.parse(storageData)
    let userUpdated = {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: userData.password,
        logged: false
    }

    localStorage.setItem("user", JSON.stringify(userUpdated))

}


export function userLogoutWithDataDelete(){
    localStorage.removeItem("user")

}


export function resetPassword(newPassword){
    const userValue = checkLocalStorage()


    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(newPassword, salt);

    const newUserData = {
        firstname: userValue.firstname,
        lastname: userValue.lastname,
        email: userValue.email,
        password: hashedPassword,
        reset: true,
        logged: false

    }

    localStorage.setItem("user", JSON.stringify(newUserData))


}