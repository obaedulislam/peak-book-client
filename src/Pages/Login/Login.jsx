import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLogInCircle } from 'react-icons/bi';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    //After Login Navigation
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
                toast.error(loginError);
            })
    }

    return (
        <div className='py-20 max-w-[450px] mx-auto'>
            <div className='shadow-lg  p-10 rounded-lg border border-gray-200'>
                <h1 className='text-4xl text-primary font-bold text-center '>Login</h1>
                <div className='mt-5'>
                    <button className='btn btn-outline border-gray-300 duration-300 hover:bg-accent w-full mt-3 flex items-center text-lg text-accent font-semibold capitalize font-specially' type="submit"  ><FcGoogle className="md:text-3xl text-xl  "></FcGoogle><span className='ml-1'>Continue With Google</span></button>
                    <div className="divider text-xl font-bold text-secondary">OR</div>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className="mt-8">

                    <div className="form-control w-full mx-auto ">
                        <input type="email" placeholder='Enter your email'
                            {...register("email", {
                                required: 'Email address is required!',
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className='text-red-600 font-semibold text-sm mt-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mx-auto mt-3">
                        <input type="password" placeholder='Enter your Password'
                            {...register("password", {
                                required: 'Password is required!',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full"
                        />

                        {errors.password && <p className='text-red-600 font-semibold text-sm mt-2' role="alert">{errors.password?.message}</p>}
                        <label className="label mt-2">
                            <span className="label-text  font-semibold">Forget Password!</span>
                        </label>
                    </div>

                    <button className='btn bg-primary border-0 duration-300 hover:bg-accent w-full mt-2 flex items-center text-xl text-white font-semibold' type="submit"  ><BiLogInCircle className="md:text-3xl text-xl uppercase "></BiLogInCircle><span className='ml-1'>Login</span></button>
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>

                <p className='text-center mt-3'>New to Peak Book? <Link to='/signup' className='text-primary font-bold'>Create new account</Link></p>

            </div>
        </div>
    );
};

export default Login;