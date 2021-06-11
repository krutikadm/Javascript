
/*
function add(){
    var first=document.getElementById('first').value;
    var second= document.getElementById('second').value;
    var results = Number (first) + Number(second);
    document.getElementById('final').innerText=`Sum of number is ${results}`

}
function sub(){
    var first=document.getElementById('first').value;
    var second= document.getElementById('second').value;
    var results = Number (first) - Number(second);
    document.getElementById('final').innerText=`Sub of number is ${results}`

}
*/
function calculator(value){
    var first=document.getElementById('first').value;
    var second= document.getElementById('second').value;
    var results;
    if(value=="Add"){
        var results =`sum of ${Number (first) + Number(second)}`; 
    }
    else{
        var results= `sub of ${Number (first) - Number(second)}`;
    }
    document.getElementById('final').innerText=results
}

