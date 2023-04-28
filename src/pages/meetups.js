import { useContext } from "react";
import { Link } from "react-router-dom";

import { MeetupContext } from "../store/meetup-context";
import MeetupItem from "../components/meetup/meetupItem";

function Meetups() {
    const meetCtx = useContext(MeetupContext);

    const content = meetCtx.meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} item={meetup} />
    });

    return (
        <div className="meetups-container">
            <h1>Meetups</h1>
            <Link to="/meetup/new">Create New Meetup</Link>
            <div>
                {content}
            </div>
        </div>
    );
}

export default Meetups;