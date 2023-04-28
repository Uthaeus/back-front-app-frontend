import { Link } from "react-router-dom";


function MeetupItem({item}) {

    return (
        <div>
            <Link to={`/meetups/${item.id}`}>{item.title}</Link>
        </div>
    );
}

export default MeetupItem;