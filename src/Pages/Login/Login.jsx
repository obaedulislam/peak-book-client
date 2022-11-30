import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLogInCircle } from 'react-icons/bi';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { setGoogleToken } from '../../hooks/useGoogleToken';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleProviderLogin, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    //JWT Token Implementation
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);

    //After Login Navigation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email)
                setCreatedUserEmail(data.email);
            })
            .catch(error => {
                toast.error(loginError);
                setLoginError(error.message)
            })
    }

    //Save Registered User to DB
    const saveUserToDB = (name, email, url, role) => {
        const user = { name, email, url, role };
        fetch(`https://peakbook-server.vercel.app/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(user?.email)
            })
    }

    // Google Sign Up Login Form  Handler Function
    const handleGoogleSignUp = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully SignUp With Google");
                setGoogleToken(user);
                navigate('/');
                saveUserToDB(user.displayName, user.email, user.photoURL, 'Buyer');
            })
            .catch(error => {
                toast.error(error);
                console.error(error);
            })
    }

    return (
        <div className='max-w-[450px] mx-auto lg:py-20 md:py-12 py-10  lg:px-0 md:px-4 px-3'>
            <div className='shadow-lg  md:p-10 sm:p-5 p-3 rounded-lg border border-gray-200'>
                <h1 className='sm:text-4xl text-2xl text-primary font-bold text-center '>Login</h1>
                <div className='sm:mt-5 mt-3'>
                    <button onClick={handleGoogleSignUp} className='btn btn-outline border-gray-300 duration-300 hover:bg-accent w-full mt-3 flex items-center sm:text-lg text-sm text-accent font-semibold capitalize font-specially' type="submit"  ><FcGoogle className="md:text-3xl text-xl  "></FcGoogle><span className='ml-1'>Continue With Google</span></button>
                    <div className="divider sm:text-xl text-md font-bold text-secondary">OR</div>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className="md:mt-8 sm:mt-5 mt-3">

                    <div className="form-control w-full mx-auto ">
                        <input type="email" placeholder='Enter your email'
                            {...register("email", {
                                required: 'Email address is required!',
                            })}
                            className="input input-bordered w-full bg-gray-100"
                        />
                        {errors.email && <p className='text-red-600 font-semibold text-sm mt-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mx-auto mt-3">
                        <input type="password" placeholder='Enter your Password'
                            {...register("password", {
                                required: 'Password is required!',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full bg-gray-100"
                        />

                        {errors.password && <p className='text-red-600 font-semibold text-sm mt-2' role="alert">{errors.password?.message}</p>}
                        <label className="label mt-2">
                            <span className="label-text  font-semibold">Forget Password!</span>
                        </label>
                    </div>

                    <button className='btn sm:btn-md btn-sm bg-primary border-0 duration-300 hover:bg-accent w-full mt-2 flex items-center sm:text-xl text-md text-white font-semibold' type="submit"  ><BiLogInCircle className="md:text-3xl ms:text-xl text-lg uppercase "></BiLogInCircle><span className='ml-1'>Login</span></button>
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>

                <p className='text-center mt-3 sm:text-md text-sm'>New to Peak Book? <Link to='/signup' className='text-primary font-bold'>Create new account</Link></p>

            </div>
        </div>
    );
};

export default Login;