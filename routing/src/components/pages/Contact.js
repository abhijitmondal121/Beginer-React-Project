import React from 'react'
import c1 from '../images/c3.webp';
 
const Contact = () => {
  return (
    <>
    <div className='container form-signin w-100 m-auto text-center px-4 py-5 mt-5 text-center'>
     <div className='row my-3'>
     <div className='col md-5 px-5'>
    <img src={c1}  style={{height:"30rem",width:"40rem"}}/>

     </div>
     

     <div className='col md-6'>
     
      <main className=" ">
      <form>
      
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating py-5">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
      </main>
      </div>

</div>
</div>
</>
  )
}
 
export default Contact