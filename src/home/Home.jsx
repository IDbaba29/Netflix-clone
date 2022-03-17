import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./home.css"
import "../components/navbar/navbar.css"
import AddIcon from '@mui/icons-material/Add';
import Subform from '../components/Subform';
import Faqcard from '../components/faqcomponent/Faqcard';
import faqs from "../faqs"
import Footer from '../components/footer/Footer';


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function createFaqCard(faq) {
    return (
        <Faqcard
            key={faq.id}
            question={faq.question}
            answer1={faq.answer1}
            answer2={faq.answer2}

        />
    );
}



function Home() {
    return (
        <div className='home'>
            <section className='topsection'>
                <Navbar />

                <div className='topsectionH1'>

                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>

                    <form className='subscriptionForm'>

                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <input className='subscription' type="email" placeholder='Email address' />
                        <button type="button" class="btn-getstarted">Get Started &gt; </button>

                    </form>
                </div>
                <hr />

            </section>

            <section className='middlesection'>

                <div className='enjoytv-left'>
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>

                <div className='animation-container-right'>
                    <div id='animation-card-container'>
                        <div className='img-animation-container'>

                            <img alt='' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' data-uia="img-animation-container" />

                        </div>

                        <div className='tvanimationleft'>
                            <video class="platform-netflix-card-video animation-video" autoPlay playsinline muted loop>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                    type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

            </section>

            <section className='downloadsection'>
                <hr />
                <div className='download-section-container'>

                    <div className='story-card-img-container'>
                        <div className='story-card-animation'>
                            <img className='phoneimage' src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                            <div className='downloading-animation'>
                                <div className='downloading-animation-image'>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                                </div>
                                <div className='downloading-animation-text'>
                                    <div className='text-0'>Downloading....</div>
                                </div>
                                <div className='downloading-animation-gif'>
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='story-card-text'>
                        <h1 >Download your shows to watch offline.</h1>
                        <h2>Save your favorites easily and always have something to watch.</h2>

                    </div>
                </div>
                <hr />
            </section>



            <section id='watchEveryWhere'>

                <div className='watcheverywhere-story-card-text'>
                    <h1 >Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>

                </div>
                <hr />
            </section>

            <section className='forkids'>

                <div className='download-section-container'>

                    <div className='kids-story-card-img-container'>
                        <div className='story-card-animation'>
                            <img className='kidsimage' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" alt="" />

                        </div>
                    </div>

                    <div className='kids-story-card-text'>
                        <h1>Create profiles for kids.</h1>
                        <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>

                    </div>
                </div>
                <hr />
            </section>

            <section id='faq'>
                <div className='faq-story-card-text faq-card'>
                    <h1 className='faq-story-card-title'>Frequently Asked Questions</h1>

                    <ul className='faq-list'>
                        {faqs.map(createFaqCard)}
                        
                    </ul>
                    <div className="faq-bottom-form">
                        <Subform />
                    </div>

                </div>

            </section>
            <hr />
            <section className="footer footer-card">

                <div className='site-footer-wrapper' style={{ position: "relative" }}>

                    <Footer />

                </div>
            </section>
        </div>
    )
}


export default Home;