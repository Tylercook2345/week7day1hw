/*Write a function that takes in the string and the list of dog names,
loops through the list and checks that the current name is in the string 
passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present 
console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]



function findWords(){
    //Your code goes here
    if(dog_string.includes(dog_names)){
        console.log("Matched dog_name");
    }else{
        console.log("No Matches");
    }
}



/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(a){
    //code goes here
   for (arr i = 0; i<a.length; i++); {
       if(i % 2 === 0){
           arr.push(a[i]);
       }
   }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger


//codewars Q1 : Multiply
//def multiply(a, b):
  //return a * b

console.log(a * b)

//codewars Q2 : Merge two sorted arrays into one 
//def merge_arrays(arr1, arr2):
//return sorted(set(arr1 + arr2))
const array1 = ['Lebron', 'Kobe', 'MJ'];
const array2 = ['Prescott', 'Ceedee', 'Ezekiel'];
const array3 = array1.concat(array2);

console.log(arrray3);

