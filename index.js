
// 
// Factory method
function createPerson(id,name,city,street, app,children){
    return{id:id, name:name, address:{city:city, street:street, app:app},children:children}
}
const person = createPerson(123,"Vasya",'Lod', 'Sokolov',12, ["Yackob", "Asaf"])
const jsonPerson = JSON.stringify(person);
console.log(`person name is ${person.name}`)
console.log(`person name from JSON is ${jsonPerson.name}`)
console.log(`person length is ${person.length}`);
console.log(`JSON person leength is ${jsonPerson.length}`)


