import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom';

import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from '../firebaseConfig';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signin = (e) => {
        //todo
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log("success")
            }
            ).catch((error) => {
                console.log('{error}')

            })

    }

    const GoogleSignIN = () =>{
        const [gmail, setgmail] = useState('');

        signInWithPopup(auth,provider).then((data)=>{
            setgmail(data.user.email)
            localStorage.setItem('email', data.user.email).catch(
                console.log("error in poping")
            )

        })

        // useEffect(()=>{
        //     setgmail('email')
        //     console.log("set the gmail done")
        // })
    }


    return (
        <div className='h-screen flex  justify-center p-10'>
            <div className="auth-card">
                
                <h1 className='title text-lg content-center'>Login</h1>
                <form className='flex flex-col justify-around p-8'>

                    <div className='txt-field '>

                        <label htmlFor="email">email</label>
                        <input type={'email'} placeholder='Enter your name' value={email} onChange={(e) => setemail(e.target.value)} />




                    </div >

                    <div className='txt-field'>
                        <label htmlFor="password">password</label>

                        <input type={'password'} placeholder='Enter your password' value={password} onChange={(e) => setpassword(e.target.value)} />

                    </div>

                    <div className='flex justify-center'>
                        <button className="block pl-3 pr-4 ease-out duration-200  text-white rounded-lg text-lg py-1  bg-purple-700 border-4  hover:border-4 hover:border-purple-700 hover:bg-gray-900 " type='submit'>Log IN</button>

                    </div>

                  {/* Google button  */ }
                    <div className='btn ' onClick={GoogleSignIN} >
                        <button className='flex a justify-between '>
                        <i className="fab fa-google g-icon"></i>
                        <div>Sign-In with google</div>
                          
                        </button>
                    </div>

                    <div className='mt-4' >
                        <NavLink to={'/signup'} className = 'text-sm'> Don't have an account. Sign-Up</NavLink>

                    </div>


                </form>
            </div>
        </div>
    )
}

export default Login
