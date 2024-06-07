/*------------------------- tests ar const -----------------------------------*/
const z = 100;
console.log("z mainīgā vērtība pirms {}: " + z);
{
  //console.log("z mainīgā vērtība iekš {}: " + z);
  //z = 200;
  //console.log("z mainīgā vērtība iekš {} un pēc = darbības: " + z);
  const z = 1000;
  console.log("z mainīgā vērtība iekš {} un pēc atkārtotas const: " + z);
}
console.log("z mainīgā vērtība pēc {}: " + z);
//z = 40;
//console.log("z mainīgā vērtība pēc {} un pēc = darbības: " + z);
//const z = 60;
//var z = 60;
//let z = 60;
//console.log("z mainīgā vērtība pēc {} un pēc atkārtotas connst: " + z);