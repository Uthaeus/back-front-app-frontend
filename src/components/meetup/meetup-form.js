import { useState } from "react";

function MeetupForm() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    function submitHandler(event) {
        event.preventDefault();

        const meetupData = {
            title,
            image,
            time,
            description
        };

        console.log(meetupData);
    }

    return (
        <form className="meetup-form-container" onSubmit={submitHandler}>
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" />

                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" />

                    <label htmlFor="time" className="form-label">Time</label>
                    <input type="datetime-local" className="form-control" id="time" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="5"></textarea>
                </div>
            </div>
        </form>
    );
}

export default MeetupForm;
