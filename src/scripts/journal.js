// Create and append all the required elements for the journal.

// Create the form to allow the user to complete a journal entry.
const entryForm = {
  formBuilder(){
    let form = 
      `<article>
         <fieldset>
           <legend>Make a New Entry</legend>
             <label for="journalDate">Date of Entry:</label>
             <input type="date" name="journal" id="journalDate" autofocus>
         </fieldset>
         <fieldset>
           <label for="conceptsCovered">Concepts Covered:</label>
           <input type="text" name="concepts" id="conceptsCovered">
         </fieldset>
         <fieldset>
           <label for="journalBody">Journal Entry:</label>
           <textarea type="text" name="body" id="journalBody"></textarea>
         </fieldset>
         <fieldset>
           <label for="moodToday" id="moodToday">Mood for the Day:</label>
           <select name="mood">
             <option value="ecstatic">Ecstatic</option>
             <option value="doin_well">Doin' well</option>
             <option value="just_ok">Just OK</option>
             <option value="sad">Sad</option>
             <option value="kill_me">Kill me now</option>
           </select>
         </fieldset>
         <button id="journalSave">Save New Entry</button>
       </article>`;

       // Declare a variable to target the article with a class of entryLog.
       let displayForm = document.querySelector(".entryLog");
       
       // Set the article content to the predefined HTML tags above via the formBuilder().
       displayForm.innerHTML = form;
  },
  
  entryBuilder (entryObject) {
    // Test.
    console.log(entryObject, "obj");

    // Building the article.
    let entryArticle = document.createElement("article");

    // Building the article's children.
    let entryDate = document.createElement("p");
    let entryConcept = document.createElement("p");
    let entryEntry = document.createElement("p");
    let entryMood = document.createElement("p");

    // Setting the text content.
    entryDate.textContent = entryObject.date;
    entryConcept.textContent = entryObject.concepts;
    entryEntry.textContent = entryObject.entry;
    entryMood.textContent = entryObject.mood;

    // Appending to the appropriate child.
    entryArticle.appendChild(entryDate);
    entryArticle.appendChild(entryConcept);
    entryArticle.appendChild(entryEntry);
    entryArticle.appendChild(entryMood);

    // Return article.
    return entryArticle;
  }
};