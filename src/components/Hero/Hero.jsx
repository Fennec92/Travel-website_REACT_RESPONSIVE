import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <video
                src="/videos/video_main.webm"
                autoPlay
                loop
                muted
                playsInline
                poster="images/poster/poster_main.jpg"
            />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className="button-container">
                <button className="button button-main" type="button">
                    <a href="#card">GET STARTED</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;
