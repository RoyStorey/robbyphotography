class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventDescription: '',
            eventImages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.eventName = '';
    }
    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    }
    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.eventName);
        e.preventDefault();
        console.log("handleSubmit")
        console.log(this.state.eventName)
        console.log(this.state.eventDescription)
        console.log(this.state.eventImages)
        let eventData = [eventName = this.state.eventName, eventDescription = this.state.eventDescription, eventImages = this.state.eventImages]
        console.log(eventData)
    }

    render() {
        return (
            <div className="toolProper">
                <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
                    <p>Event Name*</p>
                    <input type="text" id="eventName" name="eventName" value={this.state.eventName} onChange={this.handleChange} />
                    <p>Event Description*</p>
                    <textarea type="text" id="eventDescription" name="eventDescription" value={this.state.eventDescription} onChange={this.handleChange}></textarea>
                    <p>Event Images*</p>
                    <input type="file" id="eventImages" name="eventImages" value={this.state.eventImages} onChange={this.handleChange} multiple />
                    <input type="submit" className="submitButton" value="Add Event" />
                    <p>{this.state.eventName}</p>
                    <p>{this.state.eventDescription}</p>
                </form>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('addEvent'));
root.render(<Event />);

