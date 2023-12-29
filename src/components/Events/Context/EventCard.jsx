/* eslint-disable react/prop-types */
const EventCard = ({title: title, desc: description, type: type, eventDate}) => {
    
  return (
    <div className="flex flex-row gap-5 w-fit h-fit">
        {/* <div className=" w-[7.4rem] bg-text-dev-orange">
            <span>{eventDate.date}</span>
            <span>todo</span>
        </div>
        <div className="text-black">
            <span>{title}</span>
            <div>{type}</div>
            <span>{description}</span>
            <div></div>
        </div> */}
    </div>
  )
}

export default EventCard 