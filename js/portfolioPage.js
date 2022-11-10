const root = ReactDOM.createRoot(
    document.getElementById('body')
);

// ROWS ARE OBJECTS TOO!
const fetchImages = async function () {
    let response = await fetch("/api/images.php", { method: "GET" });
    console.log(response, response.data);
    return response;
}
console.log(fetchImages(), fetchImages().data)

let imageTiles = [];
let events = {
    "event1": {
        "name": "Airshow"
    },
    "event2": {
        "name": "Wedding"
    }
};


function imageTile(event) {


    return (
        <div className="picAndTextContainer">
            {/* Event THUMBNAIL */}
            {/* <img src={event.image} id="gallery1"></img> */}
            {/* Event NAME */}
            <p>{event.name}</p>
        </div>
    )
};

for (let event of Object.values(events)) {
    imageTiles.push(imageTile(event))
}

const portfolioBody = (

    <div className="heroDiv">
        <div className="heroDivLayer">
            {imageTiles}
        </div>
    </div>


);

root.render(portfolioBody);