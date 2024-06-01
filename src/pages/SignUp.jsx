import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {auth, provider} from '../firebaseConfig';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpass, setconfirmpassword] = useState('');

    const signUp= (e) => {
        //todo
        e.preventDefault();
        if(password == confirmpass){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log("success")
            }
            ).catch((error) => {
                console.log('{error}')

            })
        }

    }


    return (
        <div className='h-screen flex  justify-center p-10'>
            <div className="auth-card">
                
                <h1 className='title text-lg content-center'>Sign-Up</h1>
                <form onSubmit={signUp} className='flex flex-col justify-around p-8'>

                    <div className='txt-field '>

                        <label htmlFor="email">email</label>
                        <input type={'email'} placeholder='Enter your email' value={email} onChange={(e) => setemail(e.target.value)} />

                    </div >

                    <div className='txt-field'>
                        <label htmlFor="password">password</label>

                        <input type={'password'} placeholder='Enter your password' value={password} onChange={(e) => setpassword(e.target.value)} />

                    </div>

                    <div className='txt-field'>
                        <label htmlFor="password">confirm password</label>

                        <input type={'password'} placeholder='Enter your password again' value={password} onChange={(e) => setpassword(e.target.value)} />

                    </div> 
                    <div className='txt-field'>
                        <label htmlFor="College">College Name</label>

                        <input  placeholder='Enter your college name' />

                    </div>

                    <div className='flex justify-center'>
                        <button className="block pl-3 pr-4 ease-out duration-200  text-white rounded-lg text-lg py-1  bg-purple-700 border-4  hover:border-4 hover:border-purple-700 hover:bg-gray-900 " type='submit'>Sign-Up</button>

                    </div>

                    <div className='mt-4' >
                        <NavLink to={'/login'} className = 'text-sm'> Already have an account? Log-IN instead.</NavLink>

                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login
