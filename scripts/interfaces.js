var demo_interfaces;
(function (demo_interfaces) {
    var p = {
        favoriteMovie: "LOTR",
        name: "Bob",
        age: 25,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
    var pets = p.calcPets();
    console.log('pets = ' + pets);
    p.makeYounger(5);
    var newAge = p.age;
    console.log('new age = ' + newAge);
    var msg = p.greet('Hello');
    console.log('msg = ' + msg);
    //var movie = p.favoriteMovie;
    console.log('favorite movie = ' + p.favoriteMovie);
})(demo_interfaces || (demo_interfaces = {}));
//# sourceMappingURL=interfaces.js.map