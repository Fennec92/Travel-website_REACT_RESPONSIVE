import items from "./items";

const Meditation = () => {
    return (
        <div className="meditation-container">
            <video src="/videos/video_meditation.mp4" autoPlay loop muted />
            <h1>action</h1>
            <div className="items">
                {items &&
                    items.map((item) => {
                        if (item.itemTag === "meditation") {
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

export default Meditation;
