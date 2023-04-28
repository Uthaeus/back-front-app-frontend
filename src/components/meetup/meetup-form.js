import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { MeetupContext } from "../../store/meetup-context";

function MeetupForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const meetCtx = useContext(MeetupContext);

  function inputChangeHandler(event) {
    const { id, value } = event.target;

    switch (id) {
      case "title":
        setTitle(value);
        break;
      case "image":
        setImage(value);
        break;
      case "time":
        setTime(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    const meetupData = {
      title,
      image,
      time,
      description,
      location,
    };

    fetch("http://localhost:3000/meetups", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        navigate(`/meetups/${data.id}`);
      })
      .catch((error) => {
        console.log("submitHandler error", error);
      });

    console.log(meetupData);
  }

  return (
    <form className="meetup-form-container" onSubmit={submitHandler}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={inputChangeHandler}
            value={title}
          />

          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="time"
            onChange={inputChangeHandler}
            value={time}
          />

          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            onChange={inputChangeHandler}
            value={location}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            onChange={inputChangeHandler}
            value={description}
          />

          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={inputChangeHandler}
            value={image}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default MeetupForm;
