import { demoImpactStories } from "../../utils/demo-impact-stories"

const Impact = () => {
    return (
        <section className="text-white bg-black lg:px-[7.5rem] md:px-12 px-4 flex flex-col">
            <span className="flex flex-row justify-center">
                <span className="text-5xl font-bold">Impact Stories</span>
                <span className="absolute"><a href="">X</a></span>
            </span>

            <div className="flex flex-col flex-wrap content-around h-[45rem]">
                {demoImpactStories.map(story =>
                    <div className="w-[20rem] h-fit p-6 rounded-lg border" key={story.id}>
                        <span>
                            <img className="bg-white" src={story.profile} alt="" />
                            <span>{story.name}</span>
                            <span className="text-base font-normal">{story.testimonial}</span>
                        </span>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Impact