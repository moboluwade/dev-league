
const Profile = () => {
    return (

        <div className="grid grid-cols-1 px-4 pt-4 pb-16 md:grid-cols-2 items-left md:pl-8 md:pt-20 md:pb-28">
            <div className="flex flex-col justify-start">
                <div className="flex flex-col pt-4">
                    <label className="pb-1 font-bold" htmlFor="email">Email</label>
                    <input
                        disabled
                        value={"email@gmail.com"}
                        className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                </div>
                <div className="flex flex-row gap-4 pt-4">
                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="firstname">First Name</label>
                        <input

                            value={"John"}
                            className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="lastname">Last Name</label>
                        <input

                            value={"Doe"}
                            className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                    </div>
                </div>
                <div className="flex flex-col pt-4">
                    <label className="pb-1 font-bold" htmlFor="executiveRole">Executive Role</label>
                    <input
                        disabled
                        value={"email@gmail.com"}
                        className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                </div>
                <div className="flex flex-col pt-4">
                    <label className="pb-1 font-bold" htmlFor="username">Username</label>
                    <input

                        value={"your display name"}
                        className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <img src="/admin.png" alt="profile-image" width={300} height={300} />
                <button
                    className="p-4 font-semibold tracking-wide text-white rounded-lg bg-text-dev-orange">
                    Change
                </button>
            </div>
        </div>
    )
}

export default Profile