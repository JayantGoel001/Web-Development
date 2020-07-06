let hp = 100;
hp = hp - 45;
if(hp<=0)
{
    document.writeln("Game Over");
}
else if (hp<=20) {
    document.writeln("Player is low on health.");
}
else {
    document.writeln("Keep Playing");
}
document.writeln("<br>");
let name = "Jayant";
document.writeln(typeof name);
document.writeln("<br>");
if(name){
    document.writeln("truthy");
}
else {
    document.writeln("falsey");
}
//What is False?
// False,Empty String,0,NaN,null,undefined
