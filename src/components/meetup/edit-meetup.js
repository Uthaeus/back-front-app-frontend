import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MeetupForm from "./meetup-form";


function EditMeetup() {

  const params = useParams();

   
  return (
    <>
        <h1>edit {params.meetupId}</h1>
        <MeetupForm />
        </>
  );
}

export default EditMeetup;