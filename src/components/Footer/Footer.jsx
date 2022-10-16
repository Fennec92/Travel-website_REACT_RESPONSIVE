import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="newsletter-container">
                <h3>Join our newsletter to receive new adventures</h3>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Join</button>
                </form>
            </div>
            <div className="information-container">
                <div>
                    <h3>About</h3>
                    <a href="#">How it works</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Careers</a>
                    <a href="#">Investors</a>
                    <a href="#">FAQ</a>
                </div>
                <div>
                    <h3>Contact us</h3>
                    <a href="#">Contact</a>
                    <a href="#">Support</a>
                    <a href="#">Destinations</a>
                    <a href="#">Sponsors</a>
                    <a href="#">Influencers</a>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Youtube</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
