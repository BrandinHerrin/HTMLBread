//function that validates the form

function validate(){
var name = document.getElementById("name").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var error_message = document.getElementById("error_message");

error_message.style.padding = "10px";

var text;
if(name.length < 5){
text = "Please Enter valid Name";
error_message.innerHTML = text;
return false;
}
if(lastname.length < 5){
text = "Please Enter valid Last Name";
error_message.innerHTML = text;
return false;
}

//checks if email address has @ symbol in it; if it is a valid email or not
if(email.indexOf("@") == -1 || email.length < 6){
text = "Please Enter valid Email";
error_message.innerHTML = text;
return false;
}
alert("Form Submitted Successfully!");
return true;
}

function resetForm() {
document.getElementById("myform").reset();
}

//This part adds the date at the bottom of every page

document.write('<div id="date-location">');
var d=new Date();
var weekday=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var monthname=new Array('January','February','March','April','May','June','July','August','September','October','November','December');
document.write('<span class="date-font">' + weekday[d.getDay()] + ',');
document.write(monthname[d.getMonth()] + ' ');
document.write(d.getDate() + ',');
document.write(d.getFullYear())
document.write('<br></span>')
document.write('</div>');