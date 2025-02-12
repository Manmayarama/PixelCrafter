import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Login'); // Controls login/signup state
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext); 

    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission for login or signup
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Login') {
              
                const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password });

                if (data.success) {
                    localStorage.setItem('token', data.token);
                    setToken(data.token);
                    setUser(data.user);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });

                if (data.success) { 
                    localStorage.setItem('token', data.token);
                    setToken(data.token);
                    setUser(data.user);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);
        }
    };

    // Disable scroll while login form is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <motion.form 
                className='relative bg-white p-10 rounded-xl text-slate-500' 
                initial={{ opacity: 0.2, y: 50 }} 
                transition={{ duration: 0.3 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                onSubmit={onSubmitHandler} // Ensure form submission works
            >
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-sm text-center'>
                    {state === 'Login' ? 'Welcome Back! Please sign in to continue' : 'Get started! Create your account now'}
                </p>

                {state !== 'Login' && (
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                        <img src={assets.profile_icon} alt="" width={25} />
                        <input 
                            className='outline-none text-sm' 
                            type="text" 
                            placeholder='Full Name' 
                            onChange={e => setName(e.target.value)} 
                            value={name} 
                            required 
                        />
                    </div>
                )}

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.email_icon} alt="" />
                    <input 
                        className='outline-none text-sm' 
                        type="email" 
                        placeholder='Email' 
                        onChange={e => setEmail(e.target.value)} 
                        value={email} 
                        required 
                    />
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.lock_icon} alt=""/>
                    <input 
                        className='outline-none text-sm' 
                        type="password" 
                        placeholder='Password' 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} 
                        required 
                    />
                </div>

                <p className='text-sm text-primary my-4 cursor-pointer'>
                    {state === 'Login' ? 'Forgot password?' : ''}
                </p>

                {/* Ensure this button is a proper submit button */}
                <button type="submit" className='bg-primary w-full text-white py-2 rounded-full'>
                    {state === 'Login' ? 'Login' : 'Create Account'}
                </button>

                {state === 'Login' ? (
                    <p className='mt-5 text-center'>
                        Don't have an account?
                        <span className='text-primary cursor-pointer' onClick={() => setState('Sign Up')}> Sign Up</span>
                    </p>
                ) : (
                    <p className='mt-5 text-center'>
                        Already have an account?
                        <span className='text-primary cursor-pointer' onClick={() => setState('Login')}> Login</span>
                    </p>
                )}

                {/* Close button */}
                <img 
                    onClick={() => setShowLogin(false)} 
                    src={assets.cross_icon} 
                    alt="" 
                    className='absolute top-5 right-5 cursor-pointer' 
                />
            </motion.form>
        </div>
    );
};

export default Login;
