
//  one person presented by separate variables
const id = 123;
const name = "Vasya";
const addressCity = 'Lod';
const addressStreet = 'Sokolov';
const addressApp = 12;
const children = ["Yackob", "Asaf"]

const person1 = {id:123, name: "Vasya", address: {city: 'Lod', street: 'Sokolov', app: 12},
children: ["Yackob", "Asaf"]};

// Factory method
function createPerson(id,name,city,street, app,children){
    return{id:id, name:name, address:{city:city, street:street, app:app},children:children}
}
const person2 = createPerson(123,"Vasya",'Lod', 'Sokolov',12, ["Yackob", "Asaf"])
// const person2 = person1
console.log(`person1 === person2 is ${person1 === person2}`)
const jsonPerson1 = JSON.stringify(person1);
const jsonPerson2 = JSON.stringify(person2);
console.log(`JSON presentation of person1 is ${jsonPerson1}`)
console.log(`JSON presentation of person2 is ${jsonPerson2}`)

console.log(`jsonPerson1 === jsonPerson2 is ${jsonPerson1 === jsonPerson2}`)

