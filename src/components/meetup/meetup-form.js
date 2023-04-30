import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Select from "../ui/Select";

function MeetupForm({ meetup }) {
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
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
            {...register("title", { required: true })}
          />

          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            className="form-control"
            id="time"
            {...register("time", { required: true })}
          />

          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            className="form-control"
            id="location"
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
            {...register("description", { required: true })}
          />

          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
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
