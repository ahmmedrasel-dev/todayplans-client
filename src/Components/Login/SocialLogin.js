import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocailLogin = () => {
  const [
    signInWithGoogle,
    googleUser,
    googleLoading,
    googleError
  ] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (googleError) {
      toast.error(googleError.message);
    }
  }, [googleError])


  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
      toast.success('User Login Successfully.');
    }
  }, [googleUser, from, navigate])

  if (googleUser) {
    navigate('/appoinment')
  }
  if (googleLoading) {
    return <Loading></Loading>
  }


  return (
    <button
      className="btn btn-outline"
      onClick={() => signInWithGoogle()}
    ><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
  );
};

export default SocailLogin;