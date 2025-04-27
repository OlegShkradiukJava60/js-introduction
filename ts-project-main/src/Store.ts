import Identifiable from "./Identifiable";
import Predicate from "./Predicate";

export default class Store<T extends Identifiable> {
    private items: T[] = [];
    add(item: T):void {
       //adds new item with validation of unique id value
       //if item with the given id exists the method throws exception 
       if(this.getById(item.id)) {
           throw new Error(`Item with id ${item.id} already exists`);
       }
       this.items.push(item);
       
    }
    getById(id: string): T | undefined {
        //returns item with the given id or undefined if such item doesn't exist
        return this.items.find(item => item.id === id);
    }
    find(predicate: Predicate<T>): T[] {
        //returns array of items matching the given predicate
        return this.items.filter(item => predicate.test(item));  
    }
    remove(id: string): T | undefined {
        const index = this.items.findIndex(item => item.id === id);
        let res = undefined
        if (index > -1) {
            [res] = this.items.splice(index, 1);
        }
        return res;
    }
   
}