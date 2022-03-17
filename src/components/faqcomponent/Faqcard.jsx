import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function Faqcard(props) {
    return (
        <div>
            <li className='faq-list-item dropdown'>


                <div className='but'>
                    <button className='faq-question dropbtn' > {props.question}
                        <AddIcon className='icons' fontSize="large" />
                    </button>
                </div>

                <div id="myDropdown" className='faq-answer dropdown-content'>
                    <span>
                        {props.answer1}
                        <br />
                        <br />
                        {props.answer2}

                    </span>
                </div>

            </li>
        </div>
    )
}

export default Faqcard;

