function doLogging()
{
    document.write("This<br>");
    document.write("Then log this<br>");
    document.write("Then finish by logging this<br>");
}
let name = "Jayant";
if (name) {
    doLogging();
}

if(name && true){
    doLogging();
}


function sayHi(name=""){
    document.write("Hello, "+name+"<br>");
}
sayHi(name);

function add(a,b){
    return a+b;
}//always return something --->undefined
document.write(add(10,98)+"<br>");

function countDown(i){
    document.write(i+"<br>");
    if (i>0){
        countDown(i-1);
    }
}
countDown(10);
