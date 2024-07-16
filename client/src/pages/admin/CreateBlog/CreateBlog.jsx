import { useState } from "react"
import Editor from "./MDXEditor"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const CreateBlog = () => {
    // state management
    const [selectedBlogTypes, setSelectedBlogTypes] = useState([])
    const [fileAdded, setFileAdded] = useState("")
    const [blogTitle, setBlogTitle] = useState("")
    const [fileAddedName, setFileAddedName] = useState(null)
    const [mdxValue, setMdxValue] = useState("Enter blog content")


    const createBlog = useMutation({
        mutationFn: (newBlog) => {
            return axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blog`, newBlog)
        },
    })


    const handleTypeChange = (event) => {
        const typeToRemove = event.target.value
        if (!selectedBlogTypes.includes(typeToRemove)) {
            setSelectedBlogTypes(prev => [...prev, typeToRemove])
        }
        else {
            // condition for if type exists
            const array = selectedBlogTypes;
            const newArray = array.filter((type) => { return type !== typeToRemove })
            setSelectedBlogTypes(newArray)
        }
        // if type is in prev, add it, else remove it
    }

    const handleTypeDelete = (typeToRemove) => {
        //remove type from array
        const array = selectedBlogTypes;
        const newArray = array.filter((type) => { return type !== typeToRemove })
        setSelectedBlogTypes(newArray)
    }

    const handleFile = (fileArray) => {
        const file = fileArray[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setFileAdded(reader.result)
            console.log(reader.result)
        }
        setFileAddedName(file.name)
    }

    // useEffect(() => {
    //     console.log(selectedBlogTypes)
    // }, [selectedBlogTypes])

    return (
        <div className="w-full ">
            <div className="flex flex-col justify-start px-4 pt-4 pb-16 items-left md:pl-8 md:pt-20 md:pb-28">
                <h2 className="pb-8 text-4xl font-bold">Blog Management</h2>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="blog-title">Blog Title</label>
                        <input
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                            className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-full max-w-[36rem] h-10 outline-none rounded-md" placeholder="Blog Title" type="text" name="blog-title" id="blog-title" />
                    </div>

                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="event-title">Blog Cover Image</label>

                        <label
                            htmlFor="file-input"
                            className=" h-fit border-[1.5px] bg-[#E2DEDC] border-[#292422] rounded-md flex flex-row items-center w-full max-w-[36rem]"
                        >
                            <div className="bg-white placeholder:text-black w-full placeholder:font-semibold pl-4 h-12 outline-none rounded-md rounded-r-none border-r-[1px] border-black flex flex-col justify-center">
                                <span className="text-[#9F918B] font-bold"> {fileAddedName && fileAddedName !== "" ? fileAddedName : " Choose image"} </span>
                                {/* <button className="flex flex-row content-center justify-center w-full border-l border-black"></button> */}
                            </div>
                            <span className="px-2 font-bold w-fit">Browse</span>
                            <input onChange={(e) => handleFile(e.target.files)} className="hidden" id="file-input" type="file" accept="image/*" />
                        </label>


                    </div>

                    <div className="flex flex-col pt-4">
                        <label className="pb-1 font-bold" htmlFor="blog-type">Blog Type</label>
                        <div className="flex flex-row justify-center md:justify-start content-center border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 py-4 w-full max-w-[36rem] placeholder:text-start h-fit gap-6 outline-none rounded-md overflow-x-scroll" name="blog-type" id="blog-type" >
                            <div className="flex flex-row gap-2">
                                <label className={`px-3 flex flex-row items-center gap-1 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl ${selectedBlogTypes.includes("articles") ? "bg-text-dev-orange" : "bg-[#D4CECB] text-[#9F918B]"} `}>
                                    <input
                                        className={`w-2 h-2 bg-white rounded-full appearance-none  ${selectedBlogTypes.includes("articles") ? "bg-white" : "bg-[#9F918B]"}`}
                                        type="checkbox"
                                        value="articles"
                                        checked={selectedBlogTypes === "articles"}
                                        onChange={(e) => handleTypeChange(e)}
                                    />
                                    <span>Article</span>
                                </label>
                                <img className={`${!selectedBlogTypes.includes("articles") && 'invisible'}`} onClick={() => { handleTypeDelete("articles") }} src="/admin/delete.svg" alt="delete" />
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
                                <img className={`${!selectedBlogTypes.includes("news") && 'invisible'}`} onClick={() => { handleTypeDelete("news") }} src="/admin/delete.svg" alt="delete" />
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
                                <img className={`${!selectedBlogTypes.includes("tech") && 'invisible'}`} onClick={() => { handleTypeDelete("tech") }} src="/admin/delete.svg" alt="delete" />
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
                                <img className={`${!selectedBlogTypes.includes("jobs") && 'invisible'}`} onClick={() => { handleTypeDelete("jobs") }} src="/admin/delete.svg" alt="delete" />
                            </div>
                        </div>
                        <div className="pb-8"></div>

                        {/* <DateStart setStartDate={setStartDate} startDate={startDate} setStartDateMonth={setStartDateMonth} startDateMonth={startDateMonth} setStartDateYear={setStartDateYear} startDateYear={startDateYear} /> */}



                        <div className="flex flex-col">
                            <label className="pb-1 font-bold" htmlFor="blog-description">Blog Description</label>
                            <div className=" w-full h-full min-h-[12rem] max-w-[36rem] border-[1.5px] border-[#292422] rounded-lg z-0">
                                {/* imported markdown editor */}
                                <Editor mdxValue={mdxValue} setMdxValue={setMdxValue} />
                            </div>
                        </div>

                        <div className="flex flex-row justify-end w-full pt-4 max-w-[36rem]">
                            <button
                                onClick={() => createBlog.mutate({ title: blogTitle, coverImage: fileAdded, imageName: fileAddedName, blogType: selectedBlogTypes, blogContent: mdxValue })}
                                className="px-3 py-2 text-xl font-semibold tracking-wide text-white rounded-lg bg-text-dev-orange" >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateBlog