import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MeetupForm from "./meetup-form";

function EditMeetup() {
    const [meetup, setMeetup] = useState({});
    const params = useParams();

    

    return (
        <div>
            <h1>Edit Meetup Page</h1>
            <MeetupForm meetup={meetup} />
        </div>
    );
}

export default EditMeetup;