import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocailLogin from './SocialLogin';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate()


  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();


  useEffect(() => {
    if (signUpError) {
      toast.error(signUpError.message);
    }
  }, [signUpError])


  if (signUpLoading) {
    return <Loading></Loading>
  }

  if (signUpUser) {
    navigate('/')
  }

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password, data.name)

  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">Signup</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is Required!'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: 'Invalid Email!'
                  },
                  required: {
                    value: true,
                    message: 'Email is Required!'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                autoComplete='off'
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: 'At least 8 characters!'
                  },
                  required: {
                    value: true,
                    message: 'Password is Required!'
                  }
                })}
              />
              <label className="label">
                <Link className="label-text" to='reset-password'>Forgot Password?</Link>
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-accent uppercase w-full"
              value="Signup"
            />

          </form>
          <span
            className='text-center label-text'>Already have account? <Link
              to="/login"
              className='text-primary'
            >Login</Link></span>

          <div className="divider">OR</div>
          <SocailLogin></SocailLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;