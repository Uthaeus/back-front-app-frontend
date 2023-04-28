import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MeetupContext } from "../store/meetup-context";
import MeetupItem from "../components/meetup/meetupItem";

function Meetups() {
    const [meetups, setMeetups] = useState([]); 
    const meetCtx = useContext(MeetupContext);

    useEffect(() => {
        console.log('useEffect Meetups');
        setMeetups(meetCtx.meetups);
    }, [meetCtx.meetups]);

    const content = meetups.map((meetup) => {
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