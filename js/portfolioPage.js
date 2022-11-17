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
let activeModal = '';
let imageId = '0';
let imageTiles = [];
let events = {
    "event1": {
        "name": "Airshow",
        "image": "/pics/bcfc/020A0305.jpg"
    },
    "event2": {
        "name": "Wedding",
        "image": "/pics/bcfc/020A0305.jpg"
    },
    "event3": {
        "name": "Wedding",
        "image": "/pics/bcfc/020A0305.jpg"
    },
    "event4": {
        "name": "Wedding",
        "image": "/pics/bcfc/020A0305.jpg"
    },
    "event5": {
        "name": "Wedding",
        "image": "/pics/bcfc/020A0305.jpg"
    },
    "event6": {
        "name": "Wedding",
        "image": "/pics/bcfc/020A0305.jpg"
    }
};



function imageTile(event) {
    const handleClick = event => {
        activeModal = event.currentTarget.id
        console.log(activeModal)
        let currentImage = document.getElementById(activeModal);
        currentImage.style.width = "100vw";
    }
    return (
        <div className="picAndTextContainer">
            {/* Event THUMBNAIL */}
            <img src={event.image} id={imageId} onClick={handleClick}></img>
            {/* Event NAME */}
            <p>{event.name}</p>
        </div >

    )
};

for (let event of Object.values(events)) {
    imageTiles.push(imageTile(event));
    imageId++;
}

const portfolioBody = (

    <div className="heroDiv">
        <div className="heroDivLayer">
            {imageTiles}
        </div>
    </div>
);

root.render(portfolioBody);