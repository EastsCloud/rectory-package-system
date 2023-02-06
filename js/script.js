/*
 * Main Execution Script for Rectory Package Sorting and Notification System
 * By Qingyang Zhu (Oscar) | EastsCloud Co.
 * Belongs to Rectory School, CT
*/

var main = document.getElementById("main");
var name_database = document.getElementById("name_database");
var search_bar = document.getElementById("search_bar");
var loading_page = document.getElementById("loading_page");
var login_page = document.getElementById("login_page");

function start(){

    for(var i=0; i<=database.length-1; i++){

        var new_student = document.createElement("li");
        new_student.setAttribute("id", "name"+i);
        new_student.setAttribute("class", "database_item");

        var a = document.createElement("a");
        a.setAttribute("class", "database_item_name");
        var name_text = document.createTextNode(database[i][0]+" "+database[i][1]);
        if(database[i][2]) name_text = document.createTextNode(database[i][0]+" "+database[i][1]+" ("+database[i][2]+")");
        a.appendChild(name_text);
        a.setAttribute("onclick", "send_email("+i+")");

        var span = document.createElement("span");
        span.setAttribute("class", "database_item_dorm");
        var dorm_text = document.createTextNode(database[i][3]);
        span.appendChild(dorm_text);

        new_student.appendChild(a);
        new_student.appendChild(span);
        name_database.appendChild(new_student);

    }

    main.style.display = "block";
    loading_page.style.display = "none";
    login_page.style.display = "none";

}

function search_input() {

    var input = document.getElementById("input").value.toUpperCase();
    var database_item = document.getElementsByClassName("database_item");

    var database_display_cnt = 0;
    for(var i=0; i<=database.length-1; i++) {
        database_display_cnt++;
        if(database[i][0].toUpperCase().indexOf(input) >= 0 || database[i][1].toUpperCase().indexOf(input) >= 0 || database[i][2].toUpperCase().indexOf(input) >= 0) {
            database_item[i].style.display = "block";
        }
        else {
            database_item[i].style.display = "none";
        }
        if(database_display_cnt >= 10) break;
    }

}

document.body.addEventListener('click', function(event) {

    if(search_bar.contains(event.target)) {
        name_database.style.display = "block";
    }
    else {
        name_database.style.display = "none";
    }

});

function show_database() {

    var name_database = document.getElementById("name_database");
    name_database.style.display = "block";

}

function send_email(id) {

    if(confirm("Are you sure to send an email to "+database[id][0]+" "+database[id][1]+"("+database[id][4]+")") == true) {

        Email.send({
            Host : "smtp.elasticemail.com",
            port : 2525,
            Username : "ec.no-reply@outlook.com",
            Password : "39427D42FE7AB55B0F496BAC3780E47F0EC7",
            To : database[id][4],
            From : "ec.no-reply@outlook.com",
            Subject : "Package Arrival",
            Body : "Your package have arrived. Please check."
        }).then(
            message => alert(message)
        );

    }

}