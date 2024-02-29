//Prompt the user for froyo flavors
const userinputstring= prompt(
    "Please enter your selected froyo flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)
// create input into an array of strings
const array = userinputstring.split(",");



// create function to collect orders
function order(array){
    // object created to keep count of orders per flavor
    const flavors={}
    // use loop to iterate through the array of flavors
    for(let i = 0; i < array.length; i++) 
{       
    // if index does not exist in object, create that property and give value of 1  
        if(flavors[array[i]] === undefined){
    flavors[array[i]] = 1
 }
//  if index DOES exist add 1 to the value of that prop. Ex. Vanilla = 3
    else{ flavors[array[i]] +=1

}}
console.log(flavors)
console.table(flavors)
}
order(array)
// correctly counts the order of each flavor
