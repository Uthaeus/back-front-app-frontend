import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function MeetupDetail() {
    const params = useParams();
    const [meetup, setMeetup] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:3000/meetups/${params.meetupId}`)
            .then((response) => {
                
                return response.json();
            })
            .then((data) => {
                console.log("useEffect meetup detail data", data);
                setMeetup(data);
            })
            .catch((error) => {
                console.log("useEffect meetup detail error", error);
            });
    }, [params.meetupId]);

    function deleteHandler() {
        fetch(`http://localhost:3000/meetups/${params.meetupId}`, {
            method: "DELETE"
        })
        .then((response) => {
            navigate("/meetups");
        })
        .catch((error) => {
            console.log("deleteHandler error", error);
        });
    }

    return (
        <div>
            <h1>Meetup Detail</h1>
            <img src={meetup.image} alt={meetup.title} />
            <h2>{meetup.title}</h2>
            <p>{meetup.description}</p>
            <p>{meetup.location}</p>
            <p>{meetup.time}</p>
            <button className="btn btn-primary" onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default MeetupDetail;