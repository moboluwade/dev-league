import { useState } from "react";

const Event = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    return (
        <div className="flex flex-col justify-start md:pl-8 md:pt-20">
            <h2 className="pb-8 text-4xl font-bold">Event Management</h2>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col pt-4">
                    <label className="pb-1 font-bold" htmlFor="event-title">Event Title</label>
                    <input className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-[36rem] h-10 outline-none rounded-md" placeholder="Event Title" type="text" name="event-title" id="event-title" />
                </div>
                <div className="flex flex-col pt-4">
                    <label className="pb-1 font-bold" htmlFor="event-tagline">Event Tagline</label>
                    <input className="border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 w-[36rem] placeholder:text-start h-24 outline-none rounded-md" placeholder="Break in to Tech in 2024 seamlessly.............................." type="text" name="event-tagline" id="event-tagline" />
                </div>
                <div className="flex flex-col pt-4">
                    <label className="pb-1 font-bold" htmlFor="event-location">Event Location</label>
                    <div className="flex flex-row content-center border-[1.5px] border-[#292422] placeholder:text-[#9F918B] pl-4 py-4 w-[36rem] placeholder:text-start h-fit gap-6 outline-none rounded-md" name="event-location" id="event-location" >
                        <label className="px-3 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl bg-text-dev-orange">
                            <input
                                className=""
                                type="radio"
                                value="virtual"
                                checked={selectedLocation === "virtual"}
                                onChange={handleLocationChange}
                            />
                            Virtual
                        </label>
                        <label className="px-3 pt-[0.125rem] pb-[0.125rem] text-white border h-fit rounded-2xl bg-text-dev-orange">
                            <input
                                className=""
                                type="radio"
                                value="onsite"
                                checked={selectedLocation === "onsite"}
                                onChange={handleLocationChange}
                            />
                            Onsite
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event