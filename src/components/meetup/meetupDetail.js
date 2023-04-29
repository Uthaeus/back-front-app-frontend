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
        <div className="meetup-detail-container">
            <div className="row">
                <div className="col-12">
                    <div className="meetup-detail-header" style={{
                        backgroundImage: `url(${meetup.image ? meetup.image.url : ""})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "300px"
                    }} />
                </div>
                
                <div className="col-12">
                    <div className="meetup-detail-info-wrapper">
                        <h2>{meetup.title}</h2>
                        <p>{meetup.location}</p>
                        <p>{meetup.time}</p>
                    </div>
                </div>

                <div className="col-12">
                    <div className="meetup-detail-description-wrapper">
                        <p className="detail-description">{meetup.description}</p>
                    </div>
                </div>
            </div>
            
            <button className="btn btn-primary" onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default MeetupDetail;