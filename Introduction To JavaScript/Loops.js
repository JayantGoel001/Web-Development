for (let i = 0; i < 10; i++) {
    document.write(i);
    document.write("<br>");
}
document.write("<br>");

let nerds = ["Albert Einstein","Alan Turinng","Nikola Tesla","Isaac Newton"];
for (var i = 0; i < nerds.length; i++) {
    document.write(nerds[i]);
    document.write("<br>");
}
document.write("<br>");
number = 10;
while (number>0) {
    document.write(number);
    document.write("<br>");
    number--;
}
document.write("<br>");

nerds.forEach((item, i) => {
    document.write(item);
    document.write("<br>");

});
document.write("<br>");

for(name of nerds)
{
    document.write(name);
    document.write("<br>");
}
document.write("<br>");

for(key in nerds)
{
    document.write(nerds[key]);
    document.write("<br>");
}
