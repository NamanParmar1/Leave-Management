import "./Card.css";

const Card = ({ member }) => {
    const today = new Date().toISOString().split('T')[0].substring(5);

    return (
        <div className={`grid-common grid-c6 ${member.birthday.substring(5) === today ? 'bd' : ''}`}>
            <div className="grid-item-top">
                <div className="grid-item-top-l">
                    <div className="avatar img-fit-cover">
                        <img src={member.image} />
                    </div>
                </div>
                <div className="grid-item-top-r">
                    <div className="grid-item-top-r-title">{member.title}</div>
                    <div className="grid-item-top-r cover">
                        <div className="grid-item-top-r text">
                            <p className="subset">{member.designation}</p>
                            <p className="subset">{member.team}</p>
                            <p className="subset">{member.location}</p>
                        </div>
                        <div className="grid-item-top-r ntext">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;
