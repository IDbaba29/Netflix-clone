import React from 'react'
import footerlinks from '../../footerlinks';
import Footercard from './Footercard';


function createFooterCard(footerlinks) {
    return (
        <Footercard
            key={footerlinks.id}
            linkText={footerlinks.linkText}
            link={footerlinks.link}
        />
    );
}

function Footer() {
    return (
        <div className='site-footer'>
            <p className='footer-top'>
                <a className='footer-top-a' href="https://help.netflix.com/contactus">Questions? Contact us.</a>
            </p>
            <ul className='footer-links structural'>

                {footerlinks.map(createFooterCard)}

            </ul>


            <p className='footer-country'>Netflix Nigeria</p>
        </div>
    )
}

export default Footer;