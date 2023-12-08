
import "./Card.css";

const Card = ({member}) => {
    return (
        <div className="grid-common grid-c6">
            <div className="grid-item-top">
                <div className="grid-item-top-l">
                    <div className="avatar img-fit-cover">
                        <img src={member.image} />
                    </div>
                </div>
                <div className="grid-item-top-r">
                    <span>{member.title}</span>
                    <p className="subset">{member.designation}</p>
                    <p className="subset">{member.team}</p>
                    <p className="subset">{member.location}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
