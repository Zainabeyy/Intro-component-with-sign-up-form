const form=document.getElementById('Form');
const FirstName=document.getElementById('firstName');
const LastName=document.getElementById('lastName');
const Email=document.getElementById('email');
const Password=document.getElementById('password');

const firstNameError=document.getElementById('errorfn');
const lastNameError=document.getElementById('errorln');
const emailError=document.getElementById('errore');
const PasswordError=document.getElementById('errorp');
console.log(PasswordError);
form.addEventListener('submit',function(event){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email.value);
    if(!FirstName.value.trim()){
        event.preventDefault();
        firstNameError.style.display="inline";
        FirstName.style.border="2px solid #ff7a7a";
    }
    else{
        firstNameError.style.display="none";
    }
    if(!LastName.value.trim()){
        event.preventDefault();
        lastNameError.style.display="inline";
        LastName.style.border="2px solid #ff7a7a";
    }
    else
    lastNameError.style.display="none";
    if(!Email.value.trim()){
        event.preventDefault();
        emailError.style.display="inline";
        Email.style.border="2px solid #ff7a7a";
    }
    else if(!regexMatch){
        event.preventDefault();
        emailError.style.display="inliine";
        document.getElementById("emailMessage").textContent="Look like this is not an email";
        Email.style.border="2px solid #ff7a7a";
    }
    else
    emailError.style.display="none";
    if(!Password.value.trim()){
        event.preventDefault();
        PasswordError.style.display="inline";
        Password.style.border="2px solid #ff7a7a";
    }
    else
    PasswordError.style.display="none";
})