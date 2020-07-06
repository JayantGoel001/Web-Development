function connect(callback){
    document.write("Connecting...");
    document.write("<br>");
    document.write("........");
    document.write("<br>");
    callback("Finished");

}
connect(console.log);
document.write("<br>");
connect(function(value){
    document.write(".. ..");
    document.write("<br>");
    document.write(value);
});
document.write("<br>");

function cookFood(){
    document.write("Just Started Cooking Food.");
    document.write("<br>");
    setTimeout(function(){
        document.write("Time to Eat. :(");
        document.write("<br>");
        eat();
    },2000);
}

function eat(){
    clearTimeout(readingID);
    setTimeout(function(){
        document.write("Done Eating.<br>");
        //read();
    },3000);
}

function read(){
    let timerID = setInterval(function(){
        document.write("Reading....<br>");
    },500);
    return timerID;
}

let readingID = read();
cookFood();
