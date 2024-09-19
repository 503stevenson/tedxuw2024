import React from 'react'
import './FAQ.css'
import Question from '../Question/Question.js';
import { faq1, faq2, faq3 } from '../../assets/index.js';

const FAQ = () => {
  return (
    <div className="faq-content">
        <p className="title">
            FAQS
        </p>
        <div className='questions'>
            <Question question="Where and when is TEDxUW 2024 happening?" 
            answer="The TEDxUW 2024 conference will be happening on October 6, 2024 from 9AM - 5PM EST! The conference will be taking place at the University of Waterloo Theatre of the Arts.  Register to secure your spot today!"
            img={faq1} position="right" altText="TEDx speaker picture"/>
            <Question question="Will this year’s conference be in person or virtual?" 
            answer="This year’s conference will be in-person! The TEDxUW 2024 conference will be taking place at the University of Waterloo Theatre of the Arts. This is located at the University of Waterloo, Ring Rd, Waterloo, ON N2L 3G1."
            img={faq2} position="right" altText="TEDx group photo"/>
            <Question question="What’s the event breakdown of TEDxUW?" 
            answer="A TEDxUW conference is a local gathering where live TED-like presentations are shared with a community. These conferences consist of talks from outstanding speakers and performers, and also include fun activities the audience can engage in. The theme for TEDxUW 2024 is: In The Odd Chance. Through this year’s theme, we celebrate the courage of embracing what is uncomfortable strategically to meet challenges head-on and unlock our full potential."
            img={faq3} position="left" altText="picture of TEDx guest speaker mid speech"/>
            <Question question="How can I get more involved with TEDxUW" 
            answer="We love having new people join our TEDxUW family of change-makers and we have plenty of opportunities for you to get involved. You can be a part of the movement in many ways, such as:
Apply to be a speaker or nominate a potential speaker
Applying to join our core team
Being one of our powerhouse volunteers (our greatest pride!)
Be our lens to the world and cover our event as a media partner
Partner with us as an organization, club, or individual
Become a sponsor
If you want to get involved, email us at outreach@tedxuw.com and we can help you out!"/>
        </div>
    </div>
  )
}

export default FAQ;