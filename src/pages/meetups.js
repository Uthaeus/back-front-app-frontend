import { createContext } from "react";

import { MeetupContext } from "../store/meetup-context";

function Meetups() {
    const meetCtx = createContext(MeetupContext);

    const content = meetCtx.meetups.map((meetup) => {
        return <li key={meetup.id}>{meetup.title}</li>
    });

    return (
        <div className="meetups-container">
            <h1>Meetups</h1>
            <ul>{content}</ul>
        </div>
    );
}

export default Meetups;