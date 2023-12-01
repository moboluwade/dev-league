// import { useState } from 'react'
import Cards from './data'

const Articles = () => {
  // const [readMore, setReadMore] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto mt-8 text-center">
      <div className='lg:px-[7.5rem] md:px-12 px-4 '>
           <div className=''>
        <h1 className="pb-2 text-3xl font-bold">Our Articles</h1>
        <span className=" text-normal">
          The latest industry news, interviews, technologies, and resources.
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {Cards.map((card) => {
          const { id, desc, img, person } = card
          return (
            <div key={id} className="flex flex-col gap-4 text-start">
              <div>
                <img src={img} alt="image" />
              </div>
              <div className="innerWidth">
                <h1 className="pt-4 pb-2 pl-6 textBig">
                  {/* {readMore ? title : title.substring(0, 50)} : title} */}
                </h1>
                <p className="pl-6 textLight">
                  {desc}
                  {/* <button>{readMore ? 'show less' : 'read more'}</button> */}
                </p>
              </div>

              <div className="flex items-center gap-4 pl-6">
                <img src={person.img} alt="" />
                <span className="text">{person.name}</span>
                <span className="textLight">{person.date}</span>
              </div>
            </div>
          )
        })}
      </div>
      </div>
   
    </div>
  )
}

export default Articles
