export const validateForm =(email,password,fullName,rePassword,isSignIn)=>{
    const validEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const validPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!validEmail)
    {
        return "Not A valid Email!!!"
    }
    if(!validPassword)
    {
        return "Not A valid Password!!!"
    }
    if( !isSignIn && password!==rePassword)
    {
        return "Passwords Don't Match!!!"
    }
    return null;
}
