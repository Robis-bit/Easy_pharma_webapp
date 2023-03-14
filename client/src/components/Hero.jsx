import React from 'react'
import { Link } from 'react-router-dom'
import Pharma from '../assets/Pharmherosec.svg'

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-fuchsia-800 to-purple-900">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row-reverse lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hover:animate-pulse">
			<img src={Pharma} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-slate-200 text-5xl font-bold leading-none sm:text-6xl">Easy Pharma make
				<span className="text-violet-400">&nbsp;Life</span>&nbsp;easy.
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-white">Dictum aliquam porta in condimentum ac integer
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-600 hover:bg-violet-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1 "  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <Link to='/Contact' class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-slate-800">
                Speak to Sales
            </Link>
			</div>
		</div>
	</div>
</section>
    )
}

export default Hero