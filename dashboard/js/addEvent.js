const root = ReactDOM.createRoot(
    document.getElementById('addEvent')
);

const addEventDOM = (
    <div class="toolProper">
        <p>Event Name*</p>
        <input type:text></input>
        <p>Event Description*</p>
        <textarea></textarea>
        <p>Event Images*</p>
        <input type="file" id="myfile" name="myfile"></input>
        <input type="submit" class="submitButton" value="Add Event"></input>
    </div>
);

root.render(addEventDOM);