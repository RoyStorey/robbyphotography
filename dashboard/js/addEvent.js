const root = ReactDOM.createRoot(
    document.getElementById('addEvent')
);

// get uploaded files
// go through files one by one
// add individual file to JSON





let selectedFile = document.getElementById('uploadedFiles');

for (let i = 0; i < selectedFile.length; i++) {

};



const addEventDOM = (
    <div className="toolProper">
        <p>Event Name*</p>
        <input type="text"></input>
        <p>Event Description*</p>
        {/* <textarea></textarea> */}
        <p>Event Images*</p>
        <input type="file" multiple id="uploadedFiles" name="myfile"></input>
        <input type="submit" className="submitButton" value="Add Event"></input>
    </div>
);

root.render(addEventDOM);