//Example-1
let data = [10, 20, 30];
console.log("Output:"); 
for (let val in data) {
  console.log(val); 
}
/*
 Output: 
 0 
 1 
 2  
*/

//Example-2
let names:string[] = ["Jay", "Vijay", "Ashish"];
console.log("Output:"); 
for (let idx in names) {
    console.log(`index=${idx}, value=${names[idx]}`); 
}
/*
 Output: 
 index=0, value=Jay 
 index=1, value=Vijay 
 index=2, value=Ashish  
*/

//Example-3
interface Employee { id:number, name:string };
let employees:Employee[] = [
    {id:1, name:"Jay"},{id:2, name:"Vijay"},{id:3, name:"Ashish"}
];
console.log("Output:"); 
for (let idx in employees) {
    console.log(`index=${idx}, id=${employees[idx].id}, name=${employees[idx].name}`); 
}

/*
 Output: 
index=0, id=1, name=Jay
index=1, id=2, name=Vijay
index=2, id=3, name=Ashish 
*/