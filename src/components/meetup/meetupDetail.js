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
            <h2>{params.meetupId}</h2>
            <h2>{meetup.title}</h2>
            <h2>{meetup.time}</h2>
            <h2>{meetup.description}</h2>

            {meetup.image && <img src={meetup.image.url} alt={meetup.title} />}
            
            <button className="btn btn-primary" onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default MeetupDetail;