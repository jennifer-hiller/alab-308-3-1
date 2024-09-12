// fizz buzz
for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz");
  } else if (n % 3 === 0) {
    console.log("fizz");
  } else if (n % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(n);
  }
}
// Prime Time
let n = 100;
console.log("starting number: ", n);
// find the next prime number
let isPrime = false;
while (!isPrime) {
  n++;
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      break;
    }
    isPrime = true;
  }
}
console.log("Next Prime number: ", n);

// Feeling Loopy
// I just couldn't figure out how to do this without Arrays, sorry!
const csv =
  // "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const rows = csv.split("\n");
for (let row of rows) {
  const columns = row.split(",");
  console.log(columns[0], columns[1], columns[2], columns[3]);
}
