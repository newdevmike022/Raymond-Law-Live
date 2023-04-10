const today = new Date();

const Footer = () => {
    return (
        <>
        <div className="footer">
            <nav className="footerNav">
                <a href="#about">About</a>
                <a href="#webcasts">Webcasts</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav><br/>
            <div className="date">
                &copy; Raymond Law Live
                <span> {today.getFullYear()} </span>
                &#160;-&#160; All Rights Reserved
            </div>
            <div className="design">
                <h4>Web Design & Development&#160; -&#160; <span><a href="#">themikedodson.com</a></span></h4>
            </div>
        </div>
        </>
    )
}

export default Footer;