import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MeetupContext } from "../store/meetup-context";
import MeetupItem from "../components/meetup/meetupItem";

function Meetups() {
    const [meetups, setMeetups] = useState([]); 
    const meetCtx = useContext(MeetupContext);

    useEffect(() => {
        fetch("http://localhost:3000/meetups")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMeetups(data);
            })
            .catch((error) => {
                console.log("useEffect meetups error", error);
            });
    }, [meetCtx.meetups]);

    const content = meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} item={meetup} />
    });

    return (
        <div className="meetups-container">
            <div className="meetups-header">
                <h1 className="meetups-title">Meetups</h1>
                <Link to="/meetup/new" className="new-meetup-link">Create New Meetup</Link>
            </div>
            <hr />
            <div className="meetups-content-wrapper">
                {content}
            </div>
        </div>
    );
}

export default Meetups;