import React from 'react'
import '../styles/SignIn.css'

const SignIn = () => {
  return (
    <div className='container'>
        <header className='head'>
            <h1>Fortewaves</h1>
            <img src='/images/Line 1.png'/>
        </header>
        <section>
        <div className='section-signin'>
            <h1>Sign in</h1>
            <div className='inputs-signin'>
                <div className='input-img-sign-in'>
                    <input placeholder='Email' type='email'/>
                    <img src='/images/mdi_email-edit-outline.png'/>
                </div>
                <div className='input-img-sign-in'>
                    <input placeholder='Password' type='password'/>
                    <img src='/images/carbon_password.png'/>
                </div>
            <button>Login</button>
            </div>
        </div>
        <div className='or' style={{fontSize: "18px", marginTop: "46px"}}><h3>OR</h3></div>
        <div className='section2-signin'>
            <button><img src='/images/flat-color-icons_google.png'/>Sign in with Google</button>
            <button><img src='/images/dashicons_facebook-alt.png'/>Sign in with Facebook</button>
            <button><img src='/images/akar-icons_github-fill.png'/>Sign in with GitHub</button>
        </div>
</section>
    </div>
  )
}

export default SignIn