import { Link } from "react-router-dom";
import CardItems from "./CardItems";
import "./Cards.css";

const Cards = () => {
    return (
        <div className="cards-container">
            <h2>
                Find <span>your</span> way of <span>traveling</span>
            </h2>
            {CardItems.map((item) => {
                const {
                    cardTag,
                    cardImage,
                    cardImageAlt,
                    cardText,
                    cardPath,
                    id,
                } = item;
                return (
                    <div key={id} className="card">
                        <Link to={cardPath}>
                            <div className="card-top">
                                <img
                                    className="card-image"
                                    src={cardImage}
                                    alt={cardImageAlt}
                                />
                                <span className="card-tag">{cardTag}</span>
                            </div>
                        </Link>
                        <div className="card-bottom">{cardText}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
