import React from 'react';
import Card from './Card';

const Product = () => {
    return (
        <section className='bg-gradient-to-tr from-stone-900 to-purple-900 py-20'>
        <div className='text-center font-Poppins text-6xl py-24 text-cyan-50'>Products</div>

        <div className='grid sm:grid-cols-4 justify-center px-14 gap-12'>

           <Card/>
           <Card/>
           <Card/>
           <div className='flex items-center justify-center text-white text-3xl border border-slate-500'>
            <a className='hover:text-purple-600 inline-flex items-center' href="#">More<svg class="w-5 h-5 ml-2 -mr-1 "  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
           </div>
        </div>
        </section>
    )

}

export default Product