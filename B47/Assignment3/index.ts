var userName='Ayub zulfiqar';
var lowercaseName=userName.toLowerCase();
var upercaseName=userName.toUpperCase();
var titlecaseName = userName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")

console.log(`Person name in lowercase: ${lowercaseName}`);
console.log(`Person name in upercase: ${upercaseName}`);
console.log(`Person name in titlecase: ${titlecaseName}`);
