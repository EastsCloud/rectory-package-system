/*
 * Receive Data From Google Spreadsheet for Rectory Package Sorting and Notification System
 * By Qingyang Zhu (Oscar) | EastsCloud Co.
 * Belongs to Rectory School, CT
*/

var database = [];

fetch('https://script.google.com/macros/s/AKfycbzcorqQQLUZPXW9HBu83-qNVfi_Ge5Iku5lTEwGxk7mUOAmdTfjBpRsKHrTj3zrTtj9/exec')
.then(response => response.text())
.then((response) => {
    var cnt = -2;
    var c = 0, c2 = 0, c3 = 1;
    var a = [], b = [];
    var db = [];
    for(var i=0; i<=response.length-1; i++){
        if(response[i] == "\""){
            cnt++;
            if(cnt > 0){
                if(cnt%2 == 1){
                    c++;
                    a[c] = i+1;
                }
                if(cnt%2 == 0){
                    b[c] = i-1;
                }
            }
        }
            
    }
    for(var i=1; i<=c; i++){
        temp = "";
        for(var j=a[i]; j<=b[i]; j++){
            temp += response[j];
        }
        db[c2] = temp;
        c2++;
    }
    database.push();
    for(var i=1; i<=c2; i+=5){
        database.push(db.splice(0, 5));
    }
    verification();
    
})
.then(data => console.log(data));