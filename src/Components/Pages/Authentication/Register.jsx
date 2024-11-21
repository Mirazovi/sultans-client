import { useContext, useState } from "react";
import registerImg from '../../../assets/others/authentication.gif'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Social from "../../Shared/Social";

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        console.log('update user successfully');
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(() => {
                                Swal.fire({
                                    title: "SignUp User Successfully",
                                    showClass: {
                                        popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                                    },
                                    hideClass: {
                                        popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                                    }
                                });
                                reset();
                                navigate('/')
                            })

                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    const [open, setOpen] = useState(false);
    return (
        <div className='h-[100vh] flex justify-between gap-12 items-center'>
            <Helmet>
                <title>sultans-dine | Register</title>
            </Helmet>
            {/* style={{backgroundImage: `url('${bgImg}')`}} */}
            <div className='flex-1'>
                <img src={registerImg} alt="" />
            </div>
            <div className='flex-1 '>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                    <h1 className="text-3xl py-2 text-center">Please Register</h1>

                    <input className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Please Enter Your Name" type="text" {...register("name", { required: true })} id="name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                    <br />
                    <input className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Please Enter PhotoURL" type="text" {...register("photoURL", { required: true })} id="photoURL" />
                    {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
                    <br />

                    <input className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Please Enter Your Email" type="email" {...register("email", { required: true })} id="email" />
                    {errors.email && <span className="text-red-600">Name is required</span>}
                    <br />

                    <div className='relative'>
                        <input className="text-xl py-2 rounded-lg bg-gray-300 w-full my-2 px-4" placeholder="Please Enter Your password" type={open ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} id="pass" />
                        <div className='flex absolute top-5 right-4 text-2xl' onClick={() => setOpen(!open)}>
                            {
                                open ? <WeuiEyesOnFilled /> : <WeuiEyesOffFilled />
                            }
                        </div>
                        {errors.password?.type === 'required' && <span className="text-red-600 text-xl">password is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-600 text-xl">Password at lest 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className="text-red-600 text-xl">Password Must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600 text-xl">Password Must be at least one uppercase one lowercase one digit and one special character</span>}
                        <br />
                    </div>
                    <button className="py-2 disabled:bg-gray-300 px-6 rounded-lg bg-purple-700 text-xl text-white w-full my-2">Register</button>
                </form>
                <p className='text-xl'>Already have an account Please <Link to={'login'} className="text-purple-950 text-xl hover:underline font-bold my-2"> login</Link></p>
                <Social></Social>
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
export default Register;