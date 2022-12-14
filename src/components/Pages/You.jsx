import "./PageStyle.css";
import items from "./items";

const You = () => {
    return (
        <div className="items-container">
            <video
                src="/videos/video_you.webm"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="items">
                {items &&
                    items.map((item) => {
                        if (item.itemTag === "you") {
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

export default You;
