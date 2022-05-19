// https://www.hackerrank.com/contests/javascript-challenges/challenges/display-infromation-from-an-object


// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

function displayInformation() {
  for(let i = 0; i < library.length; i++) {
    if(library[i].readingStatus) {
      console.log(`Already read '${library[i].title}' by ${library[i].author}.`)
    } else {
      console.log(`You still need to read '${library[i].title}' by ${library[i].author}.`)
    }
  }  
} 

var library = [ 
 {
   title: 'Bill Gates',
   author: 'The Road Ahead',
   readingStatus: true
 },
 {
   title: 'Steve Jobs',
   author: 'Walter Isaacson',
   readingStatus: true
 },
 {
   title: 'Mockingjay: The Final Book of The Hunger Games',
   author: 'Suzanne Collins',
   readingStatus: false
 }
]

displayInformation()