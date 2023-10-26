import React from 'react'
import '../CSS/LoginSignup.css'

function LoginSignup() {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div class="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Addresss"/>
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continues</button>
                <p className="loginsignup-login">Already Have An Account? <span>Login</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
