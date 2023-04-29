import { useNavigate } from "react-router";


function MeetupItem({item}) {
    const navigate = useNavigate();

    function itemClickHandler() {
        navigate(`/meetups/${item.id}`);
    }

    return (
        <div className="meetup-item-wrapper" onClick={itemClickHandler}>
            <h1 to={`/meetups/${item.id}`} className="meetup-item-title">{item.title}</h1>
        </div>
    );
}

export default MeetupItem;