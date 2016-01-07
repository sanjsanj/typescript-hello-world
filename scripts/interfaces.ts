module demo_interfaces {
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => string;
        greet: (msg: string) => string;
    }

    var p: Person = {
        favoriteMovie: "LOTR",
        name: "Bob",
        age: 25,
        kids: 4,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years: number) {
            this.age -= years;
        },
        greet: function (msg: string) {
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
}