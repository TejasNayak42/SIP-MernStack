import React from 'react'
import "./LoginCss.css"
function Form() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-info' id='bimg'>
        <div className='border border-3 border-alert p-3 bg-light'>
            <form>
                <h2 className='text-center'>Login</h2>
                <div>
                    <label htmlFor='Email' >Email</label>
                    <input
                        type='email'
                        placeholder='abcdef123@gmail.com'
                        name='Email'
                        className='form-control'
                    />
                </div>
                <div>
                <label htmlFor='Password' >Email</label>
                <input
                    type='password'
                    placeholder='Enter Your password'
                    name='Password'
                    className='form-control mb-2'
                />
                </div>
                <div>
                    <input type='checkbox'/>
                    <label htmlFor='checkbox' className='mb-3'>
                    Remember Your Password
                    </label>
                </div>
                 {/* <br/> */}
                 <div className='d-grid'>
                    <button className='btn btn-danger'>Login</button>
                 </div>
                
            </form>
        </div>
           
    </div>
  )
}

export default Form