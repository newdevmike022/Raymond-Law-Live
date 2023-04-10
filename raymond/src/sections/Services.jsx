import { FaGavel } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Services = () => {
    return (
        <>
            <section className="service" id="services">
                <div className="SectionHeading">
                    <h1>services</h1>
                </div>
        
                <div className="offer">
                    <h3>We Offer The Following Legal Services:</h3>
                </div>
                <div className="row row-cols-1 row-cols-md-2 mt-5">
                    <div className="col mb-4">
                        <div className="card h-100 legalBack">
                            <h1 className="legal"><FaGavel/></h1>
                            <ul>
                                <li><BsFillPatchCheckFill/> Descrimination</li>
                                <li><BsFillPatchCheckFill/> Probate</li>
                                <li><BsFillPatchCheckFill/> Wills And Trusts</li>
                                <li><BsFillPatchCheckFill/> Power Of Attorney</li>
                                <li><BsFillPatchCheckFill/> Child Support</li>
                                <li><BsFillPatchCheckFill/> Divorces</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100 legalBack">
                            <h1 className="legal"><GoLaw/></h1>
                            <ul>
                                <li><BsFillPatchCheckFill/> Insurance Claims</li>
                                <li><BsFillPatchCheckFill/> Contracts</li>
                                <li><BsFillPatchCheckFill/> Landlord/Tenant</li>
                                <li><BsFillPatchCheckFill/> Real Estate</li>
                                <li><BsFillPatchCheckFill/> Traffic</li>
                                <li><BsFillPatchCheckFill/> Free 30 Min. Legal Consultations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
        </>
    )
}

export default Services;