import "./PageStyle.css";
import items from "./items";

const Explore = () => {
    return (
        <div className="items-container">
            <video src="/videos/explore.mp4" autoPlay loop muted />
            <div className="items">
                {items &&
                    items.map((item) => {
                        if (item.itemTag === "explore") {
                            return (
                                <div key={item.itemId} className="item-card">
                                    <div className="item-card-top">
                                        <img
                                            className="item-image"
                                            src={item.itemImage}
                                            alt="abcdef"
                                        />
                                    </div>
                                    <div className="item-card-bottom">
                                        <span>{item.itemName}</span>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
            </div>
        </div>
    );
};

export default Explore;
