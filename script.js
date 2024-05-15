function label_create(tagname, attrname, attrvalue, content) {
    var label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname, attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}
function break_create(br) {
    var break_create = document.createElement(br);
    return break_create;
}
function input_create(inputtag, attrname, attrvalue, attrname1, attrvalue1) {
    var input_ele = document.createElement(inputtag);
    input_ele.setAttribute(attrname, attrvalue);
    input_ele.setAttribute(attrname1, attrvalue1);
    return input_ele;
}
function button() {
    var button_ele = document.createElement("button");
    button_ele.setAttribute("type", "button");
    button_ele.setAttribute("onclick", "foo()");
    button_ele.innerHTML = "click me"
    return button_ele;
}
function foo() {
    var res = document.getElementById("firstname").value;
    var res1 = document.getElementById("middlename").value;
    var res2 = document.getElementById("lastname").value;
    var res3 = document.getElementById("email").value;
    var res4 = document.getElementById("loc").value
    console.log("firstname:"+res);
    console.log("middlename:"+res1);
    console.log("lastname:"+res2);
    console.log("email:"+res3);
    console.log("location:"+res4);

    let data1 = document.createElement("div");
    data1.innerHTML=`${"firstname:"+res}`;
    document.body.append(data1);
    let data2=document.createElement("div");
    data2.innerHTML=`${"middlename:"+res1}`;
    document.body.append(data2);
    let data3 = document.createElement("div");
    data3.innerHTML=`${"lastname:"+res2}`;
    document.body.append(data3);
    let data4=document.createElement("div");
    data4.innerHTML=`${"email:"+res3}`;
    document.body.append(data4);
    let data5=document.createElement("div");
    data5.innerHTML=`${"location:"+res4}`;
    document.body.append(data5);
    
}

var firstname = label_create("label", "for", "firftname", "Firstname");
var first_br = break_create("br");
var input_first = input_create("input", "type", "firstname", "id", "firstname");
var first_brr = break_create("br");

var middelname = label_create("label", "for", "middlename", "Middlename");
var middel_br = break_create("br")
var input_middle = input_create("input", "type", "middlename", "id", "middlename")
var middel_brr = break_create("br")

var lastname = label_create("label", "for", "lastname", "Lastname");
var last_br = break_create("br")
var input_last = input_create("input", "type", "lastname", "id", "lastname")
var last_brr = break_create("br")

var email = label_create("label", "for", "email", "Email");
var email_br = break_create("br")
var input_email = input_create("input", "type", "email", "id", "email")
var email_brr = break_create("br")

var loc = label_create("label", "for", "loc", "Location");
var loc_br = break_create("br")
var input_loc = input_create("input", "type", "loc", "id", "loc")
var loc_brr = break_create("br")

var button_tag = button()

document.body.append(firstname, first_br, input_first,first_brr, middelname, middel_br, input_middle,middel_brr, lastname, last_br, input_last,last_brr, email, email_br, input_email,email_brr,loc,loc_br,input_loc,loc_brr ,button_tag)