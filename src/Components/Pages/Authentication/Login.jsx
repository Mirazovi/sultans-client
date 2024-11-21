import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const [open, setOpen] = useState(false);
    const [disable,setDisable] = useState(true)
    const captchaRef = useRef();

    const {signInUser} = useContext(AuthContext)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(from,{replace:true})
        })
        .catch(error =>{
            console.log(error);
        })
    }

const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
        setDisable(false)
    }
    else{
        setDisable(true)
    }
}
    return (
        
        <div className='h-[100vh] flex justify-between gap-12 items-center'>
            <Helmet>
            <title>sultans-dine | Login</title>
            </Helmet>
            {/* style={{backgroundImage: `url('${bgImg}')`}} */}
            <div className='flex-1'>
                <img src={loginImg} alt="" />
            </div>
            <div className='flex-1 '>
                <form onSubmit={handleSubmit} className='space-y-8'>
                    <h1 className="text-3xl py-2 text-center">Please Login</h1>

                    <input className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Please Enter Your Email" type="email" name="email" id="email" />
                    <br />

                    <div className='relative'>
                        <input className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Please Enter Your password" type={open ? "text" : "password"} name="password" id="pass" />
                        <div className='flex absolute top-5 right-4 text-2xl' onClick={() => setOpen(!open)}>
                            {
                                open ? <WeuiEyesOnFilled /> : <WeuiEyesOffFilled />
                            }
                        </div>
                        <br />
                    </div>
                    <div>
                        <LoadCanvasTemplate />
                        <input ref={captchaRef} className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Type the text captcha" type="text" name="captcha" id="" />
                        <button onClick={handleValidateCaptcha} className='text-xl py-1 rounded-lg bg-blue-700 w-full text-white'>Validate</button>
                    </div>
                    <button disabled={disable} className="py-2 disabled:bg-gray-300 px-6 rounded-lg bg-purple-700 text-xl text-white w-full my-2">login</button>
                </form>
                <p className='text-xl'>New here Please <Link to={'register'} className="text-purple-950 text-xl hover:underline font-bold my-2"> Register</Link></p>
            </div>
        </div>
    );
};

export function WeuiEyesOffFilled(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="m18.922 16.8l3.17 3.17l-1.06 1.061L4.06 4.061L5.12 3l2.74 2.738A11.9 11.9 0 0 1 12 5c4.808 0 8.972 2.848 11 7a12.66 12.66 0 0 1-4.078 4.8m-8.098-8.097l4.473 4.473a3.5 3.5 0 0 0-4.474-4.474zm5.317 9.56A11.9 11.9 0 0 1 12 19c-4.808 0-8.972-2.848-11-7a12.66 12.66 0 0 1 4.078-4.8l3.625 3.624a3.5 3.5 0 0 0 4.474 4.474l2.964 2.964z"></path></svg>
    )
}


export function WeuiEyesOnFilled(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M1 12c2.028-4.152 6.192-7 11-7s8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7m11 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></path></svg>
    )
}
export default Login;