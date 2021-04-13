
function formValidate(txt1,txt2){

if(txt1.value.trim()==""||txt2.value.trim()==""){
 alert("Username and password cannot be empty");
 txt1.style.border="2px solid red";
 txt2.style.border="2px solid red";
 return false;
}
else if((txt2).value.length<=5){
  alert("Password must be atleast 8 characters");
  txt2.style.border="2px solid red";
  return false;
}
  else{
  return true;
}
}

