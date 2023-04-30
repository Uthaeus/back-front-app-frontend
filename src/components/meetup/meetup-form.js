import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Select from "../ui/Select";

const initialMeetup = {
  title: "",
  time: "",
  location: "",
  description: "",
  image: "",
};

function MeetupForm({ meetup }) {
  const [meetupData, setMeetupData] = useState(meetup || initialMeetup);
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: meetupData.title,
      time: meetupData.time,
      location: meetupData.location,
      description: meetupData.description,
      image: meetupData.image,
    }
  });

  const submitHandler = (data) => {
    let action = meetup ? 'PATCH' : 'POST';
    let path = meetup ? `/${meetupData.id}` : '';

    fetch(`http://localhost:3000/meetups${path}`, {
      method: action,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/meetups");
      })
      .catch((error) => {
        console.log("submitHandler meetup form error", error);
      });
  }; 

  return (
    <form className="meetup-form-container" onSubmit={handleSubmit(submitHandler)}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            {...register("title", { required: true })}
          />

          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type='datetime-local'
            className="form-control"
            id="time"
            name="time"
            {...register("time", { required: true })}
          />

          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            className="form-control"
            id="location"
            name="location"
            {...register("location", { required: true })}
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
            name="description"
            {...register("description", { required: true })}
          />

          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            {...register("image", { required: true })}
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
