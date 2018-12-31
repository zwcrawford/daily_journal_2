// Declare an eventListener object.
const eventListener = {
  saveEntry() {
    // Retrieve user input from form.
    const date = document.querySelector("#journalDate").value;
    const concepts = document.querySelector("#conceptsCovered").value;
    const body = document.querySelector("#journalBody").value;
    const mood = document.querySelector("#moodToday").value;
    
    const entryObjectSaved ={
        date: date,
        concepts: concepts,
        body: body,
        mood: mood
    };
    console.log(entryObjectSaved);

    data.postNewEntry(entryObjectSaved)
    .then(post => {
      console.log(post);
      data.displayData();
    })
  }
}