import raymond from "../images/RaymondPic.png";

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="SectionHeading">
                    <h1>about</h1>
                </div>
                <div className="ImageContainer">
                    <img className="Image" src={raymond} alt="Melvin Raymond"/>
                </div>
                <div className="aboutContent">
                    <p>
                        Join <strong>Attorney Melvin L. Raymond</strong> on his new show, <strong>Raymond Law Live</strong>, where he covers issues like child support, job discrimination, divorce, and more.
                    </p>
                    <p>
                        Raymond Law Live is an online broadcast where the seasoned attorney at law, Melvin Raymond, answers questions and comments from a live audience, those mailed in and those sent via social networking mediums, while also covering cases currently trending in today’s media. It is the culmination of Melvin's desire to ensure as many people as possible have access to quality legal input as their starting point to a successful defense.
                    </p>
                    <p>
                        With years of practicing law successfully behind him, counselor Raymond is known as a highly respected attorney. He is a knowledgeable and trusted resource for employee rights, estate planning, personal injury, law enforcement issues, and much more. Below is a brief look at just who Melvin Raymond is:
                    </p>
                    <p>
                        Melvin started his law career in 1977 after he graduated Cum Laude from the prestigious University of Cornell. Later, after becoming an assistant prosecuting attorney, Melvin became a field attorney for the National Relations Board. At the NRB, he added to his skill set by handling job discrimination complaints as an investigator with Human Resources Select Services (HRSS). After which, he went into private practice with Wilson & Associates until 2009.
                    </p>
                    <p>
                        Melvin has argued cases before the Missouri Supreme Court, The Missouri Court of Appeals, the US Court of Appeals, and many others. He has practiced employment law with the Equal Employment Opportunity Commission (EEOC), the Department of Labor, and the Office of Federal Contract Compliance Programs (OFCCP).
                    </p>
                    <p>
                        Melvin has had extensive and diverse legal practice. He represents clients in probate matters, homeowners needing insurance companies to pay for property damage, and affirmative action cases. All of this has prepared him to give trusted answers that get results.
                    </p>
                    <p>
                        When asked why he takes on some cases that other attorneys turn down due to a client’s inability to pay a great deal for his services, Melvin expressed, “I have made it my priority to make high-quality legal representation accessible to all. I offer reasonable arrangements for paying fees so that justice is never beyond the reach of working individuals.”
                    </p>
                </div>
            </section>
            <hr/>
        </>
    )
}

export default About;