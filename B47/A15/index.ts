var invitation = ['Nana', 'Nani', 'Dada', 'Dadi'];
const index = invitation.indexOf('Nani', 0);
if (index > -1) {
    invitation.splice(index, 1);
}

invitation.push('Mamoo');

invitation.forEach(element => {
    console.log(`Hi ${element}, I would like to invite you dinner on birthday of your grandson.`);
});