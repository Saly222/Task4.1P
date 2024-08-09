import React from "react"
import './Signup.css'


function Signup()
{
    return( <div class="content">
      <br></br>
          <h2 className="h2">SIGN UP FOR OUR DAILY INSIDER</h2>
            <input class = 'newForm' type="email" id="email" name="email" placeholder="Enter your email"/>
            <button class ='button' type="submit">Subscribe</button>
        </div>)
    
}
export default Signup;