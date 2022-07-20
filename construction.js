function construct(name) {
    let person = {
        name ,
        material: "human",
        assemble: true,
        duration: 1000
    };
  
    return person;
  }
const somePerson = construct('Irene');
console.log('name is: ' + somePerson.name);
console.log('material is: ' + somePerson.material);
console.log('assemble is: ' + somePerson.assemble);
console.log('duration is: ' + somePerson.duration);