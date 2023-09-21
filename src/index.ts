import {NumbersCollection} from "./NumbersCollection";
import {CharacterCollection} from "./CharacterCollection";
import {LinkedList} from "./LinkedList";
const  numberCollection =  new NumbersCollection([1,2,345,67,7,8,99,-12, -1 , 1000]);
numberCollection.sort()
console.log(numberCollection.data);
console.log('---------------------------------');



const strCollection  = new CharacterCollection('acheXas');
strCollection.sort();
console.log(strCollection.data);
console.log('---------------------------------');


const linkedList  = new LinkedList();
linkedList.add(2323);
linkedList.add(-2323);
linkedList.add(23);
linkedList.add(32);
linkedList.add(-223);
linkedList.add(-22);
linkedList.add(50);
linkedList.add(0);
// linkedList.print();
// console.log('---------------------------------');
linkedList.sort();
linkedList.print();