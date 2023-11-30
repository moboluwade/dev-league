import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const [email, setEmail] = useState('')
  return (
    <footer className='bg-black text-white w-full' >
        <div className='px-14 py-10'>
            <div className='flex flex-row justify-between'>
                <div className='pb-5'>
                    <h1 className='text-2xl text font-semibold '>
                        Join our mailing list
                    </h1>
                    <p className='pt-2'>
                        Stay up to date with the latest news, announcements, and articles.
                    </p>
                    <div className='py-5 underline flex gap-6'>
                        <a href="#">Events</a>
                        <a href="#">Features</a>
                        <a href="#">Career</a>
                        <a href="#">Help</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
                <form action="" className='flex flex-row relative md:visible w-2/5 '>
                   <input
                        className="w-full focus:outline-none focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 h-16 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base placeholder:text-xl"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Enter your email"
                        type="email"
                    />
                    <button className='absolute right-[0.5rem] top-[0.5rem] flex flex-col justify-center text-center w-30 h-12 bg-text-dev-orange font-semibold text-base py-4 px-5 rounded-[2rem]'>Get started now</button>
                   </form>
            </div>
            <hr  className='w-100% opacity-60'/>
            <div className='py-4 flex flex-row justify-between'>
                <div>
                    <p>© 2023 Dev League. All rights resrved</p>
                </div>
                <div className='flex flex-row text-text-dev-orange gap-6'>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaGithub /></a>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
