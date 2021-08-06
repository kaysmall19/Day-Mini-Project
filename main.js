function addJournalEntry(date, entry, confidence)
{
      // Create a new journal object
      let newEntry = 
      {
        creation_date: date, 
        journal_entry: entry,
        confidence_level: confidence              
      }

      // Add the entry to the Array and to the DOM 

      // Call your logJournalEntries function to log all entries in the array to the console
}

object.onclick = addJournalEntry();