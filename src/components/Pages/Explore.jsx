import items from "./items";

const Explore = () => {
    return (
        <div className="explore-container">
            <video src="/videos/explore.mp4" autoPlay loop muted />
            <h1>explore</h1>
            <div className="items">
                {items &&
                    items.map((item) => {
                        if (item.itemTag === "explore") {
                            return (
                                <div key={item.itemId} className="item-card">
                                    <div className="item-card-top">
                                        <img
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
