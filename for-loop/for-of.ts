//Example-1
let data = [10, 20, 30];
console.log("Output:"); 
for (let val of data) {
  console.log(val); 
}
/*
 Output: 
 10 
 20 
 30  
*/

//Example-2
let names:string[] = ["Jay", "Vijay", "Ashish"];
console.log("Output:"); 
for (let name of names) {
    console.log(name); 
  }
/*
 Output: 
 Jay 
 Vijay 
 Ashish  
*/

//Example-3
interface Employee { id:number, name:string };
let employees:Employee[] = [
    {id:1, name:"Jay"},{id:2, name:"Vijay"},{id:3, name:"Ashish"}
];
console.log("Output:"); 
for (let employee of employees) {
    console.log(`id=${employee.id}, name=${employee.name}`); 
}

/*
 Output: 
 id=1, name=Jay
 id=2, name=Vijay 
 id=3, name=Ashish  
*/