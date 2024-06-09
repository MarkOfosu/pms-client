import "../.././global.css"
import "../styles/BecomeMember.css"
import Footer from "../elements/footer";

const BecomeMember = () => {
    return (
        <>
            <header className="becomeMember section">
                <h1>Become a Member</h1>
                <p>Join us today and enjoy exclusive benefits and facilities.</p>
            </header>
            <div className="section section-light">
                <div className="content">
                    <section className="benefits">
                        <h2>Benefits of Membership</h2>
                        <ul>
                            <li>Access to all aquatic facilities</li>
                            <li>Discounts on swim lessons and programs</li>
                            <li>Free entry to special events</li>
                            <li>Priority booking for lanes and classes</li>
                            <li>Complimentary guest passes</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="section section-dark">
                <div className="content">
                    <section className="plans">
                        <h2>Membership Plans</h2>
                        <div className="plan">
                            <h3>Basic Plan</h3>
                            <p>Access to the pool during off-peak hours.</p>
                            <p>Price: $30/month</p>
                        </div>
                        <div className="plan">
                            <h3>Standard Plan</h3>
                            <p>Unlimited access to the pool and facilities.</p>
                            <p>Price: $50/month</p>
                        </div>
                        <div className="plan">
                            <h3>Premium Plan</h3>
                            <p>All Standard Plan benefits plus personal training sessions.</p>
                            <p>Price: $80/month</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="section section-light">
                <div className="content">
                    <section>
                        <h2>Ready to Join?</h2>
                        <p>Sign up now and start enjoying our facilities today!</p>
                        <a href="/sign-up" className="cta-button">Join Now</a>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BecomeMember;