var main = document.getElementById("main");
var name_list = document.getElementById("name_list");
var search_bar = document.getElementById("search_bar");

window.onload = function(){

    for(var i=0; i<=list.length-1; i++){

        var new_student = document.createElement("li");
        new_student.setAttribute("id", "name"+list[i][0]);
        new_student.setAttribute("class", "list_item");

        var a = document.createElement("a");
        a.setAttribute("class", "list_item_name");
        var name_text = document.createTextNode(list[i][1]+" "+list[i][2]);
        a.appendChild(name_text);
        a.setAttribute("onclick", "send_email("+list[i][0]+")");

        var span = document.createElement("span");
        span.setAttribute("class", "last_item_dorm");
        var dorm_text = document.createTextNode(list[i][3]);
        span.appendChild(dorm_text);
        span.style.float = "right";
        span.style.fontSize = "15px";
        span.style.paddingRight = "10px";

        new_student.appendChild(a);
        new_student.appendChild(span);
        name_list.appendChild(new_student);

    }

}

function search_input() {

    var input = document.getElementById("input").value.toUpperCase();
    var list_item = document.getElementsByClassName("list_item");

    for(var i=0; i<=list.length-1; i++) {
        if(list[i][1].toUpperCase().indexOf(input) >= 0) {
            list_item[i].style.display = "block";
        }else {
            list_item[i].style.display = "none";
        }
    }

}

document.body.addEventListener('click', function(event) {

    if(search_bar.contains(event.target)) {
        name_list.style.display = "block";
    }
    else{
        name_list.style.display = "none";
    }

});

function show_list() {

    var name_list = document.getElementById("name_list");
    name_list.style.display = "block";

}

function send_email(id) {
    
    if(confirm("Are you sure to send an email to "+list[id][1]+" "+list[id][2]+"("+list[id][4]+")") == true) {

        Email.send({
            Host : "smtp.elasticemail.com",
            port : 2525,
            Username : "ec.no-reply@outlook.com",
            Password : "39427D42FE7AB55B0F496BAC3780E47F0EC7",
            To : list[id][4],
            From : "ec.no-reply@outlook.com",
            Subject : "Package Arrival",
            Body : "Your package have arrived. Please check."
        }).then(
            message => alert(message)
        );

    }

}