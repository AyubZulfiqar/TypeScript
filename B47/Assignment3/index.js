var userName = 'Ayub zulfiqar';
var lowercaseName = userName.toLowerCase();
var upercaseName = userName.toUpperCase();
var titlecaseName = userName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log("Person name in lowercase: ".concat(lowercaseName));
console.log("Person name in upercase: ".concat(upercaseName));
console.log("Person name in titlecase: ".concat(titlecaseName));
