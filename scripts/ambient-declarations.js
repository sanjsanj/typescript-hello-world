/// <reference path="typings/knockout.d.ts" />
var demo_ambient_declarations;
(function (demo_ambient_declarations) {
    var name = ko.observable('Bob Bobson');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
})(demo_ambient_declarations || (demo_ambient_declarations = {}));
//# sourceMappingURL=ambient-declarations.js.map