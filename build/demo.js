// declaring variables with a type
let x;
let y;
let b;
let c;
let d;
b = [1, 100];
c = 'hi';
c = 100;
d = [100, 'hundred'];
// declare and intialize a variable with type any
let e = 5;
e = 'test123';
// define an enumerable types
var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Active"] = "active";
    ContactStatus["Inactive"] = "inactive";
})(ContactStatus || (ContactStatus = {}));
// declare a variable with the type Contact
let primaryContact = {
    id: 123,
    name: 'Jef',
    birthDate: new Date(),
    status: ContactStatus.Active
};
