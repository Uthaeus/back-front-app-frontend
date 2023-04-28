import { useContext } from "react";
import { useParams } from "react-router";

import { MeetupContext } from "../store/meetup-context";

function MeetupDetail() {
    const params = useParams();
    const meetCtx = useContext(MeetupContext);
    
    const meetup = meetCtx.meetups.find((meetup) => {
        console.log(meetup.id);
        return meetup.id === +params.meetupId;
    });

    return (
        <div>
            <h1>Meetup Detail</h1>
            <img src={meetup.image} alt={meetup.title} />
            <h2>{meetup.title}</h2>
            <p>{meetup.description}</p>
        </div>
    );
}

export default MeetupDetail;