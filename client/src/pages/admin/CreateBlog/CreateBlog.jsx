import { useEffect, useState } from "react"
import DateStart from "../DateStart"

const CreateBlog = () => {
    // 
    const [selectedBlogTypes, setSelectedBlogTypes] = useState(["articles", "jobs", "news", "tech"])
    //
    const handleTypeChange = (event) => {
        const typeToRemove = event.target.value
        setSelectedBlogTypes(prev => {
            // function removes existing types and adds new types
            const filter = (previous, typeToRemove) => {
                if (previous.includes(typeToRemove)) {
                    // prev is previous value in setState, which is a list.
                    const newArray = prev.filter((type) => { type !== typeToRemove })
                    return newArray
                    // is a new array of types.
                } else {
                    return [...previous, typeToRemove]
                }
            }

            filter(prev, typeToRemove)
        })
    }

    const handleTypeDelete = (typeToRemove) => {
        //remove type from array
        const array = selectedBlogTypes;
        const newArray = array.filter((type) => { return type !== typeToRemove })
        setSelectedBlogTypes(newArray)
    }

useEffect(()=>{
    console.log(selectedBlogTypes)
},[selectedBlogTypes])

    return (
        <div className="w-full ">
            <div className="flex flex-col justify-start px-4 pt-4 pb-16 items-left md:pl-8 md:pt-20 md:pb-28">
                <h2 className="pb-8 text-4xl font-bold">Blog Management</h2>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="blog-title">Blog Title</label>
                        <input className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="blog-description">Blog Description</label>
                        <input className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] placeholder:text-start h-24 outline-none rounded-md" placeholder="Break in to Tech in 2024 seamlessly.............................." type="text" name="blog-description" id="blog-description" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="blog-type">Blog Type</label>
                        <div className="flex flex-row justify-center md:justify-start content-center border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 py-4 w-full max-w-[36rem] placeholder:text-start h-fit gap-6 outline-none rounded-md overflow-x-scroll" name="blog-type" id="blog-type" >
                            <div className="flex flex-row gap-2">
                                <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedBlogTypes.includes("article") ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"} `}>
                                    <input
                                        className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedBlogTypes.includes("articles") ? "bg-white" : "bg-[#9F918B]"}`}
                                        type="checkbox"
                                        value="articles"
                                        checked={selectedBlogTypes === "articles"}
                                        onChange={(e) => handleTypeChange(e)}
                                    />
                                    <span>Article</span>
                                </label>
                                <img onClick={() => {handleTypeDelete("articles") }} src="/admin/delete.svg" alt="delete" />
                            </div>

                            <div className="flex flex-row gap-2">
                                <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedBlogTypes.includes("news") ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"}`}>
                                    <input
                                        className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedBlogTypes.includes("news") ? "bg-white" : "bg-[#9F918B]"}`}
                                        type="checkbox"
                                        value="news"
                                        checked={selectedBlogTypes === "news"}
                                        onChange={handleTypeChange}
                                    />
                                    <span>
                                        News
                                    </span>
                                </label>
                                <img  onClick={() => { handleTypeDelete("news") }} src="/admin/delete.svg" alt="delete" />
                            </div>

                            <div className="flex flex-row gap-2">
                                <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedBlogTypes.includes("tech") ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"} `}>
                                    <input
                                        className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedBlogTypes.includes("tech") ? "bg-white" : "bg-[#9F918B]"}`}
                                        type="checkbox"
                                        value="tech"
                                        checked={selectedBlogTypes === "tech"}
                                        onChange={handleTypeChange}
                                    />
                                    <span>Tech</span>
                                </label>
                                <img onClick={() => { handleTypeDelete("tech") }} src="/admin/delete.svg" alt="delete" />
                            </div>


                            <div className="flex flex-row gap-2">
                                <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedBlogTypes.includes("jobs") ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"}`}>
                                    <input
                                        className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedBlogTypes.includes("jobs") ? "bg-white" : "bg-[#9F918B]"}`}
                                        type="checkbox"
                                        value="jobs"
                                        checked={selectedBlogTypes === "jobs"}
                                        onChange={handleTypeChange}
                                    />
                                    <span>
                                        Jobs
                                    </span>
                                </label>
                                <img  onClick={() => { handleTypeDelete("jobs") }} src="/admin/delete.svg" alt="delete" />
                            </div>
                        </div>
                        <div className="pb-8"></div>

                        <DateStart />

                        <div className="flex flex-col pt-4">
                            <label className="pb-1 font-bold" htmlFor="event-title">Choose Event Banner</label>

                            <label
                                htmlFor="file-input"
                                className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row items-center w-full max-w-[36rem]"
                            >
                                <div className="bg-white placeholder:text-black w-full placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none border-r-[1px] border-black flex flex-col justify-center">
                                    <span className="text-[#9F918B] font-bold"> Choose file </span>
                                    {/* <button className="flex flex-row content-center justify-center w-full border-l border-black"></button> */}
                                </div>
                                <span className="px-2 font-bold w-fit">Browse</span>
                                <input className="hidden" id="file-input" type="file" />
                            </label>


                            {/* <label htmlFor="" className="bg-white placeholder:text-black placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none min-w-[88%] " id="event-title">
                  Choose File
                </label> */}
                            {/* <button className="flex flex-row content-center justify-center w-full border-l border-black"><input type="file" placeholder="Browse" className="m-auto font-bold text-black w-fit h-fit" /></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateBlog