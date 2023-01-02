import React from 'react'
import "../SignIn/SignIn.css"
import ad from'../../picture/ad.png'
function SignIn() {
    
  return (
<div className="Container">
    <div className="left">
        <div className="video">
            <div className="signincontainer">
                <div className="signin-header">
                <h1>sign in </h1>
                </div>
                <div className="felds">
                <input type="email" name="" id="email"  placeholder='Email'/>
                <input type="password" name="" id="password"  placeholder='Password'/>
                </div>
                <div className="sigin-button">
                <button>sign in </button>
                </div>
                <h3 className='activeted-status'>user activated successfuly. please sign in</h3>
                <a href='' className='create-account'>Create an account</a>
            </div>
        </div>
        <div className='ad'>
<img src={ad} alt="" />
        </div>
    </div>
    <div className="right">
        <div className='Chat'>Wating to partner </div>
\        <textarea name="" id="text-area-2" cols="30" rows="3" placeholder='say hello to partner'></textarea>
    </div>
</div>          

  )
}

export default SignIn