var demo_objects;
(function (demo_objects) {
    //Object
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log('rect area = ' + rectangle.calcArea());
})(demo_objects || (demo_objects = {}));
//# sourceMappingURL=objects.js.map