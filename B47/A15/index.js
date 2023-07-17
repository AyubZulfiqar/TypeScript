var invitation = ['Nana', 'Nani', 'Dada', 'Dadi'];
var index = invitation.indexOf('Nani', 0);
if (index > -1) {
    invitation.splice(index, 1);
}
invitation.push('Mamoo');
invitation.forEach(function (element) {
    console.log("Hi ".concat(element, ", I would like to invite you dinner on birthday of your grandson."));
});
