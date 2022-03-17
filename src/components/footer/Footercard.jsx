import React from 'react'

function Footercard(props) {
    return (


        <li className='footer-link-item'>
            <a className='footer-link' href={props.link}>{props.linkText}</a>
        </li>


    )
}

export default Footercard;