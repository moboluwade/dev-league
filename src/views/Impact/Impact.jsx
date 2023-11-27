import { demoImpactStories } from "../../utils/demo-impact-stories"

const Impact = () => {
    return (
        <section className="text-white bg-black">
            <span>Impact Stories</span>
            <div>
                {demoImpactStories.map(story =>
                    <span key={story.id}>
                        <img className="bg-white" src={story.profile} alt="" />
                        <span>{story.name}</span>
                        <span>{story.testimonial}</span>
                    </span>
                )}
            </div>
        </section>
    )
}

export default Impact