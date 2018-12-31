entryForm.formBuilder();

let entrySaveBtn = document.getElementById("journalSave");
entrySaveBtn.addEventListener("click", eventListener.saveEntry);
data.displayData();