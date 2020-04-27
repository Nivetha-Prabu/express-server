var person ={
	name: 'Nivetha Angular 9 developer',
	age:27
};
function updatePerson (obj) {
	obj = {
		name: '	Nivetha Angular Developer',
		age: 27
	};
}
updatePerson(person);
console.log(person);