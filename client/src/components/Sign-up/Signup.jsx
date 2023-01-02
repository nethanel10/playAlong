import React from 'react'
import ad from'../../picture/ad.png'
import "../Sign-up/Sign-up.css"
function Signup() {
  return (
    <div className="Container">
    <div className="left">
        <div className="video">
            <div className="signincontainer">
                <div className="signin-header">
                <h1>sign up </h1>
                </div>
                <div className="felds">
                <input type="email" name="" id="email"  placeholder='Email'/>
                <input type="username" name="" id="email"  placeholder='Username'/>

                <input type="password" name="" id="password"  placeholder='Password'/>
                </div>
                <div className="sigin-button">
                <button>sign up </button>
                </div>
                <h3 className='activeted-status'>An activation mail sent to your email</h3>
                <span className='have-account'> Already have an account ?<a href='' className='sign-in-link'>sign in</a> </span>
            </div>
        </div>
        <div className='ad'>
<img src={ad} alt="" />
        </div>
    </div>
    <div className="right">
        <textarea name="" id="text-area-1" cols="30" rows="10" placeholder='Wating to partner'></textarea>
        <textarea name="" id="text-area-2" cols="30" rows="3" placeholder='say hello to partner'></textarea>
    </div>
</div>          


    
  )
}

export default Signup