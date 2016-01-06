module demo_primitives {
    //any
    var data: any;
    var info;
    var doSomething = function (arg) {
        return arg;
    }
    var x = doSomething(5);

    //primitives
    var age: number = 21;
    var score: number = 34.56;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'yes'; }
    var hasHair = !!isBald();

    //string array
    function getArrayLength(x: string[]) {
        var len = x.length;
        return len;
    }
    var names: string[] = ['Bob', 'Tom'];
    var firstPerson: string = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity: number;
    var company = undefined;
}