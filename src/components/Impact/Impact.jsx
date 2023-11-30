import { demoImpactStories } from "../../utils/demo-impact-stories"

const Impact = () => {
    return (
        <section className="text-black border-black border bg-white lg:px-[7.5rem] md:px-12 px-4 flex flex-col">
            <span className="flex flex-row justify-center">
                <span className="text-5xl font-bold">Impact Stories</span>
                <span className="absolute"><a href="">X</a></span>
            </span>

            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 max-h-[45rem]">
                {demoImpactStories.map(story =>
                    <div className="w-auto p-6 border rounded-lg h-fit" key={story.id}>
                        <div className="w-fit">
                            <img className="bg-white" src={story.profile} alt="" />
                            <span>{story.name}</span>
                            <span className="w-[15rem] text-base font-normal">{story.testimonial}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Impact