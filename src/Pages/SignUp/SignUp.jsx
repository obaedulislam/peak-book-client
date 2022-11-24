import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaSignOutAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { createUser, updateUser, googleProviderLogin, loading, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [signUpError, setSignUpError] = useState();
    const navigate = useNavigate();

    //Image Host Key
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    //JWT Token Implementation
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }


    //console.log(slot, name, phone, email);

    const handleSignUp = (data, event) => {
        event.preventDefault();
        console.log(data);
        // add image to imageBB
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        console.log(url);
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                console.log(imgData);
                if (imgData.success) {
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            toast.success(`You have successfully created your account, ${data.name}`)

                            //Update user  profile
                            updateUser(data.name, imgData.data.url)
                                .then(() => {
                                    saveUserToDB(user.displayName, user.email, imgData.data.url, data.role)

                                })
                                .catch(err => toast.error(err));

                        })
                        .catch(err => {
                            toast.success(err.code);
                            setLoading(false);
                        })
                }
            })
    }

    //Save Registered User to DB
    const saveUserToDB = (name, email, url, role) => {
        const user = { name, email, url, role };
        fetch(`http://localhost:4500/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data);
                setCreatedUserEmail(email);
            })
    }


    // Google Sign Up Login Form  Handler Function
    const handleGoogleSignUp = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully SignUp With Google");
                navigate('/');
            })
            .catch(error => {
                toast.error(error);
                console.error(error);
            })
    }


    return (
        <div className='py-20 ' >
            <div>
                <div className='shadow-lg  p-10 bg-white  rounded-lg border max-w-[450px] mx-auto border-gray-200'>
                    <h1 className='text-4xl text-primary font-bold text-center '>Sign Up</h1>
                    <div className='mt-5'>
                        <button onClick={handleGoogleSignUp} className='btn btn-outline border-gray-300 duration-300 hover:bg-accent w-full mt-3 flex items-center text-lg text-accent font-semibold capitalize font-specially' type="submit"  ><FcGoogle className="md:text-3xl text-xl  "></FcGoogle><span className='ml-1'>Sign Up With Google</span></button>
                        <div className="divider text-xl font-bold text-secondary">OR</div>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)} className="mt-8">
                        <div className="form-control w-full mx-auto ">
                            <input {...register("name", {
                                required: "Name is Required"
                            })} type="text" className="input input-bordered w-full bg-gray-100"
                                placeholder='Your name'
                            />
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control w-full mx-auto mt-3 ">
                            <input type="email"{...register("email", {
                                required: 'Email is required',
                            })} className="input input-bordered w-full bg-gray-100"
                                placeholder='Your email'
                            />
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        </div>

                        <div className="form-control w-full mx-auto mt-3">
                            <input type="password"
                                {...register("password", {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be 6 character or long' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Must Uppercase, Special Character & a Number " }

                                })} className="input input-bordered w-full bg-gray-100"
                                placeholder='Your password'
                            />
                            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Specialty</span>
                            </label>
                            <select className="select select-bordered w-full" name="role" {...register("role")}>
                                <option>Seller</option>)
                                <option>Buyer</option>)
                            </select>
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text font-semibold">Upload Profile Photo</span>
                            </label>
                            <input {...register("image", {
                                required: "Photo is Required"
                            })} type="file" name="image" className="input w-full" />
                            {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                        </div>


                        <button className='btn bg-primary border-0 duration-300 hover:bg-accent w-full mt-2 flex items-center text-xl text-white font-semibold' type="submit"  ><FaSignOutAlt className="md:text-2xl text-xl uppercase "></FaSignOutAlt><span className='ml-1'>Sign Up</span></button>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>

                    <p className=' text-center mt-3'>Already have an account? <Link to='/login'
                        className='text-primary font-bold'>Login Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;