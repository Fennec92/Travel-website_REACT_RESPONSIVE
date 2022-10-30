import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video_main.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className="button-container">
                <button className="button button-main" type="button">
                    GET STARTED
                </button>
                <button className="button button-outline" type="button">
                    WATCH <i className="fa-regular fa-circle-play" /> TRAILOR
                </button>
            </div>
        </div>
    );
};

export default Hero;
