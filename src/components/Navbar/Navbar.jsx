import { PrimaryBtn } from "../Button/PrimaryBtn"
import { AiOutlineMenuUnfold, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
import { Tag } from "./Tag";
import { useNav } from './useNav'
import { Links } from "./Links";
import { Link } from "react-router-dom";
import { Message } from "../Button/Message";
const Navbar = () => {
    const nav_links = useNav()
    //  mobile nav bar
    const [nav, setnav] = useState(true);
    const toogleNav = () => {
        setnav(!nav)
    }

    // scroll bg change
    const [navBg, setnavBg] = useState(false);
    const handlenavBg = () => {
        if (window.scrollY >= 90) {
            setnavBg(true)
        }
        else {
            setnavBg(false)
        }
    }
    window.addEventListener("scroll", handlenavBg);

    return (
        <header class={`fixed top-0 left-0 right-0 z-10 bg-white text-gray-600 body-font w-full p-2 duration-200 ease-in-out ${navBg ? "shadow-md" : "shadow-0"}`}>
            <div class="container mx-auto flex p-2  md:flex-row items-center horizontal-container max-w-[1480px]">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Tag />
                </a>
                {/* Desktop menu */}
                <nav class="uppercase w-full hidden md:ml-4 md:pl-4 md:flex flex-wrap items-center justify-center text-base">
                    {nav_links.map(({ name, event }) => <Links name={name} extra_classes={"mr-5 hover:secondary-text cursor-pointer mt-2"} event={event} />)}
                    <div className="md:block ml-auto mt-2">
                        <Message/>
                    </div>
                </nav>

                {/* Mobile menu */}
                <div className="ml-auto md:hidden">
                    {
                        nav ?
                            <AiOutlineMenu size={28} onClick={toogleNav} /> :
                            <AiOutlineMenuUnfold size={28} onClick={toogleNav} />
                    }
                </div>
                <div className={!nav ?
                    "ease-out duration-300 shadow-lg fixed left-0 top-0 h-screen flex flex-col w-[60%] bg-white" :
                    "fixed top-0 left-[-100%] h-full w-[60%] bg-white  ease-in duration-300"}>

                    <a class="flex title-font font-medium items-center text-gray-900 m-4">
                        <Tag />
                    </a>
                    <ul className='uppercase'>
                        {nav_links.map(({ name, event }) => <Links name={name} extra_classes={"p-4 border-b border-gray-600 hover:bg-gray-100"} event={event} />)}
                        <div className="m-2">
                            <Message/>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar