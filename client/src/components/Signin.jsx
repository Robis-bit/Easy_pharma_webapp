import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='flex justify-center items-center h-full my-20'>
            <div className='flex items-center justify-center mb-5 w-full '>
                <div class="w-full max-w-sm p-2 rounded-xl sm:p-6 md:p-8 mt-12 hover:shadow-[-15px_25px_40px_10px_#1A0623] hover:scale-105 transition ease-in-out">
                    <form class="space-y-6 " action="#">
                        <h5 class="text-center text-4xl font-Poppins text-gray-200 ">Sign in </h5>
                        <p className='block mb-2 text-xs font-medium text-center text-gray-200'>Sign in to continue.</p>

                        <div class="relative">
                            <input type="email" id="default_outlined" class="block px-4 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-full border border-gray-400    appearance-none text-white  focus:border-purple-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label for="default_outlined" class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1e0729] px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your Email</label>
                        </div>


                        <div class="relative">
                            <input type="password" id="default_outlined_1" class="block px-4 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-full border border-gray-400 appearance-none text-white focus:border-purple-600 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label for="default_outlined_1" class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#1b0726] px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Your Password</label>
                        </div>

                        <div class="flex items-start">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 dark:bg-gray-700 dark:border-gray-600 focus:ring-purple-600 ring-offset-gray-800 focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ml-2 text-sm font-medium text-gray-300">Remember me</label>
                            </div>
                            <a href="#" class="ml-auto text-sm text-purple-400 hover:underline ">Lost Password?</a>
                        </div>
                        <button type="submit" class=" text-white bg-purple-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit">Login</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to='/Signup' class="text-purple-400 hover:underline ">Create account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signin