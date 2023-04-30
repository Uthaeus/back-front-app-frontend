import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MeetupForm from "./meetup-form";


function EditMeetup() {
    const [meetup, setMeetup] = useState({});
    const params = useParams();

    useEffect(() => {
    fetch(`http://localhost:3000/meetups/${params.meetupId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMeetup(data);
      })
      .catch((error) => {
        console.log("useEffect meetup detail error", error);
      });
    }, [params.meetupId]);

   
  return (
    <>
        <h1>edit {params.meetupId}</h1>
        <MeetupForm meetup={meetup} />
    </>
  );
}

export default EditMeetup;