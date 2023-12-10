import { demoImpactStories } from "../../utils/demo-impact-stories"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Impact = () => {
    return (
        <section className="items-center pb-12 text-black bg-white xl:flex-col xl:flex">
            <div className="max-w-[88rem] lg:px-[7.5rem] md:px-12 px-4 w-full">
                <span className="flex flex-row justify-center">
                    <span className="w-full pb-20 text-5xl font-bold text-center pt-14 ">Impact Stories</span>
                    {/* <span className="absolute"><a href="">X</a></span> */}
                    {/* link to dev league testimonial twitter feed */}
                </span>
                <div className="relative grid">
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3 }}>
                        <Masonry columnsCount={3}>
                            {demoImpactStories.map(story =>
                                <div className="w-auto p-6 mx-2 my-2 border rounded-lg h-fit" key={story.id}>
                                    <div className="w-fit">
                                        <div className="flex flex-row pb-4">
                                            <img className="w-8 h-8 bg-white aspect-square" src={story.profile} alt="" />
                                            <div className="flex flex-col pl-2">
                                                <span className="text-xs font-semibold capitalize">{story.name}</span>
                                                <span className="text-xs opacity-60">@{story.username}</span>
                                            </div>

                                        </div>
                                        <span className="w-[15rem] text-base font-normal">{story.testimonial}</span>
                                    </div>
                                </div>
                            )}
                        </Masonry>
                    </ResponsiveMasonry>
                    <div className="absolute w-full h-full pointer-events-none gradient-blur">
                        <div className="w-full h-1/4 blur-lg first-blur"></div>
                        <div className="w-full h-1/4 "></div>
                        <div className="w-full bg-white opacity-70 h-1/4 third-blur"></div>
                        <div className="w-full bg-white h-1/4 fourth-blur opacity-90">
                            <div className="w-full h-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact