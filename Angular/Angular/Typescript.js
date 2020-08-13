// tsc Typescript.ts --watch
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
var me = "Cormac";
me = "5463";
var random = true;
random = "Random";
var numbers = [4, 6];
function doStuff(name) {
    console.log("Name");
    return 123;
}
function doStuff2(name) {
    console.log("Name");
}
var person;
person = {
    name: "Cormac"
};
var platform;
(function (platform) {
    platform[platform["PC"] = 0] = "PC";
    platform[platform["PS4"] = 1] = "PS4";
    platform[platform["XBOX1"] = 2] = "XBOX1";
    platform[platform["Switch"] = 3] = "Switch";
    platform[platform["Mobile"] = 4] = "Mobile";
})(platform || (platform = {}));
var gamer = {
    name: "Cormac",
    gamerTag: "Jib",
    platform: platform.PC
};
var Pet = /** @class */ (function () {
    function Pet(name) {
        this.name = name;
    }
    Pet.prototype.sleep = function (hours) {
        if (hours === void 0) { hours = 6; }
        console.log(this.name + " has slept for " + hours);
    };
    Pet.prototype.eat = function () {
        console.log(this.name + " has slept");
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sleep = function (hours) {
        if (hours === void 0) { hours = 7; }
        _super.prototype.sleep.call(this, hours);
    };
    Dog.prototype.bark = function () {
        console.log("Bark Bark");
    };
    return Dog;
}(Pet));
var lady = new Dog("Lady");
lady.bark();
