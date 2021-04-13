
// function formValidation(){
// if(ValidateEmail(document.form1.text1)){
// }
// if(phonenumber(document.form1.text2)){
// }
// return false;
// }

// Email validation

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{

return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
// Phone number validation

function phonenumber(inputtxt)
{
  var phno=/^\d{10}$/;
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)||inputtxt.value.match(phno))
     {
      
	    return true;      
	 }
   else
     {
     alert("InValid Phone Number");
      return false;
     }
 }

    //password validation

 // timeout before a callback is called

 let timeout;

 // traversing the DOM and getting the input and span using their IDs

 let password = document.getElementById('password')
 let strengthBadge = document.getElementById('StrengthDisp')

 // The strong and weak password Regex pattern checker

 let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
 let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
 // We then change the badge's color and text based on the password strength

 if(strongPassword.test(PasswordParameter)) {
     
     strengthBadge.style.backgroundColor = "green"
     strengthBadge.textContent = 'Strong'
 } else if(mediumPassword.test(PasswordParameter)){
     strengthBadge.style.backgroundColor = 'orange'
     strengthBadge.textContent = 'Medium'
 } else{
     strengthBadge.style.backgroundColor = 'red'
     strengthBadge.textContent = 'Weak'
 }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

 //The badge is hidden by default, so we show it

 strengthBadge.style.display= 'block'
 clearTimeout(timeout);

 //We then call the StrengChecker function as a callback then pass the typed password to it

 timeout = setTimeout(() => StrengthChecker(password.value), 500);

 //Incase a user clears the text, the badge is hidden again

 if(password.value.length !== 0){
     strengthBadge.style.display != 'block'
 } else{
     strengthBadge.style.display = 'none'
 }
});