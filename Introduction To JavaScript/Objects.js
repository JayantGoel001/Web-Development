const company = {
    name:"Apple",
    founded:"1976",
    founders:["Steve Jobs","Steve Wozniak","Ronald Wayne"],
    products:["iphone","macintosh"],
    ceo:"Tim Cook",
    createNewProduct:function(productName){
        this.products.push(productName);
        document.write("Create Product <br>");
        return this.products;
    }
}
document.write(company.name+"<br>");
document.write(company.founded+"<br>");
document.write(company.founders+"<br>");
document.write(company.products+"<br>");
document.write(company.ceo+"<br>");
company.createNewProduct("Windows")
document.write(company.products+"<br>");
document.write(company["name"]+"<br><br><br>");

const comp = {
    name:"Apple",
    founded:"1976",
    founders:["Steve Jobs","Steve Wozniak","Ronald Wayne"],
    products:[
        {
            name:"iphone",
            year:1999
        },
        {
            name:"macintosh",
            year:2000
        }
    ],
    ceo:"Tim Cook",
    createNewProduct:function(productName){
        this.products.unshift(productName);
        document.write("Create Product <br>");
        return this.products;
    },

    fireCeo:function(){
        this.ceo = "";
    },
    hireCeo:function(name){
        this.ceo = name;
    }
}

document.write(comp.products[0].name+" "+comp.products[0].year+"<br>");
comp.createNewProduct({name:"Windows",year:2020})
document.write(comp.products[0].name+" "+comp.products[0].year+"<br>");
comp.fireCeo();
document.write(comp.ceo+"<br>");
comp.hireCeo("Jayant");
document.write(comp.ceo+"<br>");
