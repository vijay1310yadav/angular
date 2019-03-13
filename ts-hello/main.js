function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally" + i);
}
doSomething();
var Name;
(function (Name) {
    Name[Name["vijay"] = 0] = "vijay";
    Name[Name["rohit"] = 1] = "rohit";
    Name[Name["rajat"] = 2] = "rajat";
})(Name || (Name = {}));
;
var newNmae = Name.vijay;
console.log(newNmae);
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //...
        console.log("X :" + this.x + "Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 12;
point.draw();
