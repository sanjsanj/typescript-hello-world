/// <reference path="typings/knockout.d.ts" />
declare var ko: KnockoutStatic;

module demo_ambient_declarations {
    var name = ko.observable('Bob Bobson');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
}