import React from 'react'
import '../styles/SignUp.css'

const SignUp = () => {
  return (
    <div className='container'>
        <header className='head'>
            <h1>Fortewaves</h1>
            <img src='/images/Line 1.png'/>
        </header>
        <section>
            <div className='section1'>
                <h1>Signup</h1>
                <div className='inputs'>
                    <div className='input-img'>
                        <input  placeholder='Name' type='name'/>
                        <img src='/images/ic_baseline-drive-file-rename-outline.png'/>
                    </div>
                    <div className='input-img'>
                        <input placeholder='Email' type='email'/>
                        <img src='/images/mdi_email-edit-outline.png'/>
                    </div>
                    <div className='input-img'>
                        <input placeholder='Password' type='password'/>
                        <img src='/images/carbon_password.png'/>
                    </div>
                    <div className='span' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <input type='checkbox' style={{width: '5%'}}/><span style={{marginBottom: '-30px', marginLeft:"3px"}}>I agree to the terms of service</span>
                    </div>
                    <button>Signup</button>
                </div>
            </div>
            <div className='or'><h3>OR</h3></div>
            <div className='section2'>
                <button><img src='/images/flat-color-icons_google.png'/>Sign in with Google</button>
                <button><img src='/images/dashicons_facebook-alt.png'/>Sign in with Facebook</button>
                <button><img src='/images/akar-icons_github-fill.png'/>Sign in with GitHub</button>
            </div>
        </section>
    </div>
  )
}

export default SignUp