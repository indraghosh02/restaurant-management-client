import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
    const navigate = useNavigate()
    const {  createUser, updateUserProfile, user, setUser,logOut } = useContext(AuthContext);
    const isPasswordValid = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasMinLength = password.length >= 6;
    
        return hasUpperCase && hasLowerCase && hasMinLength;
      };


    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const pass = form.password.value
        console.log({ email, pass, name, photo })
        if (!isPasswordValid(pass)) {
            toast.error(
              "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
          }
        try {
          //2. User Registration
          const result = await createUser(email, pass)
          console.log(result)
          
          await updateUserProfile(name, photo)
          setUser({ ...user, photoURL: photo, displayName: name })
          logOut()
          navigate('/')
        //   logOut()
          toast.success('Signup Successful')
        } catch (err) {
          console.log(err)
          toast.error(err?.message)
        }
      }
    return (
       <div>
          <Helmet>
          
          <title>Dish & dine | Register </title>
        </Helmet>
         <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/9n6NWYW/Dish-Dine.png')",
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-14 sm:h-8 font-bold"
              src="https://i.ibb.co/cxxTQNn/Dish-Dine-1-1.png"
              alt="Company logo"
            />
          </div>

          <p className="mt-3 text-3xl font-extrabold text-center text-yellow-400 dark:text-gray-200">
            Sign Up!
          </p>

       <form onSubmit={handleSignUp} >
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-yellow-400 '
                htmlFor='name'
              >
                Name
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                placeholder="Enter your Name"
                required 
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-yellow-400 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                placeholder="Enter your photo url"
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-yellow-400 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
                placeholder="Enter your email"
                required 
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-yellow-400'
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
                placeholder="Enter your password"
                required 
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>
          
        
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-center text-white  dark:text-gray-400 hover:underline"
            >
              New here? plz <Link to='/login' className="text-yellow-400 font-bold ">Log in</Link>
            </a>
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          </div>
        </div>
        
      </div>
    </div>
       </div>
    );
};

export default Register;