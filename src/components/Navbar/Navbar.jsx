import { PrimaryBtn } from "../Button/PrimaryBtn"
import { AiOutlineMenuUnfold , AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"
export const Navbar = () => {
    //  mobile nav bar
    const [nav, setnav] = useState(true);
    const toogleNav = ()=>{
        setnav(!nav)
    }

    // scroll bg change
    const [navBg, setnavBg] = useState(false);
    const handlenavBg = ()=>{
        if(window.scrollY>=90){
            setnavBg(true)
        }
        else{
            setnavBg(false)
        }
    }
    window.addEventListener("scroll",handlenavBg);

    return (
        <header class={`fixed top-0 left-0 right-0 z-10 bg-white text-gray-600 body-font w-full p-2 duration-200 ease-in-out ${navBg?"shadow-md":"shadow-0"}`}>
            <div class="container mx-auto flex p-2  md:flex-row items-center horizontal-container max-w-[1480px]">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <h2 className='text-3xl font-bold'>
                        adler
                    </h2>
                </a>
                {/* Desktop menu */}
                <nav class="uppercase w-full hidden md:ml-4 md:pl-4 md:flex flex-wrap items-center justify-center text-base">
                    <a class="mr-5 hover:secondary-text cursor-pointer mt-2">Services</a>
                    <a class="mr-5 hover:secondary-text cursor-pointer mt-2">Reviews</a>
                    <a class="mr-5 hover:secondary-text cursor-pointer mt-2">About Us</a>
                    <a class="mr-5 hover:secondary-text cursor-pointer mt-2">Contact Us</a>
                    <div className="md:block ml-auto mt-2">
                        <PrimaryBtn text={"Message"} />
                    </div>
                </nav>

                {/* Mobile menu */}
                <div className="ml-auto md:hidden">
                    {
                        nav?
                        <AiOutlineMenu size={28} onClick={toogleNav}/>:
                        <AiOutlineMenuUnfold size={28} onClick={toogleNav}/>
                    }
                </div>
                <div className={!nav?
                                "ease-out duration-300 shadow-lg fixed left-0 top-0 h-screen flex flex-col w-[60%] bg-white":
                                "fixed top-0 left-[-100%] h-full w-[60%] bg-white  ease-in duration-300"}>

                    <a class="flex title-font font-medium items-center text-gray-900 m-4">
                        <h2 className='text-4xl font-bold'>
                            adler
                        </h2>
                    </a>
                    <ul className='uppercase'>
                        <li className='p-4 border-b border-gray-600 hover:bg-gray-100'>Home</li>
                        <li className='p-4 border-b border-gray-600 hover:bg-gray-100'>Services</li>
                        <li className='p-4 border-b border-gray-600 hover:bg-gray-100'>Review</li>
                        <li className='p-4 border-b border-gray-600 hover:bg-gray-100'>About</li>
                        <div className="m-2">
                            <PrimaryBtn text={"Message"} />
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}
