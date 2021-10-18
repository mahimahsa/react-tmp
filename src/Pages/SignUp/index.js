import React, { useState } from "react";
import 'src/assets/css/style.css'
import { useDispatch } from 'react-redux'
import {signUpAction} from 'src/redux/action'


function SignUp() {

    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const dispatch = useDispatch();

    const call =async (request) => {
        dispatch(await signUpAction(request))
    }

    const handleSubmit = () => {
        let request = {
            firstName,
            lastName,
            email,
            mobileNumber,
        }
        
        call(request);
    }

    return (
        <>
            <div>
                <span>FirstName</span>
                <input className='input' type='text' onChange={e => setFirstName(e.target.value)} />
            </div>
            <div>
                <span>LastName</span>
                <input className='input' type='text' onChange={e => setLastName(e.target.value)} />
            </div>
            <div>
                <span>Email</span>
                <input className='input' type='email' onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <span>Mobile</span>
                <input className='input' type='number' onChange={e => setMobileNumber(e.target.value)} />
            </div>
            <div>
                <button type='submit' onClick={handleSubmit} > Click me !</button>
            </div>

        </>
    )
}

export default SignUp;