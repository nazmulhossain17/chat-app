import React from 'react';

const Register = () => {
    return (
        <>
            <div className="bg-gray-200 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input 
            type="text"
            className="block border border-gray-300 w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name" />

          <input 
            type="text"
            className="block border border-gray-300 w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" />

          <input 
            type="password"
            className="block border border-gray-300 w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password" />

    <input style={{display: 'none'}} type='file' id='file'/>
    <label htmlFor='file' class="mb-2 inline-block text-neutral-700">
        <span className='border border-green-500'>Add an Avatar</span>
    </label>
 
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-500 mt-4">
            By signing up, you agree to the{' '}
            <a className="no-underline border-b border-gray-500 text-gray-500" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="no-underline border-b border-gray-500 text-gray-500" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-gray-500 mt-6">
          Already have an account?{' '}
          <a className="no-underline border-b border-blue-500 text-blue-500" href="../login/">
            Log in
          </a>
          .
        </div>
      </div>
    </div>
        </>
    );
};

export default Register;