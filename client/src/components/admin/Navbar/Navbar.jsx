const Navbar = () => {
    return (
        <div className="w-[18rem] bg-black">
            <div className="flex flex-col items-center w-full gap-4 mb-20 text-white">
                <button></button>
                <img width={70} height={50} src="/Union.svg" alt="logo" />
            </div>
            <div className="flex flex-col items-center w-full gap-4 mb-20 text-white">
                <button className="text-xl flex flex-row justify-start pl-4 items-center text-white rounded-md w-[13rem] h-[3rem] bg-text-dev-orange">
                    <div>New blog</div>
                </button>
                <button className="text-xl flex flex-row justify-start pl-4 items-center text-white rounded-md w-[13rem] h-[3rem] bg-text-dev-orange">New Event</button>
            </div>

            <div className="flex flex-col items-center w-full gap-4 mb-20 text-white">
                <button className="text-xl flex flex-row justify-start pl-4 items-center text-white rounded-md w-[13rem] h-[3rem] "> All posts</button>
                <button className="text-xl flex flex-row justify-start pl-4 items-center text-white rounded-md w-[13rem] h-[3rem] ">Manage blog</button>
                <button className="text-xl flex flex-row justify-start pl-4 items-center text-white rounded-md w-[13rem] h-[3rem] ">Manage events</button>
            </div>

            <div className="text-gray-400">
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Current Policy</p>
            </div>

            <button className="mx-auto text-xl flex flex-row justify-start pl-4 items-center text-text-dev-orange rounded-md w-[13rem] h-[3rem] bg-white">
                <div>Logout</div>
            </button>
        </div>
    )
}

export default Navbar