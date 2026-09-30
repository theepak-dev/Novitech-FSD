function addData(){
    let usertitle = document.getElementById("userkey").value;
    let uservalue = document.getElementById("userdata").value;
    localStorage.setItem(usertitle,uservalue);
    document.getElementById("userkey").value = "";
    document.getElementById("userdata").value = "";
}
function getData(){
    let searchvalue = document.getElementById("usersearch").value;
    let returnValue = localStorage.getItem(searchvalue)
    document.getElementById("returndata").innerText = returnValue;
}
function deleteAllData(){
    localStorage.clear();
    document.getElementById("userkey").value = "";
    document.getElementById("userdata").value = "";
    document.getElementById("returndata").innerText = "";
    document.getElementById("usersearch").value = "";
}