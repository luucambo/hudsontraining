import { faCalendar, faClock, faMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const DestinationView = ({destination}) => {
    const redStyle = {
        color: 'red'
    };
    const blueStyle = {
        color: 'blue'
    };

    var tempStyle = {
        color: 'green'
    };

    if (destination.conditions.current > 80) {
        tempStyle = redStyle;
    }
    else if (destination.conditions.current < 65) {
        tempStyle = blueStyle;
    }

    return (
        <Link to={`/destination/${destination.id}`} key={destination.id}>
            <div className="card-title">{destination.description}</div>
            <p><FontAwesomeIcon icon={faCalendar} className="mr-3" />{(destination.cityId)}</p>
            <p><FontAwesomeIcon icon={faClock} className="mr-3" />{(destination.conditions.description)}</p>
            <p><span style={tempStyle}><FontAwesomeIcon icon={faMarker} className="mr-3" />{destination.conditions.current} F</span></p>
        </Link>
    )
}

export default DestinationView;