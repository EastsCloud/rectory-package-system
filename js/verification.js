/*
 * User Verification for Rectory Package Sorting and Notification System
 * By Qingyang Zhu (Oscar) | EastsCloud Co.
 * Belongs to Rectory School, CT
*/

var login_enter = document.getElementById("login_enter");
if(localStorage.getItem("rpsns_login_date") === null) localStorage.setItem("rpsns_login_date", "0");
if(localStorage.getItem("rpsns_login_code") === null) localStorage.setItem("rpsns_login_code", "0");

function verification() {

    var login_date = parseInt(localStorage.getItem("rpsns_login_date"));
    var login_code = parseInt(localStorage.getItem("rpsns_login_code"));
    
    if(Date.now() - login_date <= 604800000 && passcode == login_code) {
        start();
    }
    else {
        if(login_date == 0 || login_code == 0) alert("This is a new device. Please login.");
        else if(Date.now() - login_date > 604800000) alert("Your login has expired. Please login again.");
        else if(passcode != login_code) alert("The passcode has changed. Please login again.");
        loading_page.style.display = "none";
        login_page.style.display = "block";
    }

}

function access() {

    if(login_enter.value == passcode) {
        login_page.style.display = "none";
        localStorage.setItem("rpsns_login_date", Date.now().toString());
        localStorage.setItem("rpsns_login_code", login_enter.value.toString());
        alert("This device has been saved.");
        start();
    }
    else {
        alert("The passcode you have entered is not correct. Please try again later.");
    }

}
