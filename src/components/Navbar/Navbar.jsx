import React from 'react'

export const Navbar = () => {
    return (
        <header class="text-gray-600 body-font horizontal-container max-w-[1480px] w-full p-2">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <h2 className='text-3xl font-bold'>
                        adler
                    </h2>
                </a>
                <nav class="md:mr-auto md:ml-4 md:pl-4 flex flex-wrap items-center justify-center text-base">
                    <a class="mr-5 hover:text-[#989898] cursor-pointer">Services</a>
                    <a class="mr-5 hover:text-[#989898] cursor-pointer">Reviews</a>
                    <a class="mr-5 hover:text-[#989898] cursor-pointer">About Us</a>
                    <a class="mr-5 hover:text-[#989898] cursor-pointer">Contact Us</a>
                </nav>
                <button class="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Message</button>
            </div>
        </header>
    )
}
