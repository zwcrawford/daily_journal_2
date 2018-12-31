// Grabbing all the entries from json

const grabEntries = {
  grabAllEntries() {
    return fetch("http://localhost:8088/journal")
    .then(response => response.json());
  },
  postNewEntry(newEntry) {
    return fetch("http://localhost:8088/journal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(newEntry)
    })
      .then(response => response.json());
  }
};
const data = {
  displayData(){
    grabEntries.grabAllEntries()
    .then(allEntries => {
      let entryDocFrag = document.createDocumentFragment();
        allEntries.forEach(journalEntry => {
          let entryText = entryForm.entryBuilder(journalEntry);
          console.log(journalEntry);
          entryDocFrag.appendChild(entryText);
        })
      let entryOutput = document.querySelector(".entryLog");
      entryOutput.appendChild(entryDocFrag);
    })
  }
};