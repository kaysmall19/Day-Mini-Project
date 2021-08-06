// Number one
// prompt the user for a date
let date = prompt("Please enter the date.");
let text;
if (date == null || date == "") 
{
  text = "User cancelled the date.";
} else {
  text = date ;
}
// prompt the user for a confidence level
let confidence = prompt("Please enter your confidence level.");
let text;
if (confidence == null || confidence == "Great, Okay, Ugh") 
{
  text = "User cancelled the confidence level.";
} else {
  text = confidence ;
}
// prompt the user for a reflection
let reflection = prompt("Please enter your reflection on today.");
let text;
if (reflection == null || reflection == "") 
{
  text = "User cancelled the reflection";
} else {
  text = reflection ;
}
// add an array for the prompts
const journal_entry = [
    "date",
    "confidence",
    "relfection"
  ];
//number two
//create an object for the journal entry

//number three
//

//number four
//

//number five
//add the journals into arrays
//add an unordered list
//create a function to iterate arrays

//number six
//create a while loop to continue the letting the user add journals until the enter quit.
//example
// function addJournalEntry(date, entry, confidence)
// {
//       // Create a new journal object
//       let newEntry = 
//       {
//         creation_date: date, 
//         journal_entry: entry,
//         confidence_level: confidence              
//       }

//       // Add the entry to the Array and to the DOM 

//       // Call your logJournalEntries function to log all entries in the array to the console
// }