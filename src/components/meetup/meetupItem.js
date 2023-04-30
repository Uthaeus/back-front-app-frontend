import { useNavigate } from "react-router";


function MeetupItem({item}) {
    const navigate = useNavigate();

    function itemClickHandler() {
        navigate(`/meetups/${item.id}`);
    }
    
    let time = item.time.split("T")[1].slice(0, 8);
    let date = item.time.split("T")[0];

    return (
        <div className="meetup-item-wrapper" onClick={itemClickHandler}>
            <h1 to={`/meetups/${item.id}`} className="meetup-item-title">{item.title}</h1>
            <p className="meetup-item-location">{item.location}</p>
            <p className="meetup-item-time">{time}</p>
            <p className="meetup-item-date">{date}</p>
        </div>
    );
}

export default MeetupItem;