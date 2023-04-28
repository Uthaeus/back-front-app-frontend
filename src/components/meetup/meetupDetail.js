import { useState, useEffect } from "react";
import { useParams } from "react-router";

function MeetupDetail() {
    const params = useParams();
    const [meetup, setMeetup] = useState({});
    
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
        <div>
            <h1>Meetup Detail</h1>
            <img src={meetup.image} alt={meetup.title} />
            <h2>{meetup.title}</h2>
            <p>{meetup.description}</p>
            <p>{meetup.location}</p>
            <p>{meetup.time}</p>
        </div>
    );
}

export default MeetupDetail;