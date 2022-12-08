import React from 'react'
const SignUp = () => {


    return (
        <>
          <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
            <form action="http://google.com" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Password" />
                </div>
                <input type="submit" className="btn" defaultValue="Sign up" />
                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                    <a href="http://google.com" className="social-icon">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="http://google.com" className="social-icon">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="http://google.com" className="social-icon">
                        <i className="fab fa-google" />
                    </a>
                    <a href="http://google.com" className="social-icon">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </form>
            </div>
            </div>
            </div>

           
        </>
    )
}

export default SignUp