import VinputText from "./models/VinputText";
import "../scss/style.scss";
VinputText.allInstances = [];
const validateMail = value => {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(value);
}; 
const validatePassword = value => {
    return value.length >=6 && value!=='password'
};
const emailValidTitle = "Wartość email jest poprawna";
const emailInvalidTitle = "Wartośc email jest niepoprawna";
const passwordInvalidTitle = "Hasło jest nieprawidłowo skonstruowane"
const passwordValidTitle = "Hasło jest poprawnie skonstruowane"
const emailField = new VinputText(
  "email-field",
  "email-valid",
  "email-invalid",
  validateMail,
  emailValidTitle,
  emailInvalidTitle
);
const passwordField = new VinputText("password-field","password-valid","password-invalid",validatePassword,passwordInvalidTitle,passwordValidTitle)
const logInBtn = document.querySelector('.log-in')
logInBtn.addEventListener('click',()=>{
    alert('Hello ' + emailField.getValue());  
});