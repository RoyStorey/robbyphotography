
const root = ReactDOM.createRoot(
    document.getElementById('addEvent')
);

const addEventDOM = (
    <div className="toolProper">
        <form method="post" enctype="multipart/form-data">
            <p>Event Name*</p>
            <input type="text" id="eventName"></input>
            <p>Event Description*</p>
            {/* <textarea id="eventDescription" name="eventDescription" ></textarea> */}
            <p>Event Images*</p>
            <input type="file" id="eventImages" name="eventImages"></input>
            <input type="submit" className="submitButton" value="Add Event"></input>
        </form>
    </div>
);



// let photo = document.getElementById("uploadedFiles").files[0];
// let formData = new FormData();

// formData.append("photo", photo);
// fetch('/pics/image', { method: "POST", body: formData });





root.render(addEventDOM);