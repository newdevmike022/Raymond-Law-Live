import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "../firebase/firebase";

const Contact = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const {name, email, subject, message} =  state;

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !subject || !message) {
            toast.error("Please provide a value in each input field.")
          } else {
            firebaseDB.child("contact").push(state);
            setState({ name: "", email: "", subject: "", message: "" });
            toast.success("Form submitted successfully!");
          }
    }

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    }

    return (
        <>
            <div className="contact" id="contact">
                <h1>
                    got legal questions or webcast topic ideas?<br/>
                    let us know what's on your mind!<br/>
                    <span>314.534.2800</span>
                </h1><br/>
                <p><span>mraymondattorney1@att.net</span><br/>Questions and comments are welcome.</p>
            </div>

            <ToastContainer position="top-center" />
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper">
                            <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group pb-3">
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="Name"
                                                onChange={handleInputChange}
                                                value={name}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group pb-3">
                                            <input 
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleInputChange}
                                                value={email}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group pb-3">
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="subject"
                                                placeholder="Subject"
                                                onChange={handleInputChange}
                                                value={subject}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                type="text"
                                                className="form-control"
                                                name="message"
                                                placeholder="Message"
                                                cols="30"
                                                rows="6"
                                                onChange={handleInputChange}
                                                value={message}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group text-center">
                                            <input type="submit" value="Send Message" className="btn btn-primary"/>
                                        </div>
                                    </div>
                                </div>      
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Contact;