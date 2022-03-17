import React from 'react'

function Subform() {
    return (
        <div>
            <form className='subscriptionForm'>

                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <input className='subscription' type="email" placeholder='Email address' />
                <button type="button" class="btn-getstarted">Get Started &gt; </button>

            </form>
        </div>
    )
}

export default Subform;